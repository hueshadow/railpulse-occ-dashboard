import React from 'react';

const MetricCard: React.FC<{
  icon: string;
  iconColor: string;
  borderColor: string;
  label: string;
  value: string;
}> = ({ icon, iconColor, borderColor, label, value }) => (
  <div className="flex-1 glass-card-clean !bg-white/[0.01] p-3 border-white/5 flex items-center gap-4">
    <div className={`w-10 h-10 rounded-full border-2 ${borderColor} flex items-center justify-center shrink-0`}>
      <span className={`material-symbols-outlined ${iconColor} text-xl`}>{icon}</span>
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-[8px] uppercase tracking-widest text-white/40 truncate">{label}</span>
      <span className="text-sm font-bold text-white truncate">{value}</span>
    </div>
  </div>
);

export const StatusMetrics: React.FC = () => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-4">
      <MetricCard
        icon="directions_subway"
        iconColor="text-primary"
        borderColor="border-primary/20"
        label="Train Location"
        value="42 ACTIVE UNITS"
      />
      <MetricCard
        icon="health_and_safety"
        iconColor="text-green-500"
        borderColor="border-green-500/20"
        label="System Health"
        value="98.4% STABLE"
      />
      <MetricCard
        icon="bolt"
        iconColor="text-yellow-500"
        borderColor="border-yellow-500/20"
        label="Energy Consumption"
        value="14.2 GWh / DAY"
      />
    </div>
  );
};