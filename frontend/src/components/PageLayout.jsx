import React from 'react';
import { ParallaxBackground } from '@/components/ParallaxBackground';
import { Navigation } from '@/components/Navigation';
import { Logo } from '@/components/Logo';

export const PageLayout = ({ children, logoSrc }) => {
  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />
      <div className="relative z-10">
        <Navigation />
        <Logo src={logoSrc} />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
          {children}
        </main>
      </div>
    </div>
  );
};