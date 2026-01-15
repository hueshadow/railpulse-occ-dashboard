import React from 'react';

export const IntegrationCenterSection: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-12 overflow-hidden">
      
      <div className="relative z-10 flex flex-col h-full w-full max-w-[1920px]">
        {/* Header */}
        <header className="flex justify-center items-center mb-8 mt-4 relative z-20">
            <div className="flex flex-col gap-4 text-center items-center">
                <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-center shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                    <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
                    <p className="text-primary text-sm font-medium leading-normal">洞察：构建开放架构，灵活接入第三方数据以扩展感知边界。</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-primary-blue/30 bg-primary-blue/10 text-primary-blue text-xs font-bold font-mono">13</span>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-tight font-bold-zh">
                        集成中心与第三方治理
                    </h1>
                </div>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl tracking-wide">
                    RailPulse Open Architecture <span className="text-primary-blue/50 mx-2">//</span> External Data Fusion
                </p>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative py-6">
            
            {/* Left Column: Stats */}
            <div className="lg:col-span-3 flex flex-col gap-6 z-10">
                {/* Active Integrations Card */}
                <div className="glass-card-integration p-6 rounded-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-primary-blue">hub</span>
                    </div>
                    <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Active Integrations</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white font-mono">128</span>
                        <span className="text-sm text-green-400 flex items-center bg-green-400/10 px-1.5 py-0.5 rounded font-bold">
                            <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +12%
                        </span>
                    </div>
                    <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary-blue w-3/4 rounded-full"></div>
                    </div>
                    <p className="mt-2 text-xs text-white/40 font-mono">API STATUS: STABLE</p>
                </div>

                {/* Throughput Analysis Card */}
                <div className="glass-card-integration p-6 rounded-xl">
                    <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Throughput Analysis</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-white/80">Inbound Data</span>
                            <span className="font-mono text-primary-blue">4.2 PB/s</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-white/80">Latency</span>
                            <span className="font-mono text-emerald-400">12ms</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-white/80">Protocol</span>
                            <span className="font-mono text-white/50">gRPC/WSS</span>
                        </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                        Seamless fusion of external data sources into the RailPulse Core, enabling holistic situational awareness through open architecture standards.
                    </p>
                </div>
            </div>

            {/* Center Column: Core Hub Visualization */}
            <div className="lg:col-span-6 flex justify-center items-center relative h-[600px]">
                <div className="relative w-80 h-80 rounded-full flex items-center justify-center z-20">
                    <div className="absolute inset-0 bg-primary-blue/20 blur-[60px] rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 border border-primary-blue/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-12 border border-white/10 rounded-full"></div>
                    <div className="glass-card-integration rounded-full w-48 h-48 flex flex-col items-center justify-center relative z-30 border border-primary-blue/50">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-blue to-blue-600 flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-white text-3xl">token</span>
                        </div>
                        <span className="text-white font-bold text-lg tracking-tight">RailPulse</span>
                        <span className="text-primary-blue text-xs font-mono uppercase tracking-widest mt-1">Core Hub</span>
                    </div>
                    {/* Connection Lines */}
                    <div className="absolute top-1/2 left-1/2 w-[300px] h-[1px] bg-gradient-to-r from-primary-blue/50 to-transparent origin-left -rotate-45 z-0"></div>
                    <div className="absolute top-1/2 left-1/2 w-[300px] h-[1px] bg-gradient-to-r from-primary-blue/50 to-transparent origin-left rotate-45 z-0"></div>
                    <div className="absolute top-1/2 left-1/2 w-[350px] h-[1px] bg-gradient-to-r from-primary-blue/80 to-transparent origin-left rotate-0 z-0"></div>
                </div>
                
                {/* Floating Status Labels */}
                <div className="absolute top-20 right-20 glass-card-integration px-3 py-1 rounded-full text-xs font-mono text-primary-blue border-primary-blue/30 animate-bounce delay-100">
                    JSON_PACKET_RECV
                </div>
                <div className="absolute bottom-32 left-10 glass-card-integration px-3 py-1 rounded-full text-xs font-mono text-emerald-400 border-emerald-500/30 animate-bounce delay-700">
                    SYNC_COMPLETE
                </div>
            </div>

            {/* Right Column: External Modules */}
            <div className="lg:col-span-3 flex flex-col gap-6 z-10 relative">
                <div className="absolute left-[-2rem] top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-primary-blue/30 to-transparent hidden lg:block"></div>
                
                {/* Card 1 */}
                <div className="glass-card-integration p-1 rounded-xl group hover:scale-[1.02] transition-transform duration-300">
                    <div className="bg-black/20 p-5 rounded-lg flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30 text-blue-400">
                            <span className="material-symbols-outlined">thunderstorm</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="text-white font-semibold">Meteorological Data</h4>
                                <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5"></span>
                            </div>
                            <p className="text-xs text-white/50 mb-3">Real-time Storm Tracking & Alerts</p>
                            <div className="flex items-end gap-1 h-8 mt-2">
                                <div className="w-1/5 bg-white/10 rounded-t-sm h-[40%]"></div>
                                <div className="w-1/5 bg-white/10 rounded-t-sm h-[70%]"></div>
                                <div className="w-1/5 bg-primary-blue/80 rounded-t-sm h-[100%]"></div>
                                <div className="w-1/5 bg-white