'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import PrayerWidget from './PrayerWidget';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full border-b bg-background"
    >
      <div className="container flex h-16 items-center px-4 mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <span className="font-bold text-lg tracking-tight">
              Kracked Devs
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-foreground/60 hover:text-foreground transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/talks" className="text-foreground/60 hover:text-foreground transition-colors">
              {t('nav.talks')}
            </Link>
            <Link href="/hackathon" className="text-foreground/60 hover:text-foreground transition-colors">
              {t('nav.hackathon')}
            </Link>
          </nav>
        </div>

        <div className="inline-flex md:hidden mr-2">
           <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             <Menu className="h-5 w-5" />
           </Button>
        </div>
        <Link href="/" className="md:hidden mr-auto font-bold text-lg">
            Kracked Devs
        </Link>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
             {/* Search placeholder if needed */}
          </div>
          <div className="flex items-center gap-2">
            <PrayerWidget />
            <div className="h-4 w-px bg-border mx-1 hidden sm:block" />
            <LanguageToggle />
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t overflow-hidden bg-background"
          >
            <div className="p-4 space-y-2">
              <Link href="/" className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                {t('nav.home')}
              </Link>
              <Link href="/talks" className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                {t('nav.talks')}
              </Link>
              <Link href="/hackathon" className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                {t('nav.hackathon')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
