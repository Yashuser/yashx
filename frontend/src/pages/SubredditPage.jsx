import React from 'react';
import { PageLayout } from '@/components/PageLayout';
import { ContentBox } from '@/components/ContentBox';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function SubredditPage() {
  return (
    <PageLayout>
      <ContentBox>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Join Our Community
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Connect with thousands of players, share your stories, and stay updated on server news.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-secondary/50 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
              Reddit Community
            </h3>
            <p className="text-muted-foreground mb-4">
              Join r/2b2t to discuss server events, share screenshots, and connect with other players.
            </p>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => window.open('https://reddit.com/r/2b2t', '_blank')}
            >
              Visit Subreddit
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="p-6 bg-secondary/50 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-3">Discord Server</h3>
            <p className="text-muted-foreground mb-4">
              Real-time chat with players, coordinate with groups, and get instant updates.
            </p>
            <Button 
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10"
              onClick={() => window.open('https://discord.gg/2b2t', '_blank')}
            >
              Join Discord
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-6 bg-muted/30 rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-3">Community Guidelines</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Be respectful to community members</li>
            <li>No spam or excessive self-promotion</li>
            <li>Keep discussions relevant to 2b2t</li>
            <li>Follow Reddit and Discord's terms of service</li>
            <li>Share your experiences and help new players</li>
          </ul>
        </div>
      </ContentBox>
    </PageLayout>
  );
}