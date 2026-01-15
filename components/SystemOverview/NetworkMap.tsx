import React from 'react';

export const NetworkMap: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Map Lines */}
            <g className="opacity-80 drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]">
                <path d="M100 300 L300 300 L400 200 L600 200" fill="none" stroke="#10b981" strokeWidth="3" />
                <path d="M200 100 L200 500 L400 500 L500 400" fill="none" stroke="#f59e0b" strokeWidth="3" />
                <path d="M100 100 L400 400 L700 400" fill="none" stroke="#3b82f6" strokeWidth="3" />
                <path d="M400 50 L400 550" fill="none" stroke="#ef4444" strokeWidth="3" />
            </g>

            {/* Stations */}
            <circle cx="300" cy="300" r="4" fill="white" className="animate-pulse shadow-[0_0_10px_white]" />
            <circle cx="400" cy="400" r="4" fill="white" />
            <circle cx="200" cy="200" r="4" fill="white" />
            <circle cx="400" cy="200" r="4" fill="white" />
            <circle cx="500" cy="400" r="4" fill="white" />
            <circle cx="200" cy="500" r="4" fill="white" />
          </svg>
        </div>
      </div>
      
      {/* Legend Overlay */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-white/10 rounded backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
          <span className="text-[10px] font-mono text-white/80 font-bold tracking-wide">LINE 1 OPERATIONAL</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-white/10 rounded backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(245,158,11,0.5)] animate-pulse"></div>
          <span className="text-[10px] font-mono text-white/80 font-bold tracking-wide">LINE 4 DELAY (3M)</span>
        </div>
      </div>
    </>
  );
};