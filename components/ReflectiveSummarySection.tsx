import React from 'react';

export const ReflectiveSummarySection: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-12 overflow-hidden">
      {/* Background Decorative Elements Removed */}
      
      <div className="relative z-10 w-full max-w-[1280px] flex flex-col gap-16">
        
        {/* Top Navigation Mock REMOVED */}

        {/* Hero Section */}
        <section className="text-center mt-8">
            <p className="text-primary-blue text-sm font-medium tracking-[0.2em] mb-4 uppercase">Phase 15 of 15 • Final Case Study</p>
            <h1 className="text-white text-4xl md:text-[56px] font-bold leading-tight tracking-tight mb-4 text-glow-primary font-bold-zh">
                成果产出与设计反思
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                总结 RailPulse 调度平台的业务价值提升，以及在极端业务场景下的设计权衡与未来展望。
            </p>
        </section>

        {/* Metrics Table Section */}
        <section>
            <div className="flex items-center gap-3 mb-8 px-4">
                <span className="material-symbols-outlined text-primary-blue text-2xl">analytics</span>
                <h2 className="text-white text-2xl font-bold font-bold-zh">核心指标对比</h2>
            </div>
            <div className="glass-container-reflection rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                <th className="px-8 py-6 text-sm font-semibold text-white/70 uppercase tracking-wider">评估维度 (Metrics)</th>
                                <th className="px-8 py-6 text-sm font-semibold text-white/70 uppercase tracking-wider">旧版系统 (Legacy)</th>
                                <th className="px-8 py-6 text-sm font-semibold text-primary-blue uppercase tracking-wider">RailPulse (Optimized)</th>
                                <th className="px-8 py-6 text-sm font-semibold text-white/70 uppercase tracking-wider">效能提升</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-sm">
                            {/* Row 1 */}
                            <tr className="hover:bg-white/[0.02] transition-colors group">
                                <td className="px-8 py-8">
                                    <div className="text-white font-bold text-base mb-1 font-bold-zh">响应处理时间 (Ack Time)</div>
                                    <div className="text-white/40 text-xs">从事件触发到调度员确认响应</div>
                                </td>
                                <td className="px-8 py-8 text-white/60 font-mono">45s</td>
                                <td className="px-8 py-8">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-blue/20 text-primary-blue font-bold text-sm font-mono shadow-[0_0_10px_rgba(19,182,236,0.1)]">
                                        12s
                                    </span>
                                </td>
                                <td className="px-8 py-8">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary-blue rounded-full shadow-[0_0_8px_rgba(19,182,236,0.6)] w-[73%]"></div>
                                        </div>
                                        <span className="text-primary-blue font-bold font-mono">73% ↓</span>
                                    </div>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-white/[0.02] transition-colors group">
                                <td className="px-8 py-8">
                                    <div className="text-white font-bold text-base mb-1 font-bold-zh">调度执行效率 (Efficiency)</div>
                                    <div className="text-white/40 text-xs">单位时间内完成的排班与派发数量</div>
                                </td>
                                <td className="px-8 py-8 text-white/60 font-mono">65%</td>
                                <td className="px-8 py-8">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-blue/20 text-primary-blue font-bold text-sm font-mono shadow-[0_0_10px_rgba(19,182,236,0.1)]">
                                        88%
                                    </span>
                                </td>
                                <td className="px-8 py-8">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary-blue rounded-full shadow-[0_0_8px_rgba(19,182,236,0.6)] w-[35%]"></div>
                                        </div>
                                        <span className="text-primary-blue font-bold font-mono">35% ↑</span>
                                    </div>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-white/[0.02] transition-colors group">
                                <td className="px-8 py-8">
                                    <div className="text-white font-bold text-base mb-1 font-bold-zh">人工操作错误率 (Error Rate)</div>
                                    <div className="text-white/40 text-xs">调度指令下达后的纠偏频次</div>
                                </td>
                                <td className="px-8 py-8 text-white/60 font-mono">18%</td>
                                <td className="px-8 py-8">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-blue/20 text-primary-blue font-bold text-sm font-mono shadow-[0_0_10px_rgba(19,182,236,0.1)]">
                                        4%
                                    </span>
                                </td>
                                <td className="px-8 py-8">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary-blue rounded-full shadow-[0_0_8px_rgba(19,182,236,0.6)] w-[77%]"></div>
                                        </div>
                                        <span className="text-primary-blue font-bold font-mono">77% ↓</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* Reflection Grid */}
        <section>
            <div className="flex items-center gap-3 mb-8 px-4">
                <span className="material-symbols-outlined text-primary-blue text-2xl">psychology</span>
                <h2 className="text-white text-2xl font-bold font-bold-zh">设计反思与权衡</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="glass-container-reflection p-8 rounded-2xl flex flex-col gap-4 border-l-4 border-l-primary-blue/50 hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center text-primary-blue shadow-[0_0_15px_rgba(19,182,236,0.2)]">
                        <span className="material-symbols-outlined">balance</span>
                    </div>
                    <h3 className="text-lg font-bold text-white font-bold-zh">信息密度与认知负荷</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                        在 OCC 高压环境下，过高的信息密度会导致响应迟缓。我们在设计中权衡了“全量数据展示”与“分级响应机制”，最终决定采用渐进式披露策略，确保核心指标在首屏即可触达。
                    </p>
                </div>
                {/* Card 2 */}
                <div className="glass-container-reflection p-8 rounded-2xl flex flex-col gap-4 border-l-4 border-l-primary-blue/50 hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center text-primary-blue shadow-[0_0_15px_rgba(19,182,236,0.2)]">
                        <span className="material-symbols-outlined">smart_toy</span>
                    </div>
                    <h3 className="text-lg font-bold text-white font-bold-zh">自动化与人工介入</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                        虽然 AI 预测能提升效率，但轨道交通的安全红线要求人工最终确认。我们设计了“协同建议”而非“强制执行”的 UI 逻辑，保留了调度员的最终决策权，建立了系统信任感。
                    </p>
                </div>
                {/* Card 3 */}
                <div className="glass-container-reflection p-8 rounded-2xl flex flex-col gap-4 border-l-4 border-l-primary-blue/50 hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center text-primary-blue shadow-[0_0_15px_rgba(19,182,236,0.2)]">
                        <span className="material-symbols-outlined">update</span>
                    </div>
                    <h3 className="text-lg font-bold text-white font-bold-zh">长期演进与扩展性</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                        RailPulse 并非终点。我们在架构中预留了自动驾驶与跨线运营的功能模块。未来的迭代重点将转向多模态交互（语音控制）以进一步释放调度员的双手。
                    </p>
                </div>
            </div>
        </section>

        {/* Final CTA Card */}
        <section className="mt-8 mb-12">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-blue/10 via-primary-blue/5 to-transparent border border-white/10 p-12 lg:p-20 text-center shadow-2xl">
                {/* Internal glow */}
                <div className="absolute inset-0 bg-primary-blue/5 blur-[100px] pointer-events-none"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-bold-zh">感谢您的观看</h2>
                    <p className="text-white/50 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
                        这个项目展示了复杂 B 端系统在极端场景下的设计实践。如果您对我的工作感兴趣，欢迎沟通。
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="flex min-w-[160px] items-center justify-center gap-2 rounded-xl h-14 px-8 bg-primary-blue text-background-dark text-lg font-bold transition-all hover:shadow-[0_0_30px_rgba(19,182,236,0.4)] hover:bg-white">
                            <span className="material-symbols-outlined">mail</span>
                            <span>联系我</span>
                        </button>
                        <button className="flex min-w-[160px] items-center justify-center gap-2 rounded-xl h-14 px-8 bg-white/5 border border-white/10 text-white text-lg font-bold transition-all hover:bg-white/10 hover:border-white/20">
                            <span>下一个案例</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                    
                    {/* Decorative Logos */}
                    <div className="mt-16 flex justify-center items-center gap-10 opacity-30">
                        <div className="h-8 w-8 bg-white rounded-full"></div>
                        <div className="h-8 w-8 bg-white rounded-md transform rotate-45"></div>
                        <div className="h-8 w-8 bg-white rounded-full border-2 border-background-dark"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-white/5 pt-8 pb-12 flex justify-between items-center text-white/30 text-sm">
            <p>© 2024 UX Case Study Portfolio. All rights reserved.</p>
            <div className="flex items-center gap-2 font-mono">
                <span className="text-primary-blue font-bold">15</span>
                <span className="w-8 h-[1px] bg-white/20"></span>
                <span>15</span>
            </div>
        </footer>

      </div>
    </div>
  );
};