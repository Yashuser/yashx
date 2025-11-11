import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export const ContentBox = ({ children, className }) => {
  return (
    <Card 
      className={cn(
        'backdrop-blur-md bg-card/85 border-border shadow-gaming-lg',
        'p-8 sm:p-12',
        'animate-fade-in',
        className
      )}
    >
      {children}
    </Card>
  );
};