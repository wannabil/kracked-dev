'use client';

import React from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-6 md:px-8 md:py-0 border-t bg-muted/40">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          {t('footer.copyright')}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
           <a href="#" className="hover:underline">About</a>
           <a href="#" className="hover:underline">Contact</a>
           <a href="#" className="hover:underline">Jobs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

