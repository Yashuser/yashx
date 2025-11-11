import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Modifications', path: '/modifications' },
    { name: 'Issues', path: '/issues' },
    { name: 'Commands', path: '/commands' },
    { name: 'About', path: '/about' },
    { name: 'Terms', path: '/terms' },
    { name: 'Subreddit', path: '/subreddit' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="backdrop-blur-md bg-card/80 border-b border-border shadow-gaming-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  className={cn(
                    'transition-all duration-200',
                    isActive(item.path)
                      ? 'bg-background text-foreground shadow-gaming-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
          <Link to="/shop">
            <Button 
              variant={isActive('/shop') ? 'default' : 'outline'}
              className={cn(
                'transition-all duration-200',
                isActive('/shop') 
                  ? 'bg-primary text-primary-foreground shadow-gaming-glow' 
                  : 'bg-primary/10 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground'
              )}
            >
              Shop
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};