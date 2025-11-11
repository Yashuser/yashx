import React from 'react';
import { PageLayout } from '@/components/PageLayout';
import { ContentBox } from '@/components/ContentBox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function CommandsPage() {
  const commands = [
    { command: '/kill', description: 'Kills your character', category: 'Basic' },
    { command: '/msg <player> <message>', description: 'Send a private message', category: 'Communication' },
    { command: '/list', description: 'Shows online players', category: 'Info' },
    { command: '/tps', description: 'Shows server performance', category: 'Info' },
    { command: '/queue', description: 'Check your position in queue', category: 'Info' },
    { command: '/whisper <player> <message>', description: 'Alternative to /msg', category: 'Communication' },
  ];

  return (
    <PageLayout>
      <ContentBox>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Commands
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Available commands on the server. Remember, this is anarchy - most commands are disabled!
        </p>
        
        <Separator className="mb-8" />
        
        <div className="space-y-4">
          {commands.map((cmd, index) => (
            <div 
              key={index}
              className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors duration-200"
            >
              <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                <code className="text-primary font-mono text-sm sm:text-base">
                  {cmd.command}
                </code>
                <Badge variant="outline" className="text-xs">
                  {cmd.category}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                {cmd.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> Most traditional Minecraft commands are disabled
            to maintain the anarchy nature of the server. Admin commands and teleportation are not available.
          </p>
        </div>
      </ContentBox>
    </PageLayout>
  );
}