import React from 'react';

export const SituationalAwarenessSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 md:px-12 lg:px-16 relative">
      <div className="max-w-[1920px] w-full flex flex-col gap-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start">
              <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
              <p className="text-primary text-sm font-medium leading-normal">洞察：从宏观全网到微观设备的无缝缩放，实现全域掌控。</p>
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight px-1 mb-4">
                07 界面：全网态势感知
            </h1>
        </div>

        {/* Main Interface Container */}
        <div className="flex flex-col lg:flex-row gap-4 h-[700px]">
            
            {/* Left: Main Dashboard Preview */}
            <div className="flex-1 bg-white/[0.02] backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden group ring-1 ring-white/5 relative">
                <div className="absolute inset-0 top-0 flex">
                    {/* Sidebar Nav */}
                    <div className="w-[70px] bg-black/20 backdrop-blur-xl border-r border-white/10 flex flex-col items-center py-6 gap-6 z-20">
                        <div className="w-10 h-10 rounded-lg bg-white/5 shadow-inner border border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all cursor-pointer flex items-center justify-center text-slate-400 hover:text-cyan-300">
                            <span className="material-symbols-outlined !text-xl">dashboard</span>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-white/5 shadow-inner border border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all cursor-pointer flex items-center justify-center text-slate-400 hover:text-cyan-300">
                            <span className="material-symbols-outlined !text-xl">map</span>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 transition-all cursor-pointer flex items-center justify-center text-cyan-300">
                            <span className="material-symbols-outlined !text-xl">hub</span>
                        </div>
                        <div className="mt-auto mb-2 w-8 h-8 rounded-full bg-slate-700/50 border border-white/10 flex items-center justify-center">
                            <span className="material-symbols-outlined !text-sm text-slate-400">settings</span>
                        </div>
                    </div>

                    {/* Main Map Area */}
                    <div className="flex-1 relative bg-white/[0.01]">
                        {/* Map Background */}
                        <div className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-80 mix-blend-screen" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIs3NTpXW9Qw53Yg9aQkcvtIbmQgK6Av_tQT7MEZWKVpyfTLPkzTwgGhqKbo_2cPRpBOifOsTz7jupkyeftX5MdCVfrt3gF0lE1TZsHadNe4j_KgqceZIARIoUczrGnjoYxTccuSHagAsaq4HrFP3HESq7hh8kOdsePvXVAAqC562RM5be34aEauYoDyLNOCvZa7VZeQXd7pFdzZbQU6VcsP6Ad-FnkU6JaG6eKqMYDGN8d_SCOWEzpyJG18Ixu8ZcezsBej7aA-A")', filter: 'contrast(1.1) saturate(1.1)' }}></div>
                        
                        {/* Center Highlight Box */}
                        <div className="absolute inset-6 right-[260px] border border-dashed border-cyan-500/20 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-[2px]">
                            <div className="text-center p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center">
                                <div className="size-16 rounded-full bg-gradient-to-b from-cyan-500/20 to-transparent border border-cyan-500/20 flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-primary text-3xl">tv_gen</span>
                                </div>
                                <p className="text-white font-mono text-xl font-bold tracking-wide">4K 拓扑渲染区域</p>
                                <div className="h-px w-12 bg-cyan-500/50 my-3"></div>
                                <p className="text-cyan-300/70 text-xs font-mono uppercase tracking-widest">Real-time Vector Render</p>
                            </div>
                        </div>

                        {/* Hotspot 1: KPI */}
                        <div className="absolute top-[8%] left-[15%] group/spot z-30">
                            <div className="relative size-8 cursor-pointer transition-transform hover:scale-110 duration-300">
                                <div className="absolute inset-0 bg-primary rounded-full pulse-ring opacity-50"></div>
                                <div className="absolute inset-2 bg-white rounded-full z-10"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[40px] bg-gradient-to-b from-cyan-400 to-transparent opacity-0 group-hover/spot:opacity-100 transition-opacity duration-300 origin-bottom scale-y-0 group-hover/spot:scale-y-100 delay-75"></div>
                            </div>
                            <div className="absolute left-[calc(100%+1rem)] top-0 w-64 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-lg p-0 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-x-4 group-hover/spot:translate-x-0 ring-1 ring-cyan-500/20 overflow-hidden pointer-events-none group-hover/spot:pointer-events-auto">
                                <div className="h-1 w-full bg-gradient-to-r from-primary to-transparent"></div>
                                <div className="p-4 flex gap-3">
                                    <div className="shrink-0 p-2 rounded bg-cyan-900/30 text-primary border border-cyan-500/20">
                                        <span className="material-symbols-outlined !text-lg">monitoring</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-sm font-bold tracking-wide">全局 KPI 栏</h3>
                                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">实时正点率与客流负载监控，支持下钻分析。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hotspot 2: Topology */}
                        <div className="absolute top-[40%] left-[45%] group/spot z-30">
                            <div className="relative size-8 cursor-pointer transition-transform hover:scale-110 duration-300">
                                <div className="absolute inset-0 bg-primary rounded-full pulse-ring opacity-50"></div>
                                <div className="absolute inset-2 bg-white rounded-full z-10"></div>
                            </div>
                            <div className="absolute bottom-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 w-64 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-lg p-0 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-y-4 group-hover/spot:translate-y-0 ring-1 ring-cyan-500/20 overflow-hidden pointer-events-none group-hover/spot:pointer-events-auto">
                                <div className="h-1 w-full bg-gradient-to-r from-primary to-transparent"></div>
                                <div className="p-4 flex gap-3">
                                    <div className="shrink-0 p-2 rounded bg-cyan-900/30 text-primary border border-cyan-500/20">
                                        <span className="material-symbols-outlined !text-lg">hub</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-sm font-bold tracking-wide">交互式拓扑</h3>
                                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">矢量级缩放的动态列车位置图。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hotspot 3: Alert Stack */}
                        <div className="absolute bottom-[20%] right-[18%] group/spot z-30">
                            <div className="relative size-8 cursor-pointer transition-transform hover:scale-110 duration-300">
                                <div className="absolute inset-0 bg-red-500 rounded-full pulse-ring opacity-50 before:!bg-red-500"></div>
                                <div className="absolute inset-2 bg-white rounded-full z-10"></div>
                            </div>
                            <div className="absolute right-[calc(100%+1.5rem)] top-1/2 -translate-y-1/2 w-64 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-lg p-0 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 -translate-x-4 group-hover/spot:translate-x-0 ring-1 ring-red-500/20 overflow-hidden pointer-events-none group-hover/spot:pointer-events-auto">
                                <div className="h-1 w-full bg-gradient-to-r from-red-500 to-transparent"></div>
                                <div className="p-4 flex gap-3">
                                    <div className="shrink-0 p-2 rounded bg-red-900/30 text-red-400 border border-red-500/20">
                                        <span className="material-symbols-outlined !text-lg">warning</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-sm font-bold tracking-wide text-red-100">智能告警堆栈</h3>
                                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">按严重程度自动聚合的关键问题列表。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Sidebar Modules */}
                    <div className="w-[260px] bg-black/20 backdrop-blur-xl border-l border-white/10 p-4 flex flex-col gap-3 z-20 glass-scroll overflow-y-auto">
                        <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Modules</div>
                        <div className="h-24 rounded bg-white/5 border border-white/5 w-full shadow-inner relative group cursor-pointer hover:bg-white/10 transition-colors">
                            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-green-400"></div>
                            <div className="absolute bottom-2 left-2 text-xs text-slate-300 font-medium">Power Grid</div>
                        </div>
                        <div className="h-24 rounded bg-white/5 border border-white/5 w-full shadow-inner relative group cursor-pointer hover:bg-white/10 transition-colors">
                            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-cyan-400"></div>
                            <div className="absolute bottom-2 left-2 text-xs text-slate-300 font-medium">Environment</div>
                        </div>
                        <div className="h-24 rounded bg-white/5 border border-white/5 w-full shadow-inner relative group cursor-pointer hover:bg-white/10 transition-colors">
                            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-yellow-400"></div>
                            <div className="absolute bottom-2 left-2 text-xs text-slate-300 font-medium">Maintenance</div>
                        </div>
                        <div className="flex-1 rounded bg-gradient-to-b from-white/5 to-transparent border border-white/5 w-full mt-auto min-h-[100px] flex items-end p-3">
                            <span className="text-[10px] text-slate-600 font-mono">Log_stream.txt</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Detail Cards */}
        <div className="h-auto lg:h-[200px] shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-4">
            {/* Core Insight */}
            <div className="lg:col-span-2 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-8 relative overflow-hidden group ring-1 ring-white/5">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/15 transition-all duration-700"></div>
                <div className="size-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-md relative z-10 group-hover:scale-105 transition-transform duration-500">
                    <span className="material-symbols-outlined !text-3xl text-primary">lightbulb</span>
                </div>
                <div className="relative z-10 flex-1 pr-10">
                    <h4 className="text-cyan-200/80 font-bold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan-400"></span> Core Insight
                    </h4>
                    <p className="text-white text-xl font-light leading-relaxed">
                        打造 “单一事实来源” 看板，实现 <strong className="text-primary font-semibold">20+ 条地铁线路</strong> 的实时监控与统一调度。
                    </p>
                </div>
            </div>

            {/* Workflow Card */}
            <div className="lg:col-span-1 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full ring-1 ring-white/5 relative overflow-hidden">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[50px]"></div>
                <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2 group/item hover:border-white/20 transition-colors">
                        <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">Role</span>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover/item:bg-primary transition-colors"></span>
                            <span className="text-white text-sm font-medium">OCC 值班主任</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-2 group/item hover:border-white/20 transition-colors">
                        <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">Task</span>
                        <span className="text-white text-sm font-medium">监控全网健康度</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-2 group/item hover:border-white/20 transition-colors">
                        <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">Decision</span>
                        <span className="text-cyan-100 text-sm font-medium text-right">是否启动应急预案？</span>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2 relative z-10">
                    <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">Action</span>
                    <button className="group/btn relative px-3 py-1.5 rounded bg-primary/10 border border-primary/20 text-primary text-xs font-bold flex items-center gap-1 hover:bg-primary/20 hover:border-primary/50 transition-all overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-primary/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                        <span className="relative">下钻至线路</span>
                        <span className="material-symbols-outlined !text-xs relative group-hover/btn:translate-x-0.5 transition-transform">arrow_outward</span>
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};