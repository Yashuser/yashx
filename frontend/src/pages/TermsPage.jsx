import React from 'react';
import { PageLayout } from '@/components/PageLayout';
import { ContentBox } from '@/components/ContentBox';
import { Separator } from '@/components/ui/separator';

export default function TermsPage() {
  return (
    <PageLayout>
      <ContentBox>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Terms of Service
        </h1>
        
        <p className="text-sm text-muted-foreground mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <Separator className="my-6" />
        
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-base leading-relaxed">
              By connecting to and playing on this server, you agree to abide by these terms and conditions.
              If you do not agree, please disconnect immediately.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Server Rules</h2>
            <p className="text-base leading-relaxed mb-2">
              While this is an anarchy server, there are a few technical limitations:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No lag machines that severely impact server performance</li>
              <li>No attempts to crash the server</li>
              <li>No doxxing or real-life threats</li>
              <li>Hacked clients are allowed within reasonable limits</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Account Responsibility</h2>
            <p className="text-base leading-relaxed">
              You are responsible for all actions taken from your Minecraft account. Keep your account
              secure and do not share your credentials.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Server Availability</h2>
            <p className="text-base leading-relaxed">
              We strive to maintain 24/7 uptime, but we do not guarantee uninterrupted service. Server
              maintenance, updates, or technical issues may cause temporary downtime.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Disclaimer</h2>
            <p className="text-base leading-relaxed">
              The server administrators are not responsible for any losses, including but not limited to
              in-game items, builds, or data. This is an anarchy server where anything can happen.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Changes to Terms</h2>
            <p className="text-base leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the server after
              changes constitutes acceptance of the modified terms.
            </p>
          </div>
        </div>
      </ContentBox>
    </PageLayout>
  );
}