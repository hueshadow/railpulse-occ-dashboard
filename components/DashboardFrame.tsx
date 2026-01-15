import React from 'react';

export const DashboardFrame: React.FC = () => {
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden glass-panel transition-all duration-700 hover:border-primary/30 flex flex-col">
      {/* Mac-like Window Header */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-white/[0.02] border-b border-white/[0.05] flex items-center px-6 gap-3 z-20 backdrop-blur-md shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
        </div>
        <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
        <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded border border-white/5 flex-1 max-w-md">
            <span className="material-symbols-outlined text-[12px] text-white/30">lock</span>
            <span className="text-[10px] font-mono text-white/40 truncate">https://railpulse.netlify.app</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] font-mono text-primary/70 uppercase">Live Connection</span>
        </div>
      </div>

      {/* Main Dashboard Content - Iframe */}
      <div className="flex-1 w-full h-full pt-12 bg-white/[0.01]">
        <iframe 
            src="https://railpulse.netlify.app" 
            className="w-full h-full border-none"
            title="RailPulse Enterprise Network Overview"
            allow="fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </div>

      {/* Decorative Overlay Gradient for bottom fade integration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 pointer-events-none bg-gradient-to-t from-primary/10 to-transparent"></div>
    </div>
  );
};