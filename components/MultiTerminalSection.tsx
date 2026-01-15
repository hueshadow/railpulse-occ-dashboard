import React from 'react';

export const MultiTerminalSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 md:px-12 lg:px-16 relative overflow-hidden">
      <div className="max-w-[1920px] w-full relative flex flex-col justify-center">
        <div className="grid grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Content */}
          <div className="col-span-12 lg:col-span-4 flex flex-col">
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start shadow-[0_0_15px_rgba(0,242,255,0.1)] mb-6">
                <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
                <p className="text-primary text-sm font-medium leading-normal">洞察：利用分布式技术实现指挥中心与现场的高效即时协同。</p>
            </div>
            <h1 className="glass-terminal px-10 py-6 rounded-[3rem] w-fit relative z-10 text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter mb-8 whitespace-nowrap font-bold-zh">
                12 多端协同与 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">HarmonyOS</span> 现场应用
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-10">
                HarmonyOS distributed technology bridges the gap between the Control Center and field personnel with millisecond-level collaboration, ensuring data consistency and real-time response.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl glass-card-terminal">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Low Latency Sync</h4>
                  <p className="text-xs text-white/40">Field status updates in &lt; 100ms</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl glass-card-terminal">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Secure Terminal Management</h4>
                  <p className="text-xs text-white/40">End-to-end encryption for all field reports</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Interaction */}
          <div className="col-span-12 lg:col-span-8 relative h-[800px] flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] -z-10 opacity-50"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full items-end">
              
              {/* Card 1: Incident Reporting */}
              <div className="glass-terminal p-2 rounded-[2.5rem] transform translate-y-12">
                <div className="bg-[#111] w-full aspect-[9/19.5] rounded-[2.2rem] overflow-hidden relative border border-white/5">
                  <div className="p-4 pt-8">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-bold text-white/40">9:41 AM</span>
                      <div className="h-5 w-20 bg-black rounded-full border border-white/10"></div>
                      <span className="material-symbols-outlined text-sm text-white/40">signal_cellular_4_bar</span>
                    </div>
                    <h3 className="text-sm font-bold mb-4 text-white font-bold-zh">一键报修 <span className="block text-[10px] text-white/40 font-normal font-sans">Incident Reporting</span></h3>
                    <div className="space-y-3">
                      <div className="h-20 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center flex-col gap-1">
                        <span className="material-symbols-outlined text-primary">photo_camera</span>
                        <span className="text-[8px] text-white/40">Upload Photo</span>
                      </div>
                      <div className="h-10 bg-white/5 rounded-lg border border-white/10 px-3 flex items-center">
                        <span className="text-[8px] text-white/40">Fault Type: Signal Failure</span>
                      </div>
                      <div className="h-10 bg-white/5 rounded-lg border border-white/10 px-3 flex items-center">
                        <span className="text-[8px] text-white/40">Location: Station A - Gate 4</span>
                      </div>
                      <div className="h-10 bg-primary rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
                        <span className="text-[10px] font-bold text-background-dark">Submit Report</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Card 2: Asset Management */}
              <div className="glass-terminal p-2 rounded-[2.5rem] transform -translate-y-8">
                <div className="bg-[#111] w-full aspect-[9/19.5] rounded-[2.2rem] overflow-hidden relative border border-white/5">
                  <div className="p-4 pt-8 text-center">
                    <div className="flex justify-between items-center mb-6 px-2">
                      <span className="text-[10px] font-bold text-white/40">9:41</span>
                      <div className="h-5 w-20 bg-black rounded-full border border-white/10"></div>
                      <span className="material-symbols-outlined text-sm text-white/40">battery_full</span>
                    </div>
                    <h3 className="text-sm font-bold mb-2 text-white font-bold-zh">资产全生命周期</h3>
                    <p className="text-[8px] text-white/40 mb-6 uppercase tracking-wider">Asset Management</p>
                    <div className="relative size-32 mx-auto mb-6">
                      <div className="absolute inset-0 border-2 border-primary/40 rounded-xl opacity-20 animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center border border-primary/20 bg-primary/5 rounded-xl">
                        <span className="material-symbols-outlined text-4xl text-primary">qr_code_scanner</span>
                      </div>
                    </div>
                    <div className="text-left space-y-2 px-2">
                      <div className="p-2 bg-white/5 rounded-lg border-l-2 border-primary">
                        <p className="text-[8px] text-white/40">ID: RP-99210-X</p>
                        <p className="text-[9px] font-bold text-white">Relay Switch v4</p>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg border-l-2 border-white/20">
                        <p className="text-[8px] text-white/40">Status</p>
                        <p className="text-[9px] font-bold text-white">Maintenance Overdue</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Card 3: Dispatch */}
              <div className="glass-terminal p-2 rounded-[2.5rem] transform translate-y-4">
                <div className="bg-[#111] w-full aspect-[9/19.5] rounded-[2.2rem] overflow-hidden relative border border-white/5">
                  <div className="p-0 pt-8 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-4 px-4">
                      <span className="text-[10px] font-bold text-white/40">9:41</span>
                      <div className="h-5 w-20 bg-black rounded-full"></div>
                      <span className="material-symbols-outlined text-sm text-white/40">wifi</span>
                    </div>
                    <div className="px-4 border-b border-white/10 pb-2">
                      <h3 className="text-sm font-bold text-white font-bold-zh">协同指挥</h3>
                      <p className="text-[8px] text-primary">Dispatch Active • 4 Online</p>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      <div className="flex gap-2">
                        <div className="size-6 rounded-full bg-white/10 shrink-0"></div>
                        <div className="bg-white/5 p-2 rounded-lg rounded-tl-none">
                          <p className="text-[8px] leading-tight text-white/80">OCC: Confirming site arrival at Station A.</p>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-row-reverse">
                        <div className="size-6 rounded-full bg-primary/20 shrink-0"></div>
                        <div className="bg-primary/20 p-2 rounded-lg rounded-tr-none border border-primary/30">
                          <p className="text-[8px] leading-tight text-white">Field: Arrived. Scanning NFC now.</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="size-6 rounded-full bg-white/10 shrink-0"></div>
                        <div className="bg-white/5 p-2 rounded-lg rounded-tl-none">
                          <div className="size-16 rounded bg-black/40 flex items-center justify-center border border-white/5">
                            <span className="material-symbols-outlined text-white/20 text-sm">map</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t border-white/10 bg-white/5">
                      <div className="h-7 bg-black/50 rounded-full px-3 flex items-center justify-between">
                        <span className="text-[8px] text-white/30">Message...</span>
                        <span className="material-symbols-outlined text-sm text-primary">mic</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Task Status */}
              <div className="glass-terminal p-2 rounded-[2.5rem] transform -translate-y-4">
                <div className="bg-[#111] w-full aspect-[9/19.5] rounded-[2.2rem] overflow-hidden relative border border-white/5">
                  <div className="p-4 pt-8">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-bold text-white/40">9:41</span>
                      <div className="h-5 w-20 bg-black rounded-full border border-white/10"></div>
                      <span className="material-symbols-outlined text-sm text-white/40">signal_wifi_4_bar</span>
                    </div>
                    <h3 className="text-sm font-bold mb-4 text-white font-bold-zh">任务追踪 <span className="block text-[10px] text-white/40 font-normal font-sans">Task Status</span></h3>
                    <div className="bg-white/5 p-3 rounded-xl mb-4 border border-white/10">
                      <p className="text-[10px] text-white/40 mb-2">Today's Progress</p>
                      <div className="flex items-end gap-1 h-12">
                        <div className="flex-1 bg-primary/20 h-1/2 rounded-t-sm"></div>
                        <div className="flex-1 bg-primary/20 h-3/4 rounded-t-sm"></div>
                        <div className="flex-1 bg-primary h-full rounded-t-sm"></div>
                        <div className="flex-1 bg-primary/20 h-1/3 rounded-t-sm"></div>
                        <div className="flex-1 bg-white/10 h-1/4 rounded-t-sm"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 bg-white/5 rounded-xl flex items-center justify-between border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-green-500 glow-dot"></div>
                          <p className="text-[10px] font-medium text-white">Routine Insp.</p>
                        </div>
                        <span className="text-[8px] text-white/40">Done</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl flex items-center justify-between border-l-2 border-primary">
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-primary glow-dot"></div>
                          <p className="text-[10px] font-medium text-white">Signal Repair</p>
                        </div>
                        <span className="text-[8px] text-primary">In Progress</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl flex items-center justify-between border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-white/20"></div>
                          <p className="text-[10px] font-medium text-white">Equipment Audit</p>
                        </div>
                        <span className="text-[8px] text-white/40">Pending</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>

            </div>

            {/* Overlays */}
            <div className="absolute top-[20%] right-[10%] glass-card-terminal p-3 rounded-xl border border-primary/20 animate-pulse">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary glow-dot"></div>
                <span className="text-[10px] font-bold text-primary">NFC IDENTIFIED</span>
              </div>
            </div>
            <div className="absolute bottom-[20%] left-[25%] glass-card-terminal p-3 rounded-xl border border-primary/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary">location_on</span>
                <span className="text-[10px] font-bold text-primary">RTK LOCATION LOCK</span>
              </div>
            </div>

            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" fill="none" viewBox="0 0 800 600">
              <path d="M100 300 Q 400 100 700 300" opacity="0.3" stroke="url(#gradient1)" strokeDasharray="5 5" strokeWidth="1"></path>
              <path d="M150 450 Q 400 550 650 450" opacity="0.3" stroke="url(#gradient1)" strokeDasharray="5 5" strokeWidth="1"></path>
              <defs>
                <linearGradient id="gradient1" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#13b6ec" stopOpacity="0"></stop>
                  <stop offset="50%" stopColor="#13b6ec" stopOpacity="1"></stop>
                  <stop offset="100%" stopColor="#13b6ec" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="mt-20 flex justify-between items-center w-full">
          <div className="flex gap-20">
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Latency</p>
              <p className="text-2xl font-black text-primary font-mono">&lt;85ms</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Consistency</p>
              <p className="text-2xl font-black text-white font-mono">99.9%</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Coverage</p>
              <p className="text-2xl font-black text-white">Full Network</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest">Variant 12 / 14</p>
              <p className="text-sm font-bold text-white/80">Distributed System Field App</p>
            </div>
            <div className="size-10 rounded-lg glass-card-terminal flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">hub</span>
            </div>
          </div>
        </div>

        {/* Floating Ambient Effects */}
        <div className="fixed top-[-10%] right-[-5%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[150px] -z-20 pointer-events-none"></div>
        <div className="fixed bottom-[-5%] left-[-5%] w-[30%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] -z-20 pointer-events-none"></div>
      </div>
    </div>
  );
};