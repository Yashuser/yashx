import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { ContentBox } from '@/components/ContentBox';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

export default function IssuesPage() {
  const [formData, setFormData] = useState({
    username: '',
    issue: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission - store in localStorage
    const issues = JSON.parse(localStorage.getItem('issues') || '[]');
    const newIssue = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };
    issues.push(newIssue);
    localStorage.setItem('issues', JSON.stringify(issues));
    
    toast.success('Issue submitted successfully!', {
      description: 'Your issue has been recorded and will be reviewed.'
    });
    
    setFormData({ username: '', issue: '', description: '' });
  };

  return (
    <PageLayout>
      <ContentBox>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
          Report Issues
        </h1>
        
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
          Found a bug or experiencing problems? Let us know and we'll investigate.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm sm:text-base text-foreground">
              Minecraft Username
            </Label>
            <Input
              id="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
              className="bg-secondary/50 border-border focus:border-primary text-sm sm:text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="issue" className="text-sm sm:text-base text-foreground">
              Issue Title
            </Label>
            <Input
              id="issue"
              placeholder="Brief description of the issue"
              value={formData.issue}
              onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
              required
              className="bg-secondary/50 border-border focus:border-primary text-sm sm:text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm sm:text-base text-foreground">
              Detailed Description
            </Label>
            <Textarea
              id="description"
              placeholder="Describe the issue in detail..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={6}
              className="bg-secondary/50 border-border focus:border-primary resize-none text-sm sm:text-base"
            />
          </div>
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-gaming-glow"
          >
            Submit Issue
          </Button>
        </form>
      </ContentBox>
      <Toaster />
    </PageLayout>
  );
}