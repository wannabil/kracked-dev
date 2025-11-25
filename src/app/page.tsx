'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './context/LanguageContext';
import PageHero from '@/components/PageHero';
import InfoPanel from '@/components/InfoPanel';
import StatCard from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <PageHero 
        title={t('hero.title')} 
        subtitle={t('hero.subtitle')}
        backgroundImage="/developer-hero.jpg"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/join">{t('hero.cta_join')}</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/talks">{t('hero.cta_explore')}</Link>
          </Button>
        </div>
      </PageHero>

      {/* Bootcamp Section */}
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Program Info */}
          <InfoPanel title={t('bootcamp.title')}>
            <p className="text-lg mb-6 text-muted-foreground">{t('bootcamp.desc')}</p>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-2">
                 <div className="h-2 w-2 rounded-full bg-primary" />
                 <span>{t('bootcamp.feature1')}</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="h-2 w-2 rounded-full bg-primary" />
                 <span>{t('bootcamp.feature2')}</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="h-2 w-2 rounded-full bg-primary" />
                 <span>{t('bootcamp.feature3')}</span>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/signup/bootcamp">
                <Badge variant="secondary" className="text-lg py-1 px-4 cursor-pointer hover:opacity-80 transition-opacity">
                  {t('bootcamp.price')}
                </Badge>
              </Link>
            </div>
          </InfoPanel>

          {/* Before/After Vibe Check */}
          <div className="flex flex-col gap-6">
             <Card className="border-destructive/50">
                <CardHeader>
                  <CardTitle className="text-destructive">Before Kracked</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-70 mb-4">Struggling with tutorials. No real projects. 0 income.</p>
                  <div className="rounded bg-muted p-4 font-mono text-sm text-muted-foreground">
                    <pre>const skills = [];</pre>
                    <pre>const income = 0;</pre>
                  </div>
                </CardContent>
             </Card>

             <Card className="border-green-500/50">
                <CardHeader>
                  <CardTitle className="text-green-600 dark:text-green-400">After Kracked</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90 mb-4">Shipping apps. Solving problems. Getting paid.</p>
                  <div className="rounded bg-green-500/10 p-4 font-mono text-sm text-green-700 dark:text-green-300">
                    <pre>const skills = ['Fullstack', 'AI', 'Auto'];</pre>
                    <pre>const income = 5000; // MYR</pre>
                  </div>
                </CardContent>
             </Card>
          </div>
        </div>

        {/* Stats/Proof */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
           <StatCard label="Members" value="500+" desc="Active cracked devs" />
           <StatCard label="Projects" value="120+" desc="Shipped to production" />
           <StatCard label="Earnings" value="RM 50k+" desc="Community total this month" />
        </div>
      </div>
    </main>
  );
}
