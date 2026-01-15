import React from 'react';

export const InformationArchitectureSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-16 md:px-12 lg:px-16 relative">
      <div className="ambient-glow top-[-200px] left-[-200px]"></div>
      <div className="ambient-glow bottom-[-200px] right-[-100px]" style={{ background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)' }}></div>
      
      <div className="max-w-[1920px] w-full flex flex-col gap-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-white/5 pb-6">
          <div className="flex flex-col gap-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start shadow-[0_0_15px_rgba(0,242,255,0.1)]">
              <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
              <p className="text-primary text-sm font-medium leading-normal">洞察：采用渐进式披露策略，降低高压环境下的认知负荷。</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
              05 信息架构
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-2">
              通过多层级导航策略优化高压环境下的认知负荷。
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-text-secondary text-sm font-mono border border-white/10 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm self-end mb-2">
            <span className="material-symbols-outlined text-primary text-base">grid_view</span>
            <span>System Map v4.2</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 flex-1">
          
          {/* Left Column: Navigation Logic */}
          <section className="lg:col-span-3 flex flex-col gap-6 glass-panel rounded-xl p-6 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] -z-10"></div>
            <div className="relative z-10 flex flex-col gap-2 mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">account_tree</span>
                导航逻辑
              </h3>
              <p className="text-sm text-text-secondary">严格的3级层次结构设计，确保关键控制在2次点击内触达。</p>
            </div>
            
            <div className="relative z-10 flex flex-col gap-6 flex-1 pl-4 border-l border-white/10 ml-3">
              {/* Level 1 */}
              <div className="relative group">
                <div className="absolute -left-[21px] top-3 w-3 h-3 rounded-full bg-background-dark border-2 border-primary z-20"></div>
                <div className="glass-layer p-4 rounded-lg group-hover:border-primary/50">
                  <div className="text-primary text-xs font-bold uppercase tracking-wider mb-1">一级</div>
                  <h4 className="text-white font-bold text-lg">全网概览</h4>
                  <p className="text-xs text-text-secondary mt-2 leading-relaxed">系统级健康度、聚合KPI及高级别事件监控。</p>
                </div>
              </div>

              {/* Level 2 */}
              <div className="relative group">
                <div className="absolute -left-[21px] top-3 w-3 h-3 rounded-full bg-background-dark border-2 border-text-secondary group-hover:border-primary transition-colors z-20"></div>
                <div className="glass-layer p-4 rounded-lg group-hover:border-primary/50">
                  <div className="text-text-secondary text-xs font-bold uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">二级</div>
                  <h4 className="text-white font-bold text-lg">线路详情</h4>
                  <p className="text-xs text-text-secondary mt-2 leading-relaxed">特定线路表现、运行图执行情况及车辆状态。</p>
                </div>
              </div>

              {/* Level 3 */}
              <div className="relative group">
                <div className="absolute -left-[21px] top-3 w-3 h-3 rounded-full bg-background-dark border-2 border-text-secondary group-hover:border-primary transition-colors z-20"></div>
                <div className="glass-layer p-4 rounded-lg group-hover:border-primary/50">
                  <div className="text-text-secondary text-xs font-bold uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">三级</div>
                  <h4 className="text-white font-bold text-lg">车站/资产运维</h4>
                  <p className="text-xs text-text-secondary mt-2 leading-relaxed">信号、监控流及单个资产维护日志的细粒度控制。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Center Column: Platform IA Topology */}
          <section className="lg:col-span-6 flex flex-col glass-panel rounded-xl overflow-hidden h-[600px] lg:h-auto">
            <div className="h-12 border-b border-white/10 bg-black/20 backdrop-blur flex items-center px-4 justify-between shrink-0">
              <div className="text-xs font-mono text-text-secondary uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">hub</span>
                平台 IA 拓扑图
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[10px] text-primary font-mono uppercase">LIVE 模型</span>
              </div>
            </div>
            
            <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden bg-gradient-to-b from-transparent to-black/30">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#60a5fa 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
              
              <div className="relative w-full max-w-lg h-full max-h-[450px] flex flex-col justify-between z-10">
                {/* Root Node */}
                <div className="flex justify-center relative">
                  <div className="node-card text-white w-48 py-4 rounded-lg text-center font-bold z-20 relative backdrop-blur-xl">
                    <div className="text-xs text-primary mb-1 uppercase tracking-wider font-mono">主入口</div>
                    <span className="text-lg">仪表盘</span>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                </div>

                {/* Connecting Lines */}
                <div className="absolute top-[18%] left-0 w-full h-[65%] border-t border-l border-r border-primary/30 rounded-t-3xl -z-0"></div>

                {/* Sub Nodes Grid - Dashboard Children */}
                <div className="grid grid-cols-3 gap-3 mt-12">
                  {/* Row 1 */}
                  <div className="flex flex-col items-center gap-2 relative group">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-primary/20 group-hover:bg-primary/50 transition-colors"></div>
                    <div className="node-card text-white w-full py-3.5 rounded-lg flex flex-col items-center gap-1.5 z-20 cursor-pointer">
                      <span className="material-symbols-outlined text-blue-400 text-xl">dashboard</span>
                      <span className="text-xs font-semibold">系统总览</span>
                    </div>
                    <div className="h-5 w-[1px] bg-white/10"></div>
                    <div className="text-[9px] text-text-secondary uppercase bg-white/5 border border-white/10 px-1.5 py-0.5 rounded backdrop-blur">核心</div>
                  </div>

                  <div className="flex flex-col items-center gap-2 relative group">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-primary/20 group-hover:bg-primary/50 transition-colors"></div>
                    <div className="node-card text-white w-full py-3.5 rounded-lg flex flex-col items-center gap-1.5 z-20 cursor-pointer">
                      <span className="material-symbols-outlined text-cyan-400 text-xl">directions_railway</span>
                      <span className="text-xs font-semibold">运行监控</span>
                    </div>
                    <div className="h-5 w-[1px] bg-white/10"></div>
                    <div className="text-[9px] text-text-secondary uppercase bg-white/5 border border-white/10 px-1.5 py-0.5 rounded backdrop-blur">运营</div>
                  </div>

                  <div className="flex flex-col items-center gap-2 relative group">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-primary/20 group-hover:bg-primary/50 transition-colors"></div>
                    <div className="node-card text-white w-full py-3.5 rounded-lg flex flex-col items-center gap-1.5 z-20 cursor-pointer">
                      <span className="material-symbols-outlined text-green-400 text-xl">people</span>
                      <span className="text-xs font-semibold">客流分析</span>
                    </div>
                    <div className="h-5 w-[1px] bg-white/10"></div>
                    <div className="text-[9px] text-text-secondary uppercase bg-white/5 border border-white/10 px-1.5 py-0.5 rounded backdrop-blur">数据</div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col items-center gap-2 relative group">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-primary/20 group-hover:bg-primary/50 transition-colors"></div>
                    <div className="node-card text-white w-full py-3.5 rounded-lg flex flex-col items-center gap-1.5 z-20 cursor-pointer">
                      <span className="material-symbols-outlined text-yellow-400 text-xl">location_city</span>
                      <span className="text-xs font-semibold">车站运维</span>
                    </div>
                    <div className="h-5 w-[1px] bg-white/10"></div>
                    <div className="text-[9px] text-text-secondary uppercase bg-white/5 border border-white/10 px-1.5 py-0.5 rounded backdrop-blur">资产</div>
                  </div>

                  <div className="flex flex-col items-center gap-2 relative group">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-primary/20 group-hover:bg-primary/50 transition-colors"></div>
                    <div className="node-card text-white w-full py-3.5 rounded-lg flex flex-col items-center gap-1.5 z-20 cursor-pointer border border-purple-500/30">
                      <span className="material-symbols-outlined text-purple-400 text-xl">warning</span>
                      <span className="text-xs font-semibold">应急响应</span>
                    </div>
                    <div className="h-5 w-[1px] bg-white/10"></div>
                    <div className="text-[9px] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 px-1.5 py-0.5 rounded backdrop-blur">指挥</div>
                  </div>

                  <div className="flex flex-col items-center gap-2 relative group">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-primary/20 group-hover:bg-primary/50 transition-colors"></div>
                    <div className="node-card text-white w-full py-3.5 rounded-lg flex flex-col items-center gap-1.5 z-20 cursor-pointer">
                      <span className="material-symbols-outlined text-orange-400 text-xl">subway</span>
                      <span className="text-xs font-semibold">多式联运</span>
                    </div>
                    <div className="h-5 w-[1px] bg-white/10"></div>
                    <div className="text-[9px] text-text-secondary uppercase bg-white/5 border border-white/10 px-1.5 py-0.5 rounded backdrop-blur">整合</div>
                  </div>

                  {/* Row 3 - Third level with Emergency Command Center */}
                  <div className="flex flex-col items-center gap-2 relative group">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-primary/20 group-hover:bg-primary/50 transition-colors"></div>
                    <div className="node-card text-white w-full py-3.5 rounded-lg flex flex-col items-center gap-1.5 z-20 cursor-pointer">
                      <span className="material-symbols-outlined text-indigo-400 text-xl">history</span>
                      <span className="text-xs font-semibold">事件回放</span>
                    </div>
                    <div className="h-5 w-[1px] bg-white/10"></div>
                    <div className="text-[9px] text-text-secondary uppercase bg-white/5 border border-white/10 px-1.5 py-0.5 rounded backdrop-blur">日志</div>
                  </div>

                  <div className="flex flex-col items-center gap-2 relative group">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-primary/20 group-hover:bg-primary/50 transition-colors"></div>
                    <div className="node-card text-white w-full py-3.5 rounded-lg flex flex-col items-center gap-1.5 z-20 cursor-pointer">
                      <span className="material-symbols-outlined text-teal-400 text-xl">precision_manufacturing</span>
                      <span className="text-xs font-semibold">资产管理</span>
                    </div>
                    <div className="h-5 w-[1px] bg-white/10"></div>
                    <div className="text-[9px] text-text-secondary uppercase bg-white/5 border border-white/10 px-1.5 py-0.5 rounded backdrop-blur">硬件</div>
                  </div>

                  {/* Emergency Command Center - Child of Emergency Response */}
                  <div className="flex flex-col items-center gap-2 relative group">
                    {/* Connector line from Emergency Response above */}
                    <div className="absolute -top-[68px] left-1/2 -translate-x-1/2 w-[1px] h-[60px] bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent"></div>
                    <div className="absolute -top-[68px] left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-purple-500"></div>
                    <div className="node-card text-white w-full py-3.5 rounded-lg flex flex-col items-center gap-1.5 z-20 cursor-pointer border border-red-500/30 bg-red-500/5">
                      <span className="material-symbols-outlined text-red-400 text-xl animate-pulse">campaign</span>
                      <span className="text-xs font-semibold">应急指挥中心</span>
                    </div>
                    <div className="h-5 w-[1px] bg-white/10"></div>
                    <div className="text-[9px] text-red-400 uppercase bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded backdrop-blur">指挥</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Breadcrumbs & Switcher */}
          <section className="lg:col-span-3 flex flex-col gap-6">
            <div className="glass-panel rounded-xl p-6 flex flex-col gap-6 h-full">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">面包屑与全局切换器</h3>
                <p className="text-sm text-text-secondary">支持跨线路的水平切换，无需返回根目录。</p>
              </div>
              
              <div className="flex-1 glass-layer rounded-lg p-4 flex flex-col justify-center gap-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay"></div>
                
                {/* Breadcrumb Mockup */}
                <div className="relative z-10 flex flex-col gap-2">
                  <label className="text-[10px] text-primary uppercase font-bold tracking-widest">组件: 面包屑</label>
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary bg-black/40 p-3 rounded border border-white/10 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-sm hover:text-white cursor-pointer">home</span>
                    <span className="text-white/20">/</span>
                    <span className="hover:text-white cursor-pointer transition-colors">线路</span>
                    <span className="text-white/20">/</span>
                    <span className="text-primary font-medium bg-primary/10 px-2 py-0.5 rounded border border-primary/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      蓝线
                    </span>
                  </div>
                </div>

                {/* Switcher Mockup */}
                <div className="relative z-10 flex flex-col gap-2">
                  <label className="text-[10px] text-primary uppercase font-bold tracking-widest">组件: 线路切换器</label>
                  <div className="bg-surface-lighter/80 border border-white/10 rounded-md p-3 w-full max-w-[220px] backdrop-blur-md">
                    <div className="flex items-center justify-between text-white text-sm mb-2 pb-2 border-b border-white/10">
                      <span>选择线路</span>
                      <span className="material-symbols-outlined text-sm text-text-secondary">expand_less</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 p-1.5 rounded bg-primary/20 border border-primary/30 text-xs text-white">
                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></div>
                        蓝线 (当前激活)
                      </div>
                      <div className="flex items-center gap-2 p-1.5 rounded hover:bg-white/5 cursor-pointer text-xs text-text-secondary transition-colors">
                        <div className="w-2 h-2 rounded-full bg-red-500 opacity-60"></div>
                        红线
                      </div>
                      <div className="flex items-center gap-2 p-1.5 rounded hover:bg-white/5 cursor-pointer text-xs text-text-secondary transition-colors">
                        <div className="w-2 h-2 rounded-full bg-green-500 opacity-60"></div>
                        绿线
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Bar: Design Principles */}
          <section className="lg:col-span-12">
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-text-secondary uppercase tracking-widest self-center mr-4">IA 设计原则:</span>
              
              {[
                  { icon: 'layers', text: '扁平化层级' },
                  { icon: 'link', text: '上下文关联' },
                  { icon: 'visibility', text: '基于角色的可见性' },
                  { icon: 'search', text: '即时搜索' }
              ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-default backdrop-blur-sm">
                    <span className="text-primary material-symbols-outlined text-sm">{item.icon}</span>
                    <span className="text-sm text-white font-medium">{item.text}</span>
                  </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};