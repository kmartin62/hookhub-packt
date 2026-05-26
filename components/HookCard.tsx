import React from 'react';
import { Hook } from '@/data/hooks';

interface HookCardProps {
  hook: Hook;
}

export function HookCard({ hook }: HookCardProps) {
  return (
    <div className="flex flex-col p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-black uppercase text-black">{hook.name}</h3>
        <span className="px-3 py-1 bg-lime-400 border-2 border-black text-black text-xs font-bold uppercase">
          {hook.category}
        </span>
      </div>
      <p className="text-black font-medium mb-6 flex-grow leading-tight">
        {hook.description}
      </p>
      <a
        href={hook.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center h-12 px-6 py-2 text-sm font-black uppercase text-white bg-purple-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
      >
        View on GitHub
      </a>
    </div>
  );
}
