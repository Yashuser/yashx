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
    <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-6 pb-2 sm:pb-4">
      <nav className="backdrop-blur-md bg-card/85 border border-border shadow-gaming-lg rounded-lg overflow-x-auto scrollbar-hide">
        <div className="px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[56px] sm:h-16">
            <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive(item.path) ? 'default' : 'ghost'}
                    size="sm"
                    className={cn(
                      'transition-all duration-200 text-xs sm:text-sm whitespace-nowrap',
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
            <Link to="/shop" className="ml-2 flex-shrink-0">
              <Button 
                variant={isActive('/shop') ? 'default' : 'outline'}
                size="sm"
                className={cn(
                  'transition-all duration-200 text-xs sm:text-sm whitespace-nowrap',
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
    </div>
  );
};