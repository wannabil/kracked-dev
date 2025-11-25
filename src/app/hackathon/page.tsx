'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '@/components/PageHero';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

export default function HackathonPage() {
  const { t } = useLanguage();
  const [isScopeOpen, setIsScopeOpen] = useState(false);

  return (
    <main className="min-h-screen pb-20">
      <PageHero 
        title={t('hackathon.title')} 
        subtitle={t('hackathon.desc')}
      >
        <div className="inline-flex items-center justify-center text-lg py-3 px-8 rounded-full bg-primary/10 border border-primary text-primary glow-gold animate-pulse shadow-[0_0_20px_rgba(255,51,51,0.3)]">
          {t('hackathon.prize')}
        </div>
      </PageHero>

      <div className="container mx-auto px-4">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
               <CardTitle className="text-primary">{t('hackathon.bug_bounty')}</CardTitle>
            </CardHeader>
            <CardContent>
               <p>{t('hackathon.rules')}</p>
            </CardContent>
            <CardFooter className="justify-end">
               <Button variant="outline" size="sm" onClick={() => setIsScopeOpen(true)}>View Scope</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
               <CardTitle className="text-secondary-foreground">Point System</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="mb-4">Earn points for submissions, bug reports, and community help. Top 10 get interviewed automatically.</p>
               <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">+10 Bug</Badge>
                  <Badge variant="outline">+50 Feature</Badge>
                  <Badge variant="outline">+5 Help</Badge>
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">{t('hackathon.leaderboard')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Focus</TableHead>
                  <TableHead className="text-right">{t('hackathon.points')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { rank: 1, name: "Ali Z.", project: "Auto-Receipt AI", focus: "Automation", points: "1,250" },
                  { rank: 2, name: "Sarah M.", project: "VibeMatch", focus: "Social", points: "980" },
                  { rank: 3, name: "Ken T.", project: "CryptoTracker MY", focus: "Finance", points: "850" },
                  { rank: 4, name: "Mei Ling", project: "Pasar Malam Maps", focus: "Geo", points: "720" },
                  { rank: 5, name: "Rajiv K.", project: "Math Solver Bot", focus: "Education", points: "690" },
                ].map((row) => (
                  <TableRow key={row.rank}>
                    <TableCell className="font-medium">{row.rank}</TableCell>
                    <TableCell className="font-bold">{row.name}</TableCell>
                    <TableCell>{row.project}</TableCell>
                    <TableCell>{row.focus}</TableCell>
                    <TableCell className="text-right">{row.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Bug Bounty Scope Dialog */}
      <Dialog open={isScopeOpen} onOpenChange={setIsScopeOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Web Dev & Design Feedback Program</DialogTitle>
            <DialogDescription>
              Find web development issues, design improvements, and business opportunities. All submissions are reviewed by our team.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            {/* Rewards Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Rewards & Payouts</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                  <span className="font-medium">Critical Issues & Major Improvements</span>
                  <Badge variant="destructive" className="text-base py-1 px-3">RM 500 - RM 1,200</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                  <span className="font-medium">High Impact Issues</span>
                  <Badge variant="default" className="text-base py-1 px-3">RM 200 - RM 500</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                  <span className="font-medium">Medium Impact Issues</span>
                  <Badge variant="secondary" className="text-base py-1 px-3">RM 50 - RM 200</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                  <span className="font-medium">Low Impact Issues</span>
                  <Badge variant="outline" className="text-base py-1 px-3">RM 10 - RM 50</Badge>
                </div>
              </div>
            </div>

            {/* Scope Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">In Scope</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Web application (kracked-dev.com and subdomains)</li>
                <li>Frontend bugs and functionality issues</li>
                <li>Performance optimization opportunities</li>
                <li>Responsive design and mobile compatibility issues</li>
                <li>Accessibility (a11y) improvements</li>
                <li>User experience (UX) and user interface (UI) problems</li>
                <li>Cross-browser compatibility issues</li>
                <li>API integration and data flow issues</li>
                <li>Business logic improvements and conversion optimization</li>
                <li>Content and copy improvements</li>
                <li>Navigation and user flow issues</li>
              </ul>
            </div>

            {/* Out of Scope */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-destructive">Out of Scope</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Security vulnerabilities (handled separately)</li>
                <li>Third-party service issues</li>
                <li>Personal preference suggestions without clear rationale</li>
                <li>Issues that don't impact functionality or user experience</li>
                <li>Duplicate submissions</li>
                <li>Issues already reported or fixed</li>
                <li>Spam or low-effort submissions</li>
              </ul>
            </div>

            {/* Guidelines */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Submission Guidelines</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Submit detailed reports with screenshots or examples</li>
                <li>Include steps to reproduce the issue</li>
                <li>Explain the business or user impact</li>
                <li>Suggest specific improvements when possible</li>
                <li>One reward per unique issue or improvement</li>
              </ul>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Rewards are paid in AI credits or cash equivalent. All submissions are subject to review and verification.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
