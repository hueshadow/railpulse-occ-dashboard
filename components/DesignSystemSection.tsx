import React from 'react';

export const DesignSystemSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-16 md:px-12 lg:px-16 relative">
      <div className="max-w-[1920px] w-full flex flex-col gap-10">
        
        {/* Header */}
        <header className="mb-6 pb-6 border-b border-white/5 relative flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start shadow-[0_0_15px_rgba(0,242,255,0.1)]">
            <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
            <p className="text-primary text-sm font-medium leading-normal">洞察：利用原子化设计语言确保跨终端的一致性与开发效率。</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                06 设计系统：模块化企业级设计语言
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-4">
                确保复杂数据环境下的一致性与极速识别。
              </p>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-4">
          
          {/* Left Col: Visual Tokens */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary-blue">token</span>
              <h2 className="text-xl font-bold text-white">视觉令牌 (Visual Tokens)</h2>
            </div>
            
            {/* Color Palette */}
            <div className="glass-panel rounded-2xl p-6 hover:bg-white/[0.02] transition-colors">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-5 border-b border-white/5 pb-2">01 调色板</h3>
              <div className="space-y-4">
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white font-medium">深色背景</span>
                    <span className="text-[10px] font-mono text-slate-500">#050505</span>
                  </div>
                  <div className="h-12 w-full rounded-lg bg-[#050505] border border-white/10 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white font-medium">面板背景</span>
                    <span className="text-[10px] font-mono text-slate-500">#0F0F10</span>
                  </div>
                  <div className="h-12 w-full rounded-lg bg-[#0F0F10] border border-white/10 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white font-medium">Quantix 紫蓝</span>
                    <span className="text-[10px] font-mono text-slate-500">#2E5CFF</span>
                  </div>
                  <div className="h-12 w-full rounded-lg bg-gradient-to-r from-[#2E5CFF] to-[#1a3a99] border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white font-medium">RailPulse 亮青</span>
                    <span className="text-[10px] font-mono text-slate-500">#25c0f4</span>
                  </div>
                  <div className="h-12 w-full rounded-lg bg-gradient-to-r from-[#25c0f4] to-[#0D87B0] border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white font-medium">极光渐变</span>
                    <span className="text-[10px] font-mono text-slate-500">#8b5cf6 → #06b6d4</span>
                  </div>
                  <div className="h-12 w-full rounded-lg bg-gradient-to-r from-[#8b5cf6] via-[#2E5CFF] to-[#06b6d4] border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-red-400 font-bold">危险</span>
                    <span className="text-[10px] font-mono text-slate-500">#ef4444</span>
                  </div>
                  <div className="h-12 w-full rounded-lg bg-[#ef4444] border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-amber-400 font-bold">警告</span>
                    <span className="text-[10px] font-mono text-slate-500">#f59e0b</span>
                  </div>
                  <div className="h-12 w-full rounded-lg bg-[#f59e0b] border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-emerald-400 font-bold">成功</span>
                    <span className="text-[10px] font-mono text-slate-500">#10b981</span>
                  </div>
                  <div className="h-12 w-full rounded-lg bg-[#10b981] border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="glass-panel rounded-2xl p-6 hover:bg-white/[0.02] transition-colors">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-5 border-b border-white/5 pb-2">02 字体系统</h3>
              <div className="flex flex-col gap-5">
                <div className="glass-inner rounded-xl p-3 bg-gradient-to-br from-white/5 to-transparent border-white/5">
                  <span className="text-3xl font-bold text-white tracking-tight">Aa</span>
                  <div className="text-sm font-bold text-white mt-1">Inter Display</div>
                  <div className="text-xs text-slate-500 mt-1">Primary UI Font</div>
                </div>
                <div className="space-y-4 border-l border-white/10 pl-4">
                  <div>
                    <p className="text-lg font-bold text-white">标题 1</p>
                    <p className="text-[10px] text-slate-500 font-mono">Bold / 32px</p>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">标题 2</p>
                    <p className="text-[10px] text-slate-500 font-mono">Semibold / 18px</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">正文 (双语)</p>
                    <p className="text-[10px] text-slate-500 font-mono">Regular / 14px</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Spacing */}
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-5 border-b border-white/5 pb-2">03 间距规范</h3>
              <div className="h-32 w-full grid-bg rounded-xl border border-white/5 relative flex items-center justify-center glass-inner group-hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 bg-primary/20 border border-primary flex items-center justify-center backdrop-blur-sm">
                  <span className="text-[10px] text-primary font-mono font-bold">8</span>
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-500">8px 基础网格</div>
              </div>
            </div>
          </div>

          {/* Center Col: Smart Components */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-blue">widgets</span>
                <h2 className="text-xl font-bold text-white">智能组件 (Smart Components)</h2>
              </div>
              <span className="text-xs font-mono text-slate-500 glass-inner px-2 py-1 rounded">V2.4</span>
            </div>
            
            <div className="glass-panel rounded-2xl p-8 h-full min-h-[600px] relative grid-bg-large">
              
              {/* KPIs */}
              <div className="mb-8">
                <h4 className="text-xs font-mono text-slate-400 uppercase mb-4 flex items-center gap-2 pl-1">
                  <span className="w-1 h-1 bg-primary rounded-full"></span> KPI 数据卡片
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="glass-inner glass-inner-hover rounded-xl p-5 cursor-pointer group">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs text-slate-400 font-medium tracking-wide">正点率</span>
                      <span className="material-symbols-outlined text-xs text-emerald-400 bg-emerald-500/10 p-1 rounded-full">trending_up</span>
                    </div>
                    <div className="text-3xl font-bold text-white tracking-tight">99.2%</div>
                    <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-emerald-500 w-[99%]"></div>
                    </div>
                  </div>
                  <div className="glass-inner glass-inner-hover rounded-xl p-5 cursor-pointer group">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs text-slate-400 font-medium tracking-wide">事件数</span>
                      <span className="material-symbols-outlined text-xs text-red-500 animate-pulse bg-red-500/10 p-1 rounded-full">warning</span>
                    </div>
                    <div className="text-3xl font-bold text-white tracking-tight">03</div>
                    <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-red-500 w-[30%]"></div>
                    </div>
                  </div>
                  <div className="glass-inner glass-inner-hover rounded-xl p-5 cursor-pointer group">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs text-slate-400 font-medium tracking-wide">能耗</span>
                      <span className="material-symbols-outlined text-xs text-primary-blue bg-primary-blue/10 p-1 rounded-full">bolt</span>
                    </div>
                    <div className="text-3xl font-bold text-white tracking-tight">450 <span className="text-xs font-normal text-slate-500 ml-1">kWh</span></div>
                    <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-primary-blue w-[65%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Event Stream */}
                <div className="flex flex-col h-full">
                  <h4 className="text-xs font-mono text-slate-400 uppercase mb-4 flex items-center gap-2 pl-1">
                    <span className="w-1 h-1 bg-primary rounded-full"></span> 事件流
                  </h4>
                  <div className="glass-inner rounded-xl overflow-hidden flex-1 flex flex-col">
                    <div className="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                      <span className="text-xs font-semibold text-slate-300">活动告警</span>
                      <span className="text-[10px] bg-red-500/20 border border-red-500/20 text-red-300 px-2 py-0.5 rounded">3 条新消息</span>
                    </div>
                    <div className="p-3 space-y-2 flex-1">
                      <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/10 rounded-lg hover:bg-red-500/20 hover:border-red-500/30 transition-all cursor-pointer backdrop-blur-sm group">
                        <div className="p-1.5 rounded bg-red-500/20 text-red-500 group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-sm block">error</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-white group-hover:text-red-100">轨道障碍物</span>
                            <span className="text-[10px] font-mono text-red-400 bg-red-900/40 px-1 rounded">P1</span>
                          </div>
                          <div className="text-[10px] text-slate-400 truncate mt-0.5">4A 区段, KM 12.4 - 信号丢失</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg hover:bg-amber-500/10 hover:border-amber-500/20 transition-all cursor-pointer backdrop-blur-sm group">
                        <div className="p-1.5 rounded bg-amber-500/20 text-amber-500 group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-sm block">warning</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-slate-200 group-hover:text-amber-100">限速</span>
                            <span className="text-[10px] font-mono text-amber-400 bg-amber-900/40 px-1 rounded">P2</span>
                          </div>
                          <div className="text-[10px] text-slate-400 truncate mt-0.5">B 施工区 - 速度受限</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/5 hover:border-white/10 transition-all cursor-pointer backdrop-blur-sm group">
                        <div className="p-1.5 rounded bg-white/10 text-slate-400 group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-sm block">info</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-slate-300 group-hover:text-white">维保</span>
                            <span className="text-[10px] font-mono text-slate-500 bg-slate-800/50 px-1 rounded">P3</span>
                          </div>
                          <div className="text-[10px] text-slate-500 truncate mt-0.5">404 单元例行检查计划</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nodes & Timeline */}
                <div className="flex flex-col gap-8">
                  {/* Nodes */}
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase mb-4 flex items-center gap-2 pl-1">
                      <span className="w-1 h-1 bg-primary rounded-full"></span> 拓扑节点
                    </h4>
                    <div className="glass-inner rounded-xl p-4 flex items-center justify-center relative h-32 hover:border-white/20 transition-colors">
                      <div className="absolute w-3/4 h-[1px] bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                      <div className="relative z-10 flex gap-10">
                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                          <div className="w-3 h-3 rounded-full bg-slate-900 border-2 border-slate-500 group-hover:border-slate-300 transition-colors ring-4 ring-transparent group-hover:ring-slate-500/20"></div>
                          <span className="text-[10px] text-slate-500 font-mono group-hover:text-slate-300">空闲</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                          <div className="w-6 h-6 rounded-full bg-slate-900/80 border-2 border-primary flex items-center justify-center backdrop-blur-sm ring-4 ring-primary/20">
                            <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-inner"></div>
                          </div>
                          <span className="text-[10px] text-white font-mono font-bold">激活</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                          <div className="w-3 h-3 rounded-full bg-slate-900 border-2 border-red-500 ring-4 ring-red-500/20 group-hover:ring-red-500/40 transition-all"></div>
                          <span className="text-[10px] text-red-400 font-mono group-hover:text-red-300">异常</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline */}
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase mb-4 flex items-center gap-2 pl-1">
                      <span className="w-1 h-1 bg-primary rounded-full"></span> 时间轴控制
                    </h4>
                    <div className="glass-inner rounded-xl p-5 hover:bg-white/5 transition-colors">
                      <div className="relative h-10 w-full bg-black/20 rounded-full border border-white/5 flex items-center px-1 backdrop-blur-md shadow-inner">
                        <div className="absolute left-[20%] right-[30%] h-6 bg-primary/20 rounded-full border border-primary/20 backdrop-blur-sm"></div>
                        <div className="absolute left-[20%] w-1.5 h-7 bg-primary rounded-full cursor-pointer hover:scale-110 transition-transform top-1.5"></div>
                        <div className="absolute left-[70%] w-1.5 h-7 bg-white/30 rounded-full shadow-lg cursor-pointer hover:bg-white/50 transition-colors top-1.5"></div>
                        <div className="w-full flex justify-between px-3 text-[10px] font-mono text-slate-500 mt-14">
                          <span>08:00</span>
                          <span>12:00</span>
                          <span>16:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Col: Semantic Logic */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary-blue">rule</span>
              <h2 className="text-xl font-bold text-white">语义逻辑 (Semantic Logic)</h2>
            </div>
            
            <div className="glass-panel rounded-2xl p-5 border-red-500/30 relative overflow-hidden group hover:border-red-500/50 transition-colors">
              <div className="absolute top-[-10px] right-[-10px] p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-red-500 blur-sm">priority_high</span>
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-xs font-bold text-red-400 mb-5 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  严苛规则
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  红色仅用于 <br/> <span className="text-red-500">P1 级紧急事件</span>
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                  为了保持认知上的紧迫感，纯红色 (#EF4444) 专属于影响安全或运营的 1 级事件。
                </p>
                <div className="p-3 bg-black/20 rounded-lg border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2 text-xs text-slate-500 uppercase font-mono tracking-wider">正确用法</div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-red-500 text-sm">error_outline</span>
                    <span className="text-xs text-white">碰撞风险</span>
                  </div>
                </div>
                <div className="p-3 mt-3 bg-black/20 rounded-lg border border-white/5 opacity-50 backdrop-blur-sm grayscale group-hover:grayscale-0 transition-all">
                  <div className="flex items-center gap-2 mb-2 text-xs text-slate-500 uppercase decoration-slate-500 line-through font-mono tracking-wider">错误用法</div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-red-500 text-sm">delete</span>
                    <span className="text-xs text-slate-400">删除按钮</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-5">
              <h3 className="text-sm font-bold text-white mb-4">层级</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <span className="text-slate-200 font-medium">P1 级紧急</span>
                  <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                </div>
                <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-white/5 border border-white/5 opacity-80 hover:opacity-100 transition-all backdrop-blur-sm">
                  <span className="text-slate-300">P2 级警告</span>
                  <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
                </div>
                <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-white/5 border border-white/5 opacity-60 hover:opacity-100 transition-all backdrop-blur-sm">
                  <span className="text-slate-400">P3 级信息</span>
                  <div className="w-3 h-3 bg-primary-blue rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer: Core Design Principles */}
        <div className="mt-auto">
          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">核心设计原则</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-panel-light p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors group cursor-default">
              <div className="p-2.5 rounded-lg bg-primary-blue/10 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">contrast</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-0.5">高对比度</div>
                <div className="text-[10px] text-slate-400 font-mono">WCAG AAA</div>
              </div>
            </div>
            <div className="glass-panel-light p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors group cursor-default">
              <div className="p-2.5 rounded-lg bg-primary-blue/10 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">visibility</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-0.5">易读性</div>
                <div className="text-[10px] text-slate-400 font-mono">0.5s 快速识别</div>
              </div>
            </div>
            <div className="glass-panel-light p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors group cursor-default">
              <div className="p-2.5 rounded-lg bg-primary-blue/10 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">touch_app</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-0.5">输入效率</div>
                <div className="text-[10px] text-slate-400 font-mono">Fitts' Law</div>
              </div>
            </div>
            <div className="glass-panel-light p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors group cursor-default">
              <div className="p-2.5 rounded-lg bg-primary-blue/10 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">extension</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-0.5">可扩展性</div>
                <div className="text-[10px] text-slate-400 font-mono">Atomic Design</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};