import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export const ContentBox = ({ children, className }) => {
  return (
    <Card 
      className={cn(
        'backdrop-blur-md bg-card/85 border-border shadow-gaming-lg',
        'p-4 sm:p-6 md:p-8 lg:p-12',
        'animate-fade-in',
        className
      )}
    >
      {children}
    </Card>
  );
};