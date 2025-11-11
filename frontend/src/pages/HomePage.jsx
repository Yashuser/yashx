import React from 'react';
import { PageLayout } from '@/components/PageLayout';
import { ContentBox } from '@/components/ContentBox';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <PageLayout>
      <ContentBox>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
          Welcome to 2B2T
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          The oldest anarchy server in Minecraft. No rules, no limits, pure survival chaos.
          Join thousands of players in the ultimate test of skill, strategy, and survival.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="p-4 sm:p-6 bg-secondary/50 rounded-lg border border-border">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">No Rules</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Experience true anarchy. Build, destroy, survive - anything goes on this legendary server.
            </p>
          </div>
          
          <div className="p-4 sm:p-6 bg-secondary/50 rounded-lg border border-border">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Rich History</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Explore ancient ruins and monuments built by players over years of chaotic gameplay.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link to="/modifications" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-gaming-glow">
              View Modifications
            </Button>
          </Link>
          <Link to="/about" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary/10">
              Learn More
            </Button>
          </Link>
        </div>
      </ContentBox>
    </PageLayout>
  );
}