import React from 'react';
import { PageLayout } from '@/components/PageLayout';
import { ContentBox } from '@/components/ContentBox';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <PageLayout>
      <ContentBox>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          About 2B2T
        </h1>
        
        <Separator className="my-6" />
        
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            2builders2tools (2b2t) is the oldest anarchy server in Minecraft, running since December 2010.
            It has become one of the most infamous and well-known Minecraft servers, famous for its
            complete lack of rules and its long, rich history.
          </p>
          
          <Separator className="my-8" />
          
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">What is Anarchy?</h2>
            <p className="text-base leading-relaxed">
              In the context of Minecraft, anarchy means there are no rules. Players can grief, build,
              destroy, cheat (within reason), and do anything they want. There are no moderators banning
              players for their actions, making it a truly unique multiplayer experience.
            </p>
          </div>
          
          <Separator className="my-8" />
          
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Server History</h2>
            <p className="text-base leading-relaxed mb-4">
              Since its creation in 2010, 2b2t has seen countless wars, bases, groups, and legendary players.
              The server has never been reset, meaning every structure, every griefed area, and every story
              is preserved in the world.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Operating continuously for over 13 years</li>
              <li>World size spanning millions of blocks</li>
              <li>Thousands of players have joined over the years</li>
              <li>Documented history of major events and player groups</li>
            </ul>
          </div>
          
          <Separator className="my-8" />
          
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Community</h2>
            <p className="text-base leading-relaxed">
              The 2b2t community is diverse and passionate. From YouTubers documenting their adventures to
              veteran players protecting ancient history, the server has fostered a unique culture unlike
              any other in Minecraft.
            </p>
          </div>
        </div>
      </ContentBox>
    </PageLayout>
  );
}