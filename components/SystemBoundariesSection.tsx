import React from 'react';

export const SystemBoundariesSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 md:px-12 lg:px-16">
      <div className="max-w-[1920px] w-full flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-6 mb-8 border-b border-white/5 pb-8">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start">
            <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
            <p className="text-primary text-sm font-medium leading-normal">洞察：消除数据孤岛，建立统一的运营真理来源。</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                03 系统边界与数据域
                </h1>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-2">
                打破数据孤岛，构建统一运营的<span className="text-white font-normal">“单一事实来源”</span>。
                </p>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
                <div className="flex flex-col items-end">
                <span className="font-bold text-white text-2xl leading-none">6个</span>
                <span className="text-[10px] uppercase tracking-wider">核心数据域</span>
                </div>
                <div className="w-[1px] bg-white/10 h-10"></div>
                <div className="flex flex-col items-end">
                <span className="font-bold text-white text-2xl leading-none">12+</span>
                <span className="text-[10px] uppercase tracking-wider">外部集成</span>
                </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full flex-grow min-h-[600px]">
          
          {/* Left Column: Internal Systems */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="glass-panel rounded-xl p-5 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary-blue">domain</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">内部系统数据</h3>
              </div>
              <ul className="space-y-3 flex-grow">
                {[
                  { icon: 'traffic', name: 'SIG', desc: '信号系统' },
                  { icon: 'sensor_door', name: 'PSD', desc: '屏蔽门系统' },
                  { icon: 'info', name: 'PIS', desc: '乘客信息系统' },
                  { icon: 'videocam', name: 'CCTV', desc: '视频监控系统' },
                  { icon: 'campaign', name: 'PA', desc: '广播系统' },
                ].map((item, i) => (
                  <li key={i} className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-white/5 cursor-default">
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-primary-blue text-[20px]">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-slate-200">{item.name}</div>
                      <div className="text-[10px] text-slate-500 uppercase">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <span className="size-2 rounded-full bg-emerald-500/50"></span>
                  所有系统在线
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Graph Visualization */}
          <div className="lg:col-span-8 relative flex flex-col min-h-[600px]">
            <div className="glass-panel rounded-2xl flex-grow relative overflow-hidden group">
              {/* Background Layers */}
              <div className="absolute inset-0 bg-[#0d121c]">
                <div className="absolute inset-0 opacity-40 mix-blend-screen bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhOv8nrvryW1-JYE71GNej5YllMjXTwo6r8IPEz_pAwJY-LVcyo2zudMLNd3bO7YLEiD1xHQasKedePZVA2-tdCpDNTg8gTw310gj4u-InlswEHCufqSWVcpDKF1_BAOsohTFXWABKTkyNY4OT4CwzfcgNeQPbjaQsopukKSG1DMCiaFBqX6kK-tu8dYEs9x6P41Ndn5G1ooS4a6NoORJ3p_QGaIITsJBaIJWMFqR1hrPFcH5uHsXWCxDLGaFovMTiD2oslRp2dr8')", filter: 'hue-rotate(10deg) contrast(1.2)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-[#0B1020] opacity-80"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B1020]/50 to-[#0B1020]"></div>
              </div>

              {/* Network Graph */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Rotating Orbits */}
                <div className="node-orbit opacity-30 animate-[spin_60s_linear_infinite]"></div>
                <div className="node-orbit opacity-10 w-[600px] h-[600px] border-solid border-slate-700"></div>
                
                {/* Spokes */}
                <div className="spoke rotate-0"></div>
                <div className="spoke rotate-60"></div>
                <div className="spoke rotate-120"></div>
                <div className="spoke rotate-180"></div>
                <div className="spoke rotate-240"></div>
                <div className="spoke rotate-300"></div>

                {/* Center Hub */}
                <div className="center-hub relative flex flex-col items-center justify-center size-40 rounded-full glass-hub z-20">
                  <span className="material-symbols-outlined text-4xl text-primary-blue mb-1">hub</span>
                  <span className="text-xs font-bold text-white tracking-widest uppercase">RailPulse</span>
                  <span className="text-[9px] text-cyan-500 uppercase tracking-tight">核心平台</span>
                </div>

                {/* Nodes */}
                <div className="absolute -translate-y-[200px] flex flex-col items-center gap-2 z-10 cursor-pointer group/node">
                  <div className="glass-node size-16 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-cyan-300">radar</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider bg-[#0B1020]/80 px-2 py-0.5 rounded backdrop-blur">全网态势 (SITUATION)</span>
                </div>

                <div className="absolute translate-x-[173px] -translate-y-[100px] flex flex-col items-center gap-2 z-10 cursor-pointer group/node">
                  <div className="glass-node size-16 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-400 group-hover/node:text-cyan-300 transition-colors">warning</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-[#0B1020]/80 px-2 py-0.5 rounded backdrop-blur">事件管理 (INCIDENT)</span>
                </div>

                <div className="absolute translate-x-[173px] translate-y-[100px] flex flex-col items-center gap-2 z-10 cursor-pointer group/node">
                  <div className="glass-node size-16 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-400 group-hover/node:text-cyan-300 transition-colors">inventory_2</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-[#0B1020]/80 px-2 py-0.5 rounded backdrop-blur">资产设备 (ASSET)</span>
                </div>

                <div className="absolute translate-y-[200px] flex flex-col items-center gap-2 z-10 cursor-pointer group/node">
                  <div className="glass-node size-16 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-400 group-hover/node:text-cyan-300 transition-colors">schema</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-[#0B1020]/80 px-2 py-0.5 rounded backdrop-blur">客流组织 (FLOW)</span>
                </div>

                <div className="absolute -translate-x-[173px] translate-y-[100px] flex flex-col items-center gap-2 z-10 cursor-pointer group/node">
                  <div className="glass-node size-16 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-400 group-hover/node:text-cyan-300 transition-colors">bolt</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-[#0B1020]/80 px-2 py-0.5 rounded backdrop-blur">能源管理 (ENERGY)</span>
                </div>

                <div className="absolute -translate-x-[173px] -translate-y-[100px] flex flex-col items-center gap-2 z-10 cursor-pointer group/node">
                  <div className="glass-node size-16 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-400 group-hover/node:text-cyan-300 transition-colors">public</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-[#0B1020]/80 px-2 py-0.5 rounded backdrop-blur">外部数据 (EXTERNAL)</span>
                </div>
              </div>

              {/* Floating Tabs */}
              <div className="absolute top-6 left-6 flex flex-col gap-3 z-30">
                <div className="glass-tab flex items-center gap-2 pl-2 pr-4 py-1.5 rounded cursor-default">
                  <span className="material-symbols-outlined text-[16px] text-primary-blue">error</span>
                  <span className="text-xs text-slate-200 font-medium">突发事件 (Incident)</span>
                </div>
                <div className="glass-tab flex items-center gap-2 pl-2 pr-4 py-1.5 rounded cursor-default">
                  <span className="material-symbols-outlined text-[16px] text-primary-blue">assignment</span>
                  <span className="text-xs text-slate-200 font-medium">工单 (WorkOrder)</span>
                </div>
              </div>

              <div className="absolute top-6 right-6 flex flex-col gap-3 items-end z-30">
                <div className="glass-tab flex items-center gap-2 pl-2 pr-4 py-1.5 rounded cursor-default">
                  <span className="material-symbols-outlined text-[16px] text-primary-blue">train</span>
                  <span className="text-xs text-slate-200 font-medium">列车 (Train)</span>
                </div>
                <div className="glass-tab flex items-center gap-2 pl-2 pr-4 py-1.5 rounded cursor-default">
                  <span className="material-symbols-outlined text-[16px] text-primary-blue">location_on</span>
                  <span className="text-xs text-slate-200 font-medium">车站 (Station)</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 flex flex-col gap-3 z-30">
                <div className="glass-tab flex items-center gap-2 pl-2 pr-4 py-1.5 rounded cursor-default">
                  <span className="material-symbols-outlined text-[16px] text-primary-blue">inventory_2</span>
                  <span className="text-xs text-slate-200 font-medium">资产 (Asset)</span>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 flex flex-col gap-3 items-end z-30">
                <div className="glass-tab flex items-center gap-2 pl-2 pr-4 py-1.5 rounded cursor-default">
                  <span className="material-symbols-outlined text-[16px] text-primary-blue">badge</span>
                  <span className="text-xs text-slate-200 font-medium">员工 (Staff)</span>
                </div>
                <div className="glass-tab flex items-center gap-2 pl-2 pr-4 py-1.5 rounded cursor-default">
                  <span className="material-symbols-outlined text-[16px] text-primary-blue">groups</span>
                  <span className="text-xs text-slate-200 font-medium">乘客 (Passenger)</span>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-[linear-gradient(rgba(19,182,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(19,182,236,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: External Interfaces */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="glass-panel rounded-xl p-5 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary-blue">cloud_sync</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">外部集成接口</h3>
              </div>
              <ul className="space-y-3 flex-grow">
                {[
                  { icon: 'sunny', name: 'Weather API', desc: '天气预报', color: 'text-amber-500', bg: 'bg-amber-900/30' },
                  { icon: 'electric_bolt', name: 'Power Grid', desc: '区域电网', color: 'text-amber-500', bg: 'bg-amber-900/30' },
                  { icon: 'medical_services', name: 'Emergency', desc: '警务/消防', color: 'text-rose-500', bg: 'bg-rose-900/30' },
                  { icon: 'commute', name: 'City Traffic', desc: '公交/地铁', color: 'text-blue-500', bg: 'bg-blue-900/30' },
                ].map((item, i) => (
                  <li key={i} className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-white/5 cursor-default">
                    <div className={`size-8 rounded-full ${item.bg} flex items-center justify-center`}>
                      <span className={`material-symbols-outlined ${i === 0 ? 'text-cyan-400' : item.color} text-[18px]`}>{item.icon}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-200">{item.name}</div>
                      <div className="text-[10px] text-slate-500">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <span className="material-symbols-outlined text-[12px]">security</span>
                  加密连接
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};