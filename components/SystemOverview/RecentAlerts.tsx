import React from 'react';

const AlertItem: React.FC<{
  icon: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  title: string;
  meta: string;
}> = ({ icon, colorClass, bgClass, borderClass, title, meta }) => (
  <div className={`p-3 ${bgClass} border-l-2 ${borderClass} rounded-r flex gap-3 items-center hover:opacity-80 transition-opacity cursor-pointer`}>
    <span className={`material-symbols-outlined ${colorClass} text-xl`}>{icon}</span>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-white/90 uppercase tracking-wide">{title}</span>
      <span className="text-[8px] text-white/50 font-mono">{meta}</span>
    </div>
  </div>
);

export const RecentAlerts: React.FC = () => {
  return (
    <div className="flex-1 glass-card-clean !bg-white/[0.01] p-4 flex flex-col border-white/5">
      <span className="text-[10px] font-bold text-primary/70 mb-4 border-l-2 border-primary pl-2 uppercase">
        Recent Alerts
      </span>
      <div className="flex flex-col gap-3 overflow-y-auto pr-1 custom-scrollbar">
        <AlertItem
          icon="warning"
          colorClass="text-red-500"
          bgClass="bg-red-500/10"
          borderClass="border-red-500"
          title="Signal Interruption S-04"
          meta="14:22:10 - Priority High"
        />
        <AlertItem
          icon="error"
          colorClass="text-yellow-500"
          bgClass="bg-yellow-500/10"
          borderClass="border-yellow-500"
          title="Platform Overcrowding P-12"
          meta="14:18:05 - Priority Med"
        />
        <AlertItem
          icon="info"
          colorClass="text-blue-500"
          bgClass="bg-blue-500/10"
          borderClass="border-blue-500"
          title="Routine Track Maintenance"
          meta="14:05:44 - Priority Low"
        />
      </div>
    </div>
  );
};