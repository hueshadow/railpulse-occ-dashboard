import React from 'react';

export const EmergencyResponseSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 md:px-12 lg:px-16">
      <div className="max-w-[1920px] w-full flex flex-col gap-10 relative">
        {/* Background blobs for this section */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        {/* Header */}
        <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-6 border-b border-white/10">
                <div className="w-full flex flex-col gap-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start">
                        <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
                        <p className="text-primary text-sm font-medium leading-normal">洞察：通过标准化SOP缩短突发事件的“黄金5分钟”响应。</p>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2 text-white font-bold-zh">
                        04 闭环应急指挥路径
                    </h1>
                </div>
            </div>
        </div>

        {/* Top Flow Steps */}
        <div className="relative w-full overflow-x-auto pb-8 pt-4">
            <div className="min-w-[1000px] flex justify-between items-start relative px-4 w-full">
                {/* Connecting Line */}
                <div className="absolute top-[28px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -z-10"></div>
                
                {/* Step 1: Monitor */}
                <div className="flex flex-col items-center gap-4 group cursor-default w-full relative">
                    <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="size-14 rounded-2xl glass-tile border-primary/30 flex items-center justify-center z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:bg-primary/20">
                        <span className="material-symbols-outlined text-primary">notifications_active</span>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-black text-white mb-0.5 text-glow font-bold-zh">监测</p>
                        <p className="text-[11px] uppercase tracking-wider text-cyan-400 font-bold">AI 告警</p>
                    </div>
                </div>

                <span className="material-symbols-outlined text-cyan-500/40 mt-4 animate-pulse">arrow_forward</span>

                {/* Step 2: Confirm */}
                <div className="flex flex-col items-center gap-4 group cursor-default w-full relative">
                    <div className="size-14 rounded-2xl glass-tile flex items-center justify-center z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:bg-primary/10">
                        <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">verified_user</span>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-black text-slate-300 group-hover:text-white transition-colors font-bold-zh">确认</p>
                        <p className="text-[11px] uppercase tracking-wider text-slate-500 group-hover:text-primary/80 font-bold transition-colors">信息核实</p>
                    </div>
                </div>

                <span className="material-symbols-outlined text-cyan-500/20 mt-4">arrow_forward</span>

                {/* Step 3: Analyze */}
                <div className="flex flex-col items-center gap-4 group cursor-default w-full relative">
                    <div className="size-14 rounded-2xl glass-tile flex items-center justify-center z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:bg-primary/10">
                        <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">analytics</span>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-black text-slate-300 group-hover:text-white transition-colors font-bold-zh">研判</p>
                        <p className="text-[11px] uppercase tracking-wider text-slate-500 group-hover:text-primary/80 font-bold transition-colors">影响评估</p>
                    </div>
                </div>

                <span className="material-symbols-outlined text-cyan-500/20 mt-4">arrow_forward</span>

                {/* Step 4: Disposal */}
                <div className="flex flex-col items-center gap-4 group cursor-default w-full relative">
                    <div className="size-14 rounded-2xl glass-tile flex items-center justify-center z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:bg-primary/10">
                        <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">alt_route</span>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-black text-slate-300 group-hover:text-white transition-colors font-bold-zh">处置</p>
                        <p className="text-[11px] uppercase tracking-wider text-slate-500 group-hover:text-primary/80 font-bold transition-colors">预案下发</p>
                    </div>
                </div>

                <span className="material-symbols-outlined text-cyan-500/20 mt-4">arrow_forward</span>

                {/* Step 5: Execute */}
                <div className="flex flex-col items-center gap-4 group cursor-default w-full relative">
                    <div className="size-14 rounded-2xl glass-tile flex items-center justify-center z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:bg-primary/10">
                        <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">handyman</span>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-black text-slate-300 group-hover:text-white transition-colors font-bold-zh">执行</p>
                        <p className="text-[11px] uppercase tracking-wider text-slate-500 group-hover:text-primary/80 font-bold transition-colors">现场响应</p>
                    </div>
                </div>

                <span className="material-symbols-outlined text-cyan-500/20 mt-4">arrow_forward</span>

                {/* Step 6: Review */}
                <div className="flex flex-col items-center gap-4 group cursor-default w-full relative">
                    <div className="size-14 rounded-2xl glass-tile flex items-center justify-center z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:bg-primary/10">
                        <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">fact_check</span>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-black text-slate-300 group-hover:text-white transition-colors font-bold-zh">复盘</p>
                        <p className="text-[11px] uppercase tracking-wider text-slate-500 group-hover:text-primary/80 font-bold transition-colors">事后总结</p>
                    </div>
                </div>

                <span className="material-symbols-outlined text-cyan-500/20 mt-4">arrow_forward</span>

                {/* Step 7: Rule */}
                <div className="flex flex-col items-center gap-4 group cursor-default w-full relative">
                    <div className="size-14 rounded-2xl glass-tile border-dashed border-slate-500/50 flex items-center justify-center z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:bg-primary/10">
                        <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">update</span>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-black text-slate-300 group-hover:text-white transition-colors font-bold-zh">规则</p>
                        <p className="text-[11px] uppercase tracking-wider text-slate-500 group-hover:text-primary/80 font-bold transition-colors">知识库沉淀</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Workflow Visualization */}
        <div className="flex flex-col gap-4 flex-grow">
            <div className="flex justify-between items-end px-2">
                <h3 className="text-sm font-black text-primary uppercase tracking-widest text-glow font-bold-zh">运营工作流：从感知到规则沉淀</h3>
                <span className="text-xs text-slate-400 font-bold font-bold-zh">从监测预警到规则沉淀的全链路操作流。</span>
            </div>
            <div className="relative w-full h-[650px] glass-panel rounded-2xl overflow-hidden border border-white/5">
                <div className="absolute inset-0 opacity-20 bg-[size:40px_40px] bg-grid-pattern mix-blend-overlay"></div>
                
                {/* Lanes Legend */}
                <div className="absolute left-0 top-0 bottom-0 w-32 border-r border-white/10 bg-white/5 backdrop-blur-md z-20 flex flex-col py-8 text-xs font-black text-slate-400 uppercase tracking-widest justify-around pl-6">
                    <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> <span className="font-bold-zh">系统</span></div>
                    <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> <span className="font-bold-zh">调度员</span></div>
                    <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> <span className="font-bold-zh">现场</span></div>
                    <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> <span className="font-bold-zh">管理员</span></div>
                </div>

                {/* SVG Connections */}
                <div className="absolute inset-0 ml-32 flex items-center justify-center">
                    <svg className="w-full h-full absolute inset-0 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1400 600">
                        <defs>
                            <marker id="arrowhead" markerHeight="7" markerWidth="10" orient="auto" refX="9" refY="3.5">
                                <polygon fill="#22d3ee" points="0 0, 10 3.5, 0 7"></polygon>
                            </marker>
                            <filter id="glow">
                                <feGaussianBlur result="coloredBlur" stdDeviation="2.5"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <path d="M 150 80 L 300 80 L 300 220 L 400 220" fill="none" filter="url(#glow)" markerEnd="url(#arrowhead)" opacity="0.8" stroke="#22d3ee" strokeWidth="2"></path>
                        <path d="M 600 220 L 700 220 L 700 80 L 800 80" fill="none" markerEnd="url(#arrowhead)" stroke="#64748b" strokeDasharray="5,5" strokeWidth="2"></path>
                        <path d="M 1000 80 L 1050 80 L 1050 380 L 1150 380" fill="none" filter="url(#glow)" markerEnd="url(#arrowhead)" opacity="0.8" stroke="#22d3ee" strokeWidth="2"></path>
                        <path d="M 1350 380 L 1380 380 L 1380 520 L 1400 520" fill="none" markerEnd="url(#arrowhead)" stroke="#64748b" strokeWidth="2"></path>
                        <path d="M 1250 520 C 1350 520, 1350 80, 1100 80" fill="none" filter="url(#glow)" opacity="0.5" stroke="#22d3ee" strokeDasharray="8,4" strokeWidth="2"></path>
                    </svg>

                    {/* Nodes */}
                    <div className="absolute top-[10%] left-[5%] bg-cyan-950/40 backdrop-blur-md border border-cyan-500/50 text-cyan-200 px-6 py-3 rounded-lg text-sm flex items-center gap-3 transform -translate-y-1/2">
                        <span className="material-symbols-outlined text-[20px] text-cyan-400">sensors</span> <span className="font-bold-zh font-bold">信号丢失 #402</span>
                    </div>

                    <div className="absolute top-[35%] left-[25%] bg-slate-800/60 border border-white/10 text-white px-5 py-4 rounded-lg text-sm backdrop-blur-xl w-[220px] transform -translate-y-1/2">
                        <div className="flex items-center gap-2 mb-2 text-xs text-purple-300 font-bold uppercase">
                            <span className="material-symbols-outlined text-[16px]">visibility</span> <span className="font-bold-zh">人工核查</span>
                        </div>
                        <p className="text-xs text-slate-300 font-bold-zh">调度员通过CCTV-04确认阻塞情况。</p>
                    </div>

                    <div className="absolute top-[10%] left-[55%] bg-cyan-950/40 backdrop-blur-md border border-cyan-500/50 text-cyan-200 px-6 py-3 rounded-lg text-sm flex items-center gap-3 transform -translate-y-1/2">
                        <span className="material-symbols-outlined text-[20px] text-cyan-400">smart_toy</span> <span className="font-bold-zh font-bold">自动调度逻辑</span>
                    </div>

                    <div className="absolute top-[60%] left-[75%] bg-slate-800/60 border border-white/10 text-white px-5 py-4 rounded-lg text-sm backdrop-blur-xl w-[220px] transform -translate-y-1/2">
                        <div className="flex items-center gap-2 mb-2 text-xs text-orange-300 font-bold uppercase">
                            <span className="material-symbols-outlined text-[16px]">engineering</span> <span className="font-bold-zh">团队部署</span>
                        </div>
                        <p className="text-xs text-slate-300 font-bold-zh">42单元已到位。预计修复：15分钟。</p>
                    </div>

                    <div className="absolute top-[85%] right-[5%] bg-emerald-900/40 backdrop-blur-md border border-emerald-500/40 text-emerald-100 px-6 py-3 rounded-lg text-sm flex items-center gap-3 transform -translate-y-1/2">
                        <span className="material-symbols-outlined text-[20px] text-emerald-400">edit_note</span> <span className="font-bold-zh font-bold">更新阈值</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="glass-card glass-card-hover rounded-xl p-6 flex flex-col gap-3 group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all"></div>
                <div className="flex items-center justify-between z-10">
                    <h4 className="text-white font-black text-lg font-bold-zh">SLA 强制执行</h4>
                    <span className="material-symbols-outlined text-cyan-300 bg-cyan-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform">timer</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed z-10 font-bold-zh">
                    关键节点时效监控。如果任何阶段超过“黄金5分钟”阈值，自动化计时器将触发升级协议，立即通知高级指挥。
                </p>
                <div className="w-full bg-slate-700/50 h-1.5 rounded-full mt-2 overflow-hidden z-10">
                    <div className="bg-cyan-400 h-full w-3/4"></div>
                </div>
            </div>

            <div className="glass-card glass-card-hover rounded-xl p-6 flex flex-col gap-3 group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all"></div>
                <div className="flex items-center justify-between z-10">
                    <h4 className="text-white font-black text-lg font-bold-zh">全链路审计日志</h4>
                    <span className="material-symbols-outlined text-purple-300 bg-purple-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform">history_edu</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed z-10 font-bold-zh">
                    每一步操作均可溯源。每一次系统操作和人为决策都被不可篡改地记录下来。“闭环”确保事后审查依赖精确的数据时间戳。
                </p>
                <div className="flex gap-1 mt-2 z-10">
                    <span className="h-1.5 w-8 rounded-full bg-purple-500/60"></span>
                    <span className="h-1.5 w-4 rounded-full bg-purple-500/30"></span>
                    <span className="h-1.5 w-12 rounded-full bg-purple-500/80"></span>
                </div>
            </div>

            <div className="glass-card glass-card-hover rounded-xl p-6 flex flex-col gap-3 group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/30 transition-all"></div>
                <div className="flex items-center justify-between z-10">
                    <h4 className="text-white font-black text-lg font-bold-zh">角色权限隔离</h4>
                    <span className="material-symbols-outlined text-emerald-300 bg-emerald-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform">lock_person</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed z-10 font-bold-zh">
                    分级分类指挥权限控制。关键操作（如停线）需要特定的角色令牌。界面根据当前登录用户的权限动态调整可用按钮。
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-emerald-400/90 font-mono z-10">
                    <span className="material-symbols-outlined text-[14px]">key</span> AUTH_LEVEL_04
                </div>
            </div>
        </div>

        {/* Matrix Bottom Card */}
        <div className="glass-panel rounded-2xl p-10 border border-white/10 relative overflow-hidden w-full min-h-[400px]">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-white flex items-center gap-3 font-bold-zh">
                    <span className="material-symbols-outlined text-primary text-glow text-3xl">hub</span>
                    决策-执行矩阵
                </h3>
                <span className="text-sm uppercase tracking-widest text-slate-400 font-bold font-bold-zh">展示调度员与站务人员之间的数据流向与协同。</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative h-full">
                {/* Vertical Divider */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                
                {/* Center Icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-glass-strong backdrop-blur-xl p-4 border border-white/20 rounded-full z-10 hidden lg:block">
                    <span className="material-symbols-outlined text-white/70 text-lg">sync_alt</span>
                </div>

                {/* Left Side: Dispatcher */}
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-6 mb-4">
                        <div className="size-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">headset_mic</span>
                        </div>
                        <div>
                            <h5 className="text-xl font-black text-white font-bold-zh">OCC 调度员</h5>
                            <p className="text-sm text-slate-500 font-bold font-bold-zh">中央指挥</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl text-base border border-white/5 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all cursor-default group">
                            <span className="text-slate-300 font-bold group-hover:text-white transition-colors font-bold-zh">路线覆盖提案</span>
                            <span className="text-blue-400 text-sm font-mono shadow-blue-500/20 font-bold">发送中 &gt;</span>
                        </div>
                        <div className="flex justify-between items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl text-base border border-white/5 hover:border-red-500/40 hover:bg-red-500/5 transition-all cursor-default group">
                            <span className="text-slate-300 font-bold group-hover:text-white transition-colors font-bold-zh">紧急停止请求</span>
                            <span className="text-red-400 text-sm font-mono font-bold">高优先级</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Field Staff */}
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-6 mb-4 lg:pl-6">
                        <div className="size-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">badge</span>
                        </div>
                        <div>
                            <h5 className="text-xl font-black text-white font-bold-zh">站务人员</h5>
                            <p className="text-sm text-slate-500 font-bold font-bold-zh">现场执行</p>
                        </div>
                    </div>
                    <div className="space-y-4 lg:pl-6">
                        <div className="flex justify-between items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl text-base border border-white/5 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all cursor-default group">
                            <span className="text-orange-400 text-sm font-mono font-bold">&lt; 已接收</span>
                            <span className="text-slate-300 text-right font-bold group-hover:text-white transition-colors font-bold-zh">站台清空状态</span>
                        </div>
                        <div className="flex justify-between items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl text-base border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all cursor-default group">
                            <span className="text-emerald-400 text-sm font-mono font-bold">&lt; 已同步</span>
                            <span className="text-slate-300 text-right font-bold group-hover:text-white transition-colors font-bold-zh">乘客广播</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};