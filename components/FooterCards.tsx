import React from 'react';

const InfoCard: React.FC<{
  icon: string;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="glass-card-clean p-6 flex flex-row md:flex-col lg:flex-row items-center gap-5 group cursor-default">
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300 shrink-0">
      <span className="material-symbols-outlined text-[28px] text-primary icon-vivid">{icon}</span>
    </div>
    <div className="flex flex-col gap-1 text-center lg:text-left">
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 group-hover:text-primary/80 transition-colors">
        {label}
      </span>
      <span className="text-lg font-bold text-white group-hover:text-glow-cyan transition-all duration-300">
        {value}
      </span>
    </div>
  </div>
);

export const FooterCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
      <InfoCard
        icon="person"
        label="角色 Role"
        value="主导产品设计师"
      />
      <InfoCard
        icon="layers"
        label="范畴 Scope"
        value="端到端企业级解决方案"
      />
      <InfoCard
        icon="calendar_today"
        label="年份 Year"
        value="2023 - 2024"
      />
    </div>
  );
};