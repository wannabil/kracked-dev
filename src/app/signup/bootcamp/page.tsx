'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import PageHero from '@/components/PageHero';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function BootcampSignupPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  // Handle browser autofill
  useEffect(() => {
    const checkAutofill = () => {
      if (nameRef.current && nameRef.current.value !== formData.name) {
        setFormData(prev => ({ ...prev, name: nameRef.current?.value || '' }));
      }
      if (emailRef.current && emailRef.current.value !== formData.email) {
        setFormData(prev => ({ ...prev, email: emailRef.current?.value || '' }));
      }
      if (phoneRef.current && phoneRef.current.value !== formData.phone) {
        setFormData(prev => ({ ...prev, phone: phoneRef.current?.value || '' }));
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          title="Registration Submitted!" 
          subtitle="We'll be in touch soon."
        />
        <div className="container mx-auto px-4 mt-10">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <p className="text-lg mb-4">Thank you for your interest in the Vibe Code Bootcamp!</p>
              <p className="text-muted-foreground">Our team will contact you shortly with next steps.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-20">
      <PageHero 
        title={t('bootcamp.title')} 
        subtitle="Sign up for the 28-day bootcamp"
      >
        <Badge variant="secondary" className="text-lg py-1 px-4">
          {t('bootcamp.price')}
        </Badge>
      </PageHero>

      <div className="container mx-auto px-4 mt-10">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>28-Day Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Week 1 */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default" className="text-sm">Week 1</Badge>
                    <h3 className="font-semibold text-lg">Foundation & First Projects</h3>
                  </div>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 1-2:</strong> Environment setup, Git basics, and your first deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 3-4:</strong> Build a personal portfolio site (HTML, CSS, JavaScript)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 5-7:</strong> Create a simple API with Node.js and deploy to production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Mentorship:</strong> 1-on-1 code review session with industry mentor</span>
                    </li>
                  </ul>
                </div>

                {/* Week 2 */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default" className="text-sm">Week 2</Badge>
                    <h3 className="font-semibold text-lg">Full-Stack Applications</h3>
                  </div>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 8-10:</strong> Build a task management app with React and backend API</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 11-12:</strong> Database integration (PostgreSQL/MongoDB) and user authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 13-14:</strong> Deploy full-stack app with CI/CD pipeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Mentorship:</strong> Architecture review and optimization session</span>
                    </li>
                  </ul>
                </div>

                {/* Week 3 */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default" className="text-sm">Week 3</Badge>
                    <h3 className="font-semibold text-lg">AI & Automation</h3>
                  </div>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 15-17:</strong> Build an AI-powered chatbot using OpenAI API</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 18-19:</strong> Create automation scripts for repetitive tasks (web scraping, data processing)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 20-21:</strong> Build a workflow automation tool (Zapier/IFTTT alternative)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Mentorship:</strong> Business value discussion - monetizing your automations</span>
                    </li>
                  </ul>
                </div>

                {/* Week 4 */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default" className="text-sm">Week 4</Badge>
                    <h3 className="font-semibold text-lg">Capstone & Portfolio</h3>
                  </div>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 22-25:</strong> Build your capstone project - solve a real problem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 26:</strong> Portfolio presentation and code review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 27:</strong> Deploy all projects and create professional portfolio site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Day 28:</strong> Graduation ceremony - Earn "Cracked Dev" status certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm"><strong>Mentorship:</strong> Career guidance and next steps session</span>
                    </li>
                  </ul>
                </div>

                {/* Additional Benefits */}
                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-3">Additional Benefits</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">Access to private Discord community with 500+ developers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">Weekly group sessions with industry leaders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">Lifetime access to course materials and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">Job placement assistance and interview prep</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
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
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    ref={phoneRef}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onInput={handleInput}
                    onAnimationStart={handleAnimationStart}
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+60 12-345 6789"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

