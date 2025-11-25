'use client';

import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, children, backgroundImage }: PageHeroProps) => {
  return (
    <div className="hero min-h-[60vh] bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
            {title}
          </h1>
          <p className="py-6 text-xl text-base-content/80">
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHero;

