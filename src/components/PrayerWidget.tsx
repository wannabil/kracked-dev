'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { Badge } from '@/components/ui/badge';

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  [key: string]: string;
}

const PRAYER_ORDER = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'] as const;

const PrayerWidget = () => {
  const { t } = useLanguage();
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string } | null>(null);
  const [timings, setTimings] = useState<PrayerTimes | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const date = new Date();
        const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        // Method 17 is JAKIM (Malaysia)
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${formattedDate}?city=Kuala%20Lumpur&country=Malaysia&method=17`
        );
        const data = await res.json();

        if (data.data && data.data.timings) {
          setTimings(data.data.timings);
          calculateNextPrayer(data.data.timings);
        }
      } catch (error) {
        console.error('Failed to fetch prayer times', error);
      }
    };

    fetchPrayerTimes();
    // Update every minute to check for next prayer
    const interval = setInterval(fetchPrayerTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  const calculateNextPrayer = (currentTimings: PrayerTimes) => {
    const now = new Date();
    const timeNow = now.getHours() * 60 + now.getMinutes();

    for (const prayer of PRAYER_ORDER) {
      const [hours, minutes] = currentTimings[prayer].split(':').map(Number);
      const prayerTime = hours * 60 + minutes;

      if (prayerTime > timeNow) {
        setNextPrayer({ name: prayer, time: currentTimings[prayer] });
        return;
      }
    }

    // If all passed, next is Fajr tomorrow (simplified to just showing Fajr)
    setNextPrayer({ name: 'Fajr', time: currentTimings['Fajr'] });
  };

  if (!nextPrayer) return null;

  return (
    <div className="relative hidden sm:inline-block text-left">
      <Badge
        variant="outline"
        className="flex items-center gap-2 py-1 px-3 cursor-pointer select-none"
        onClick={() => timings && setOpen((prev) => !prev)}
        role="button"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className="text-xs font-semibold opacity-70">{t('nav.prayer')}</span>
        <span className="font-bold">
          {nextPrayer.name} {nextPrayer.time}
        </span>
      </Badge>

      {open && timings && (
        <div className="absolute right-0 mt-2 w-56 rounded-md border bg-background shadow-lg p-3 text-xs z-40">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-semibold">Hari ini</span>
            <button
              type="button"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="space-y-1">
            {PRAYER_ORDER.map((name) => (
              <div key={name} className="flex items-center justify-between">
                <span className="capitalize">{name}</span>
                <span
                  className={
                    name === nextPrayer.name
                      ? 'font-semibold text-primary'
                      : 'text-foreground/80'
                  }
                >
                  {timings[name]}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PrayerWidget;

