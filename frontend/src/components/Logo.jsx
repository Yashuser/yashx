import React from 'react';

export const Logo = ({ src, alt = '2BUILDERS2TOOLS' }) => {
  return (
    <div className="flex justify-center py-12">
      <div className="relative">
        <img
          src={src || 'https://via.placeholder.com/800x200/1a1f2e/60a5fa?text=2BUILDERS2TOOLS'}
          alt={alt}
          className="max-w-full h-auto w-[600px] drop-shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      </div>
    </div>
  );
};