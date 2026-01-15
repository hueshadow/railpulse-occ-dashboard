import React from 'react';

export const PassengerFlowSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 md:px-12 lg:px-16 relative overflow-hidden">
      
      <div className="max-w-[1920px] w-full flex flex-col gap-8 relative z-10">
        
        {/* Header */}
        <header className="flex flex-col gap-4 mb-2 z-10">
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
                <p className="text-primary text-sm font-medium leading-normal">洞察：从被动监测转向主动预测，提前干预客流拥堵风险。</p>
            </div>
            <div className="flex flex-wrap justify-between items-end gap-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white font-bold-zh">
                        10 客流预测与运力建议
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-4">
                        基于实时数据与历史模型的智能运力调度建议。
                    </p>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-mono text-sm">
                    <span className="text-white">10</span>
                    <span className="opacity-30">/</span>
                    <span>14</span>
                </div>
            </div>
        </header>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px] z-10">
            
            {/* Left Column: Map & Visualization (Span 8) */}
            <div className="lg:col-span-8 flex flex-col gap-6 min-h-[500px] lg:min-h-0">
                {/* Main Map Panel */}
                <div className="bg-white/[0.02] backdrop-blur-md rounded-xl flex-1 relative overflow-hidden group flex flex-col border border-white/10">
                    
                    {/* Toolbar overlay */}
                    <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-start pointer-events-none">
                        <div className="pointer-events-auto">
                            <label className="flex items-center h-12 bg-[#1a2333]/80 backdrop-blur-md border border-white/10 rounded-xl px-4 gap-3 transition-all hover:bg-[#1a2333] focus-within:ring-2 focus-within:ring-primary/30">
                                <span className="material-symbols-outlined text-slate-400">search</span>
                                <input className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder-slate-500 w-48 md:w-64" placeholder="Search station, line..." type="text"/>
                            </label>
                        </div>
                        <div className="flex flex-col gap-3 pointer-events-auto">
                            <button className="w-10 h-10 bg-[#1a2333]/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 text-white transition-colors group/btn">
                                <span className="material-symbols-outlined group-hover/btn:text-primary transition-colors">layers</span>
                            </button>
                            <button className="w-10 h-10 bg-[#1a2333]/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 text-white transition-colors group/btn">
                                <span className="material-symbols-outlined group-hover/btn:text-primary transition-colors">my_location</span>
                            </button>
                        </div>
                    </div>

                    {/* The Map (Constructed with CSS/SVG) */}
                    <div className="absolute inset-0 z-0 bg-transparent">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80"></div>
                        
                        {/* Abstract Map Lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                            <path d="M -50 300 Q 200 300 400 300 T 850 300" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
                            <path d="M 400 -50 L 400 650" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
                            
                            {/* Glowing Line */}
                            <path d="M 100 450 L 300 450 L 400 300 L 600 300 L 700 150" fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.4" />
                            <path d="M 100 450 L 300 450 L 400 300 L 600 300 L 700 150" fill="none" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.8" />
                        </svg>

                        {/* Heatmap Overlays */}
                        <div className="absolute top-[40%] left-[35%] w-48 h-48 bg-red-500/20 rounded-full blur-[60px] z-10 animate-pulse"></div>
                        <div className="absolute top-[40%] left-[45%] w-32 h-32 bg-primary/20 rounded-full blur-[50px] z-10"></div>
                        
                        {/* Central Station Dot */}
                        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                            <div className="relative">
                                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white relative z-10"></div>
                                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                            </div>
                            <span className="mt-4 text-[10px] uppercase font-bold tracking-widest text-white/50">Central Station</span>
                        </div>
                    </div>

                    {/* Floating Stats on Map */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
                        <div className="pointer-events-auto w-full bg-black/60 backdrop-blur-xl rounded-xl p-5 flex flex-col md:flex-row items-center gap-6 border border-white/10">
                            <div className="flex items-center gap-4 w-full md:w-auto flex-1">
                                <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition active:scale-95 border border-white/5">
                                    <span className="material-symbols-outlined text-white">play_arrow</span>
                                </button>
                                <div className="flex-1 flex flex-col gap-2">
                                    <div className="flex justify-between text-xs font-mono text-slate-400">
                                        <span>Current: 18:00</span>
                                        <span>Forecast: +2h</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden relative cursor-pointer group/slider">
                                        <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-primary"></div>
                                        <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full group-hover/slider:scale-125 transition-transform"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>
                            
                            <div className="flex gap-8 w-full md:w-auto justify-around md:justify-start">
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Avg Density</p>
                                    <p className="text-xl font-bold text-white font-mono">4.2 <span className="text-xs font-normal text-slate-500">p/m²</span></p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Total Pax</p>
                                    <p className="text-xl font-bold text-white font-mono">852<span className="text-primary-blue text-sm">k</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Analysis & Suggestions (Span 4) */}
            <div className="lg:col-span-4 flex flex-col gap-6 min-h-0 overflow-y-auto pr-1 custom-scrollbar">
                
                {/* Status Card */}
                <div className="glass-panel-flow p-6 rounded-xl flex flex-col gap-5 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-50">
                         <div className="w-24 h-24 bg-red-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                    </div>
                    <div className="flex items-center justify-between relative z-10">
                        <h3 className="text-lg font-bold text-white flex items-center gap-3">
                            <div className="p-1.5 rounded bg-primary-blue/20 text-primary-blue">
                                <span className="material-symbols-outlined text-lg">analytics</span>
                            </div>
                            Real-time Analysis
                        </h3>
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide bg-red-500/20 text-red-400 border border-red-500/20 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            High Alert
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 relative z-10">
                        <div className="flex items-end justify-between">
                            <span className="text-slate-400 text-sm font-medium">Line 2 Load</span>
                            <span className="text-2xl font-black text-red-400 tracking-tight">92%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary-blue via-primary to-red-500 w-[92%]"></div>
                        </div>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                            Approaching critical capacity at <strong className="text-white">Central Station</strong>. Trend indicates <span className="text-red-400 font-bold">+15% surge</span> in next 20 mins.
                        </p>
                    </div>
                </div>

                {/* Suggestion Card (Primary Action) */}
                <div className="glass-panel-flow p-1 rounded-xl relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-blue/50 to-primary/50 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-[#131b2e]/90 rounded-[10px] p-6 h-full flex flex-col gap-5 backdrop-blur-xl border border-white/10">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-[10px] font-bold text-primary-blue uppercase tracking-widest mb-2">Recommendation</p>
                                <h4 className="text-2xl font-black text-white leading-tight">Increase Frequency<br/><span className="text-white/80">Line 2</span></h4>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center text-primary-blue">
                                <span className="material-symbols-outlined">tune</span>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 my-1">
                            <div className="bg-[#0B1020]/60 p-4 rounded-lg border border-white/5">
                                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">Current Headway</p>
                                <p className="text-xl font-bold text-white font-mono">180s</p>
                            </div>
                            <div className="bg-primary-blue/10 p-4 rounded-lg border border-primary-blue/20 relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary-blue/5 animate-pulse"></div>
                                <p className="text-[10px] text-primary-blue uppercase tracking-wider font-bold mb-1 relative z-10">Proposed</p>
                                <p className="text-xl font-bold text-white font-mono relative z-10">120s</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 p-2.5 rounded border border-emerald-500/10">
                            <span className="material-symbols-outlined text-[16px]">trending_down</span>
                            <span>Congestion expected -15%</span>
                        </div>

                        <button className="mt-2 w-full py-3.5 bg-gradient-to-r from-primary-blue to-primary hover:to-white hover:text-primary-blue text-background-dark font-bold rounded-lg transition-all flex items-center justify-center gap-2 group/button relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/button:translate-y-0 transition-transform duration-300"></div>
                            <span className="material-symbols-outlined text-[20px] relative z-10">bolt</span>
                            <span className="relative z-10">Simulate Deployment</span>
                        </button>
                    </div>
                </div>

                {/* Secondary Stats */}
                <div className="glass-panel-flow p-6 rounded-xl flex-1 flex flex-col justify-between gap-6 border border-white/10">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider opacity-80">Network Overview</h3>
                    
                    {/* Stat Item 1 */}
                    <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                            <span className="material-symbols-outlined">group</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-white">Total Passenger Flow</p>
                            <p className="text-xs text-slate-500">City-wide real-time</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-white font-mono">1.2M</p>
                            <p className="text-xs text-emerald-400 flex items-center justify-end gap-0.5 font-bold">
                                <span className="material-symbols-outlined text-[12px]">arrow_upward</span> 5%
                             </p>
                        </div>
                    </div>

                    {/* Stat Item 2 */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                            <span className="material-symbols-outlined">warning</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-white">Station Alerts</p>
                            <p className="text-xs text-slate-500">Crowd density warnings</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-white font-mono">3</p>
                            <p className="text-xs text-slate-500 font-medium">Active</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};