'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import PageHero from '@/components/PageHero';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function JoinCommunityPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    background: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // Handle browser autofill
  useEffect(() => {
    const checkAutofill = () => {
      if (nameRef.current && nameRef.current.value !== formData.name) {
        setFormData(prev => ({ ...prev, name: nameRef.current?.value || '' }));
      }
      if (emailRef.current && emailRef.current.value !== formData.email) {
        setFormData(prev => ({ ...prev, email: emailRef.current?.value || '' }));
      }
    };

    // Check immediately and after a short delay to catch autofill
    const timer1 = setTimeout(checkAutofill, 100);
    const timer2 = setTimeout(checkAutofill, 500);
    const timer3 = setTimeout(checkAutofill, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    // Handle both manual input and autofill
    const input = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [input.name]: input.value,
    }));
  };

  const handleAnimationStart = (e: React.AnimationEvent<HTMLInputElement>) => {
    // Browsers trigger animation when autofilling
    if (e.animationName === 'onAutoFillStart') {
      const input = e.currentTarget;
      setFormData(prev => ({
        ...prev,
        [input.name]: input.value,
      }));
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen pb-20">
        <PageHero 
          title={t('join.success_title')} 
          subtitle={t('join.success_subtitle')}
        />
        <div className="container mx-auto px-4 mt-10">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <p className="text-lg mb-4">{t('join.success_message')}</p>
              <p className="text-muted-foreground">{t('join.success_details')}</p>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-20">
      <PageHero 
        title={t('join.title')} 
        subtitle={t('join.subtitle')}
      />

      <div className="container mx-auto px-4 mt-10">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{t('join.form_title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} method="POST" className="space-y-6" autoComplete="on">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('join.name_label')}
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onInput={handleInput}
                    onAnimationStart={handleAnimationStart}
                    autoComplete="name"
                    autoCapitalize="words"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('join.name_placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('join.email_label')}
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onInput={handleInput}
                    onAnimationStart={handleAnimationStart}
                    autoComplete="email"
                    inputMode="email"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('join.email_placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="background" className="block text-sm font-medium mb-2">
                    {t('join.background_label')}
                  </label>
                  <select
                    id="background"
                    name="background"
                    value={formData.background}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">{t('join.background_placeholder')}</option>
                    <option value="beginner">{t('join.background_beginner')}</option>
                    <option value="intermediate">{t('join.background_intermediate')}</option>
                    <option value="advanced">{t('join.background_advanced')}</option>
                    <option value="professional">{t('join.background_professional')}</option>
                  </select>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {t('join.submit_button')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{t('join.benefits_title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{t('join.benefit1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{t('join.benefit2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{t('join.benefit3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{t('join.benefit4')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

