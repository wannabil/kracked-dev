'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import PageHero from '@/components/PageHero';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TalksSignupPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    talkInterest: '',
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
          title="Registration Successful!" 
          subtitle="You're signed up for Community Talks"
        />
        <div className="container mx-auto px-4 mt-10">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <p className="text-lg mb-4">Thank you for registering!</p>
              <p className="text-muted-foreground">We'll send you updates about upcoming talks and events.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-20">
      <PageHero 
        title={t('talks.title')} 
        subtitle="Join our community talks and learn from industry experts"
      />

      <div className="container mx-auto px-4 mt-10">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up for Community Talks</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} method="POST" className="space-y-6" autoComplete="on">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
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
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
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
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="talkInterest" className="block text-sm font-medium mb-2">
                    Which topic interests you most?
                  </label>
                  <select
                    id="talkInterest"
                    name="talkInterest"
                    value={formData.talkInterest}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a topic</option>
                    <option value="math-engineering">{t('talks.topic1')}</option>
                    <option value="automation">{t('talks.topic2')}</option>
                    <option value="business-value">{t('talks.topic3')}</option>
                    <option value="all">All Topics</option>
                  </select>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Sign Up for Talks
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>What to Expect</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Learn from industry leaders and successful developers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Network with other cracked developers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Get insights on real-world projects and business value</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

