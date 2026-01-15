import React from 'react';

export const StationOperationsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 md:px-12 lg:px-16 relative">
      <div className="max-w-[1920px] w-full flex flex-col gap-10 relative z-10">
        
        {/* Header */}
        <header className="w-full border-b border-white/5 pb-8 relative z-10 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
                <p className="text-primary text-sm font-medium leading-normal">洞察：打破物理空间限制，通过数字孪生实现远程精准管控。</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="space-y-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        09 界面：线路钻取与车站运维
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-4">
                        从宏观全网监控到微观资产控制的无缝切换。
                    </p>
                </div>
                <div className="hidden lg:block text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F2FF]/5 text-[#00F2FF] border border-[#00F2FF]/30 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm">view_quilt</span>
                        高保真原型
                    </span>
                </div>
            </div>
        </header>

        {/* Main Content Area with Annotations */}
        <div className="relative w-full">
            {/* Absolute Annotations (Hidden on mobile for clarity) */}
            <div className="absolute inset-0 pointer-events-none z-30 hidden xl:block">
                <div className="absolute left-[-2%] top-[15%] pointer-events-auto flex items-center gap-4 max-w-[300px]">
                    <div className="annotation-marker shrink-0">1</div>
                    <div className="glass-tooltip p-4 rounded-xl text-sm text-gray-300">
                        <strong className="text-[#00F2FF] block mb-1 tracking-wide">动态发车间隔图</strong>
                        实时可视化列车间距与运行计划对齐情况。
                    </div>
                </div>
                <div className="absolute right-[-2%] top-[15%] pointer-events-auto flex flex-row-reverse items-center gap-4 max-w-[300px] text-right">
                    <div className="annotation-marker shrink-0">2</div>
                    <div className="glass-tooltip p-4 rounded-xl text-sm text-gray-300">
                        <strong className="text-[#00F2FF] block mb-1 tracking-wide">车站数字孪生</strong>
                        集成 IoT 传感器数据的 3D 模型，用于环境控制。
                    </div>
                </div>
                <div className="absolute right-[12%] top-[62%] pointer-events-auto flex flex-row-reverse items-center gap-4 max-w-[300px] text-right">
                    <div className="annotation-marker shrink-0">3</div>
                    <div className="glass-tooltip p-4 rounded-xl text-sm text-gray-300">
                        <strong className="text-[#00F2FF] block mb-1 tracking-wide">客流预测</strong>
                        针对站台与电梯安全的红外热力图覆盖。
                    </div>
                </div>
                <div className="absolute left-[38%] bottom-[28%] pointer-events-auto flex items-center gap-4 max-w-[300px]">
                    <div className="annotation-marker shrink-0">4</div>
                    <div className="glass-tooltip p-4 rounded-xl text-sm text-gray-300">
                        <strong className="text-[#00F2FF] block mb-1 tracking-wide">设备状态</strong>
                        自动扶梯、闸机及照明系统的即时健康度检查。
                    </div>
                </div>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full min-h-[600px]">
                
                {/* Macro View Card */}
                <div className="flex flex-col gap-4 relative group">
                    <div className="flex justify-between items-center px-2">
                        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#00F2FF]">hub</span> 线路 10 视图
                        </h2>
                        <span className="text-xs text-[#00F2FF]/70 uppercase tracking-widest font-semibold">宏观层级</span>
                    </div>
                    <div className="flex-1 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden relative min-h-[400px]">
                        {/* Removed blue overlay mix-blend-overlay */}
                        <div className="absolute inset-0 bg-white/[0.02]"></div>
                        <div className="absolute inset-0 p-12 flex flex-col items-center justify-center gap-6 z-10">
                            <span className="material-symbols-outlined text-7xl text-[#00F2FF]/40">alt_route</span>
                            <div className="text-center">
                                <span className="text-xl font-medium text-white/90 block mb-2">线路详细拓扑图</span>
                                <span className="text-sm text-cyan-100/50 block">
                                    (列车位置、发车间隔、供电状态)
                                </span>
                            </div>
                        </div>
                        <div className="absolute top-6 left-6 right-6 flex justify-between pointer-events-none z-20">
                            <div className="glass-tooltip px-5 py-3 rounded-lg flex gap-6">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-cyan-200/60 uppercase tracking-wider">准点率</span>
                                    <span className="text-[#00F2FF] font-mono font-bold text-lg">94.2%</span>
                                </div>
                                <div className="w-px bg-white/10"></div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-cyan-200/60 uppercase tracking-wider">平均发车间隔</span>
                                    <span className="text-white font-mono font-bold text-lg">120s</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Micro View Card */}
                <div className="flex flex-col gap-4 relative group">
                    <div className="flex justify-between items-center px-2">
                        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#00F2FF]">apartment</span> 中心车站视图
                        </h2>
                        <span className="text-xs text-[#00F2FF]/70 uppercase tracking-widest font-semibold">微观层级</span>
                    </div>
                    <div className="flex-1 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden relative min-h-[400px]">
                        {/* Removed blue overlay mix-blend-overlay */}
                        <div className="absolute inset-0 bg-white/[0.02]"></div>
                        <div className="absolute inset-0 p-12 flex flex-col items-center justify-center gap-6 z-10">
                            <span className="material-symbols-outlined text-7xl text-[#00F2FF]/40">layers</span>
                            <div className="text-center">
                                <span className="text-xl font-medium text-white/90 block mb-2">车站数字孪生模型</span>
                                <span className="text-sm text-cyan-100/50 block">
                                    (客流、闸机、CCTV、环控)
                                </span>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4 pointer-events-none z-20">
                            <div className="glass-tooltip p-3 rounded-lg flex items-center gap-3 border-l-2 border-l-red-400/50">
                                <div className="p-2 bg-red-500/10 rounded-full text-red-400">
                                    <span className="material-symbols-outlined text-lg">groups</span>
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase">客流密度</div>
                                    <div className="text-sm font-bold text-white shadow-black">极高 (Lvl 3)</div>
                                </div>
                            </div>
                            <div className="glass-tooltip p-3 rounded-lg flex items-center gap-3 border-l-2 border-l-emerald-400/50">
                                <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-400">
                                    <span className="material-symbols-outlined text-lg">ac_unit</span>
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase">车站环境</div>
                                    <div className="text-sm font-bold text-white">优</div>
                                </div>
                            </div>
                            <div className="glass-tooltip p-3 rounded-lg flex items-center gap-3 border-l-2 border-l-yellow-400/50">
                                <div className="p-2 bg-yellow-500/10 rounded-full text-yellow-400">
                                    <span className="material-symbols-outlined text-lg">escalator_warning</span>
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase">告警</div>
                                    <div className="text-sm font-bold text-white">2 条活动中</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Action Strip */}
            <div className="glass-strip-bottom w-full rounded-2xl p-8 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-[#00F2FF]">
                        <span className="text-xs text-[#00F2FF] font-bold uppercase tracking-widest shadow-cyan-glow">角色</span>
                        <div className="flex items-center gap-3">
                            <div className="size-9 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-white/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-sm text-white">badge</span>
                            </div>
                            <span className="text-white font-medium text-lg">站务经理 / 线路调度员</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 pl-4 border-l border-white/10">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">任务</span>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            应对高峰期大客流拥挤。
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 pl-4 border-l border-white/10">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">决策</span>
                        <p className="text-cyan-50/80 text-sm leading-relaxed italic">
                            “是否开启备用闸机并调整电梯运行方向以疏散站台？”
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 pl-4 border-l border-[#00F2FF]/30">
                        <span className="text-xs text-[#00F2FF] font-bold uppercase tracking-widest shadow-cyan-glow">行动</span>
                        <button className="flex items-center justify-between w-full bg-[#00F2FF]/10 hover:bg-[#00F2FF]/20 border border-[#00F2FF]/50 text-[#00F2FF] px-5 py-3 rounded-lg transition-all duration-300 group">
                            <span className="text-sm font-semibold">触发“客流 3 级”车站应急方案</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};