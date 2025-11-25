'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';
import PageHero from '@/components/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function TalksPage() {
  const { t } = useLanguage();

  const speakers = [
    {
      date: "Oct 12",
      name: "Sarah Jenkins",
      role: t('talks.speaker1_role'),
      desc: "Engineering maths into profit. How I used simple calculus to optimize logistics for a Grab competitor.",
    },
    {
      date: "Oct 26",
      name: "Ahmad Razak",
      role: t('talks.speaker2_role'),
      desc: "Automation is not just scripts. Building enterprise workflows with zero-code and low-code solutions.",
    },
    {
      date: "Nov 15",
      name: "Jessica Lee",
      role: t('talks.speaker3_role'),
      desc: 'The "Vibe Code" philosophy. Selling the feeling, not just the functionality.',
    },
  ];

  return (
    <main className="min-h-screen pb-20">
      <PageHero 
        title={t('talks.title')} 
        subtitle={t('talks.subtitle')}
      />

      <div className="container mx-auto px-4 py-10">
        {/* Value Prop Section */}
        <Card className="mb-12 border-primary/20 bg-muted/30">
          <CardContent className="text-center pt-6">
             <h2 className="text-3xl font-bold mb-2">{t('talks.card_title')}</h2>
               <p className="text-xl opacity-80">{t('talks.card_desc')}</p>
               <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <Badge variant="outline" className="text-lg py-1 px-3">{t('talks.topic1')}</Badge>
                  <Badge variant="outline" className="text-lg py-1 px-3">{t('talks.topic2')}</Badge>
                  <Badge variant="outline" className="text-lg py-1 px-3">{t('talks.topic3')}</Badge>
               </div>
               <div className="mt-8">
                 <Button size="lg" asChild>
                   <Link href="/signup/talks">Sign Up for Community Talks</Link>
                 </Button>
               </div>
            </CardContent>
        </Card>

        {/* Speakers List */}
        <h3 className="text-2xl font-bold mb-8 text-center">Featured Speakers</h3>
        <div className="flex flex-col gap-8 max-w-3xl mx-auto relative">
           {/* Vertical Line */}
           <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
           
           {speakers.map((speaker, index) => (
             <motion.div 
               key={index} 
               className="relative flex flex-col md:flex-row gap-6 md:pl-20"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.2, delay: index * 0.1 }}
             >
               {/* Dot */}
               <div className="absolute left-[31px] top-6 h-2 w-2 rounded-full bg-primary hidden md:block" />
               
               <div className="md:w-24 flex-shrink-0 pt-1 md:text-right">
                  <div className="font-mono font-bold text-muted-foreground">{speaker.date}</div>
               </div>
               <Card className="flex-grow hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                       <div>
                          <CardTitle className="text-lg">{speaker.name}</CardTitle>
                          <div className="text-sm font-semibold text-primary mt-1">{speaker.role}</div>
                       </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {speaker.desc}
                    </p>
                  </CardContent>
               </Card>
             </motion.div>
           ))}
        </div>
      </div>
    </main>
  );
}
