import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col w-full py-4 mb-4 select-none items-center">
      {/* Top Row: Main Titles */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6 text-center">
         {/* Brand Name */}
         <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
            RailPulse
         </h1>
         
         {/* Chinese Title */}
         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans">
            城市轨道交通运营指挥平台
         </h1>

         {/* OCC Badge */}
         <div className="mt-2 lg:mt-0 px-3 py-1 border border-cyan-500/30 bg-cyan-950/30 rounded text-cyan-400 text-xs font-mono tracking-widest font-bold backdrop-blur-md">
            OCC
         </div>
      </div>

      {/* Bottom Row: Workflow Breadcrumbs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm text-slate-400 font-medium tracking-wide">
        <div className="group flex items-center gap-2 cursor-pointer transition-colors hover:text-cyan-400">
            <span>态势感知</span>
        </div>
        
        <span className="material-symbols-outlined text-[12px] text-slate-600">arrow_forward_ios</span>
        
        <div className="group flex items-center gap-2 cursor-pointer transition-colors hover:text-cyan-400">
            <span>风险研判</span>
        </div>
        
        <span className="material-symbols-outlined text-[12px] text-slate-600">arrow_forward_ios</span>
        
        <div className="group flex items-center gap-2 cursor-pointer transition-colors hover:text-cyan-400">
            <span>指挥处置</span>
        </div>
        
        <span className="material-symbols-outlined text-[12px] text-slate-600">arrow_forward_ios</span>

        <div className="group flex items-center gap-2 cursor-pointer transition-colors hover:text-cyan-400">
            <span>复盘回放</span>
        </div>
        
        <span className="material-symbols-outlined text-[12px] text-slate-600">arrow_forward_ios</span>

        <div className="group flex items-center gap-2 cursor-pointer transition-colors hover:text-cyan-400">
            <span>规则沉淀</span>
        </div>
      </div>
    </div>
  );
};