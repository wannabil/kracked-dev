'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import PrayerWidget from './PrayerWidget';

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm border-b border-base-200/50 backdrop-blur-md bg-base-100/80">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">{t('nav.home')}</Link></li>
            <li><Link href="/talks">{t('nav.talks')}</Link></li>
            <li><Link href="/hackathon">{t('nav.hackathon')}</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold font-mono tracking-tighter">
          &lt; Kracked Devs /&gt;
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link href="/">{t('nav.home')}</Link></li>
          <li><Link href="/talks">{t('nav.talks')}</Link></li>
          <li><Link href="/hackathon">{t('nav.hackathon')}</Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <PrayerWidget />
        <LanguageToggle />
      </div>
    </div>
  );
};

export default Navbar;

