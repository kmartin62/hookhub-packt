import React from 'react';
import { hooks } from '@/data/hooks';
import { HookCard } from './HookCard';

export function HookGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {hooks.map((hook) => (
        <HookCard key={hook.id} hook={hook} />
      ))}
    </div>
  );
}
