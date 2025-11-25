'use client';

import React from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1">
      <Button 
        variant={language === 'ms' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ms')}
      >
        MY
      </Button>
      <Button 
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;

