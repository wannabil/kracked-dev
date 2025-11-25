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
    <div className="relative flex min-h-[60vh] w-full items-center justify-center bg-background overflow-hidden">
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {subtitle}
          </p>
          <div className="flex justify-center w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
