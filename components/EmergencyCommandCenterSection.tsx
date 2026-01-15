import React from 'react';

export const EmergencyCommandCenterSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 md:px-12 lg:px-16 relative">
      <div className="max-w-[1920px] w-full flex flex-col gap-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-white/5 pb-8">
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
                <p className="text-primary text-sm font-medium leading-normal">洞察：在极端压力下，通过自动化预案辅助人工关键决策。</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                        08 界面：高压应急指挥中心
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-4">
                        通过统一通讯与自动化 SOP 缩短决策响应时间。
                    </p>
                </div>
                <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs font-mono text-red-500 uppercase tracking-wider">P1 级紧急模式</span>
                </div>
            </div>
        </div>

        {/* Main Interface */}
        <div className="relative w-full aspect-[21/9] min-h-[600px] lg:min-h-[700px] rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none z-10"></div>
            <div className="absolute w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px] top-1/4 right-1/4 pointer-events-none mix-blend-screen"></div>
            
            <div className="absolute inset-4 z-0 flex flex-col lg:flex-row gap-4">
                
                {/* Left Column: CCTV Feeds */}
                <div className="w-full lg:w-5/12 flex flex-col gap-4">
                    <div className="bg-black/60 border border-white/10 rounded-lg p-3 flex justify-between items-center backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-red-500 text-sm animate-pulse">videocam</span>
                            <span className="text-sm font-medium text-white tracking-wide">实时监控 - 事故现场</span>
                        </div>
                        <span className="text-xs font-mono text-red-500">LIVE FEED</span>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-2 gap-2 h-full min-h-[300px]">
                        <div className="relative bg-zinc-900 rounded-lg overflow-hidden border border-white/5 group/cam">
                            <img alt="Station Platform" className="w-full h-full object-cover opacity-80 group-hover/cam:opacity-100 transition-opacity mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgJcBCBz1Gya0U6f_s9nhA-xNcilR5xzwPL5XYRfWALM_J79JmTR14t7xkhJGbbpsWwlk01V4ZHtd_laJD8912iKcyDYYoBOALb2r0qRIUdmWWGSbqCMw5iLcO1m4cJVxZakMJEEpCp42EXyujiRS2DhgTM6upL0szVvm25qWgkm30yV9Bp6Q2WlZWwlwjsbypzXR1bb4EhMIH7Zt-VUZZTYYTlP2J7187gaSESHCPkTOueGB44Zo-k957Jgw8PIIGBQyrjXtS8d4"/>
                            <div className="absolute top-2 left-2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] font-mono text-white border border-white/10">CAM-01 Platform A</div>
                            <div className="absolute inset-0 cctv-grid opacity-30 pointer-events-none"></div>
                            <div className="absolute bottom-2 right-2 flex gap-1">
                                <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-[9px] font-mono text-red-400">REC</span>
                            </div>
                        </div>
                        <div className="relative bg-zinc-900 rounded-lg overflow-hidden border border-white/5 group/cam">
                            <img alt="Station Escalator" className="w-full h-full object-cover opacity-80 group-hover/cam:opacity-100 transition-opacity mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADW6HMtlnvk0cJ8wVU9YHJF4sRR41j6gEFQHUileAH7RQzCcoyz04o-403lpgcmz5ev-p9-X1Q7iQp9n4mFDIXZProB9IDx6stHvQyis9ecBydjvwfH9JNt8K9GuVddr6jFqJ5L9Of_9PvqFdDCIkB9yMHQr_7bi2W8cIAkm_j6wyepw72tjCJyJ1GndereVOwRsuFDhoPHi7xskkbLK0rv1Tbc8BX9IxHmvWsPUEXBriEdCf3dVsqPIARNxcQog763HXpNKV7nOU"/>
                            <div className="absolute top-2 left-2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] font-mono text-white border border-white/10">CAM-02 Escalator</div>
                            <div className="absolute inset-0 cctv-grid opacity-30 pointer-events-none"></div>
                        </div>
                        <div className="relative bg-zinc-900 rounded-lg overflow-hidden border border-white/5 group/cam">
                            <img alt="Station Concourse" className="w-full h-full object-cover opacity-80 group-hover/cam:opacity-100 transition-opacity mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrxBtfXB2so5KIEoXp6k8rNu34YDVrHmhTvXmuNcvndjEW6Z2rvM8kkD4fhwiihUEx88ndrEvmnHp01nkQiim0WNCTovNB5UEHEi_wQl6y_zJ5F1xjM6mvKvtancajPat86JtX9Wj8LPpk11teamBcojmwXVu-acT39vcWoUMAPQVLaXwyXyvtzBf5pe05C5y6Med2u6NVvFyRWpAiIP1-xKEB6wwpoHMiZq23t0W1SKBc8TMniKA4vjjC_Lhxs2LSiLOpNDojA2Q"/>
                            <div className="absolute top-2 left-2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] font-mono text-white border border-white/10">CAM-03 Concourse</div>
                            <div className="absolute inset-0 cctv-grid opacity-30 pointer-events-none"></div>
                        </div>
                        <div className="relative bg-zinc-900 rounded-lg overflow-hidden border border-white/5 group/cam">
                            <img alt="Station Tracks" className="w-full h-full object-cover opacity-80 group-hover/cam:opacity-100 transition-opacity mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnaNi6EYLV-a6Z1eg-QZR9Uk4oO3ZHVlES4K_C8dCGpxGgUNM7w3fwtqpLruPUU7wFlDZHSBOI8phKqLbgbxUoptbAXlA0yWCGWUcNSbkAfy1FhCiiiGrVGp-oa3zsYe2DEXHihH5jcj8dJOh8Bpt_0UOCbpNuxeYsYgka-oxO90t2fulX8YLEjHti4Bm_QcEQbuoY-Ed6PIFEBh_AKk7DiSYeImamhDAl24G8_PZXhCvN5RegdeMhCKIWG-yfmbwJjcwQJK6CmOM"/>
                            <div className="absolute top-2 left-2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] font-mono text-white border border-white/10">CAM-04 Track View</div>
                            <div className="absolute inset-0 cctv-grid opacity-30 pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Interactive Map */}
                <div className="w-full lg:w-7/12 flex flex-col gap-4 relative">
                    <div className="absolute inset-0 bg-[#0F1623] rounded-lg overflow-hidden border border-white/10">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                        
                        {/* Metro Lines SVG */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
                            <path className="metro-line" d="M100,100 L200,100 L200,200 L300,300 L500,300 L600,200" opacity="0.4" stroke="#3b82f6"></path>
                            <path className="metro-line" d="M100,500 L250,500 L400,350 L400,150 L550,50" opacity="0.4" stroke="#22c55e"></path>
                            <path className="metro-line" d="M50,300 L200,300 L300,300 L400,300 L500,300 L750,300" stroke="#eab308" strokeWidth="5"></path>
                            <path className="metro-line" d="M300,550 L300,400 L400,300 L500,200 L500,50" opacity="0.4" stroke="#a855f7"></path>
                            <circle cx="200" cy="300" fill="#1e293b" r="4" stroke="#eab308" strokeWidth="2"></circle>
                            <circle cx="300" cy="300" fill="#1e293b" r="4" stroke="#eab308" strokeWidth="2"></circle>
                            <circle cx="400" cy="300" fill="#1e293b" r="4" stroke="#eab308" strokeWidth="2"></circle> 
                            <circle cx="500" cy="300" fill="#1e293b" r="4" stroke="#eab308" strokeWidth="2"></circle>
                        </svg>

                        {/* Central Alert */}
                        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="w-12 h-12 flex items-center justify-center relative ripple-effect">
                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                                    <span className="material-symbols-outlined text-white text-lg font-bold">warning</span>
                                </div>
                            </div>
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#0B1020]/90 text-red-500 px-3 py-1 rounded border border-red-500/30 backdrop-blur whitespace-nowrap text-xs font-bold mt-2">
                                P1 信号故障
                            </div>
                        </div>

                        {/* Map Overlay Controls */}
                        <div className="absolute top-4 right-4 bg-[#0B1020]/80 backdrop-blur px-3 py-2 rounded border border-white/10 text-xs text-slate-400 flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                <span>Line 3 (运营中)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full opacity-50"></span>
                                <span className="opacity-50">Line 1</span>
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-4 flex gap-2">
                            <div className="bg-[#0B1020]/80 backdrop-blur p-2 rounded border border-white/10 text-slate-400 hover:text-white cursor-pointer hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined text-lg">add</span>
                            </div>
                            <div className="bg-[#0B1020]/80 backdrop-blur p-2 rounded border border-white/10 text-slate-400 hover:text-white cursor-pointer hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined text-lg">remove</span>
                            </div>
                        </div>
                    </div>

                    {/* Hotspot 1: Dynamic SOP */}
                    <div className="absolute top-[12%] left-[3%] max-w-[280px] z-30 pointer-events-none lg:pointer-events-auto">
                        <div className="flex items-start gap-3 group/item">
                            <div className="mt-1 w-8 h-8 flex-shrink-0 rounded-full bg-[#0B1020]/50 backdrop-blur border border-primary/30 text-primary flex items-center justify-center font-bold text-sm">1</div>
                            <div className="bg-[#0B1020]/60 backdrop-blur-xl p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
                                <h4 className="font-semibold text-primary text-sm mb-1">动态 SOP 检查单</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">根据事件类型（如火灾、障碍物）自动生成处置任务。</p>
                            </div>
                        </div>
                    </div>

                    {/* Hotspot 2: Multi-View Feed */}
                    <div className="absolute top-[12%] right-[3%] max-w-[280px] z-30 pointer-events-none lg:pointer-events-auto">
                        <div className="flex flex-row-reverse items-start gap-3 group/item">
                            <div className="mt-1 w-8 h-8 flex-shrink-0 rounded-full bg-[#0B1020]/50 backdrop-blur border border-primary/30 text-primary flex items-center justify-center font-bold text-sm">2</div>
                            <div className="bg-[#0B1020]/60 backdrop-blur-xl p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors text-right">
                                <h4 className="font-semibold text-primary text-sm mb-1">多视角实时馈送</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">集成 AI 客流密度覆盖的实时 CCTV 画面。</p>
                            </div>
                        </div>
                    </div>

                    {/* Hotspot 3: Unified Comms */}
                    <div className="absolute bottom-[8%] left-[6%] max-w-[280px] z-30 pointer-events-none lg:pointer-events-auto">
                        <div className="flex items-start gap-3 group/item">
                            <div className="mt-1 w-8 h-8 flex-shrink-0 rounded-full bg-[#0B1020]/50 backdrop-blur border border-primary/30 text-primary flex items-center justify-center font-bold text-sm">3</div>
                            <div className="bg-[#0B1020]/60 backdrop-blur-xl p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
                                <h4 className="font-semibold text-primary text-sm mb-1">统一通讯系统</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">直连现场人员、车站广播及外部应急联动。</p>
                            </div>
                        </div>
                    </div>

                    {/* Hotspot 4: Audit Trail */}
                    <div className="absolute bottom-[8%] right-[6%] max-w-[280px] z-30 pointer-events-none lg:pointer-events-auto">
                        <div className="flex flex-row-reverse items-start gap-3 group/item">
                            <div className="mt-1 w-8 h-8 flex-shrink-0 rounded-full bg-[#0B1020]/50 backdrop-blur border border-primary/30 text-primary flex items-center justify-center font-bold text-sm">4</div>
                            <div className="bg-[#0B1020]/60 backdrop-blur-xl p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors text-right">
                                <h4 className="font-semibold text-primary text-sm mb-1">交互式审计追踪</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">不可篡改的所有决策与系统事件记录。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] transition-all duration-300 p-6 rounded-xl flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <span className="material-symbols-outlined text-lg">badge</span>
                    <span className="text-xs uppercase tracking-wider font-semibold">角色</span>
                </div>
                <div className="text-white font-medium text-lg leading-snug">
                    OCC 调度员 / 应急指挥官
                </div>
            </div>
            
            <div className="relative overflow-hidden p-6 rounded-xl flex flex-col gap-2 transition-all duration-300 bg-red-500/[0.05] backdrop-blur-md border border-red-500/30 group">
                <div className="absolute right-0 top-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none"></div>
                <div className="flex items-center gap-2 text-slate-400 mb-2 relative z-10">
                    <span className="material-symbols-outlined text-lg text-red-500">warning</span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-red-500">任务 (关键)</span>
                </div>
                <div className="text-white font-medium text-lg leading-snug relative z-10">
                    处置 P1 级信号故障
                </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] transition-all duration-300 p-6 rounded-xl flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <span className="material-symbols-outlined text-lg">psychology</span>
                    <span className="text-xs uppercase tracking-wider font-semibold">决策</span>
                </div>
                <div className="text-white font-medium text-lg leading-snug">
                    是否启动公交接驳并局部暂停线路运营？
                </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] transition-all duration-300 p-6 rounded-xl flex flex-col gap-2 hover:border-primary/30">
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <span className="material-symbols-outlined text-lg text-primary">play_circle</span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-primary">行动</span>
                </div>
                <div className="text-white font-medium text-lg leading-snug">
                    执行“场景 C”自动化调度预案。
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};