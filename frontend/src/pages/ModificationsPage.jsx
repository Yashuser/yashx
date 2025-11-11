import React from 'react';
import { PageLayout } from '@/components/PageLayout';
import { ContentBox } from '@/components/ContentBox';
import { Separator } from '@/components/ui/separator';

export default function ModificationsPage() {
  return (
    <PageLayout>
      <ContentBox>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
          Modifications
        </h1>
        
        <Separator className="my-4 sm:my-6" />
        
        <div className="space-y-4 sm:space-y-6 text-muted-foreground">
          <p className="text-sm sm:text-base leading-relaxed">
            The server operates on its own custom server software that allows for hundreds of players at once on
            the same world. It has taken significant time and effort to develop and you may read more about it{' '}
            <a href="#" className="text-gaming-green hover:underline">here</a>.
          </p>
          
          <p className="text-sm sm:text-base leading-relaxed">
            The server is based on the survival gamemode, set to the hard difficulty. There are however many
            changes to improve server performance and gameplay. These are listed below.
          </p>
          
          <Separator className="my-6 sm:my-8" />
          
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">World generation</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              The world uses a modified vanilla terrain generator, to prevent players from generating their own
              copy of the world.
            </p>
          </div>
          
          <Separator className="my-6 sm:my-8" />
          
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Gameplay Changes</h2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 ml-2 sm:ml-4 text-sm sm:text-base">
              <li>Increased player capacity for massive multiplayer experience</li>
              <li>Custom anti-lag optimizations for smooth gameplay</li>
              <li>Modified chunk loading for better performance</li>
              <li>Enhanced mob spawning algorithms</li>
              <li>Custom world border implementation</li>
            </ul>
          </div>
          
          <Separator className="my-6 sm:my-8" />
          
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Server Features</h2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 ml-2 sm:ml-4 text-sm sm:text-base">
              <li>24/7 uptime with minimal downtime</li>
              <li>No teleportation commands</li>
              <li>No protection plugins</li>
              <li>Pure vanilla survival experience</li>
              <li>Active community and player base</li>
            </ul>
          </div>
        </div>
      </ContentBox>
    </PageLayout>
  );
}