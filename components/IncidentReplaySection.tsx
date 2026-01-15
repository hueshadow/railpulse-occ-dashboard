import React from 'react';

export const IncidentReplaySection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 md:px-12 lg:px-16 relative overflow-hidden">
      
      <div className="max-w-[1920px] w-full flex flex-col gap-6 relative z-10">
        
        {/* Header Section */}
        <header className="flex flex-col gap-4 mb-4">
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
                <p className="text-primary text-sm font-medium leading-normal">洞察：同步多维数据流回放，为事故复盘提供全景视角。</p>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-bold-zh">
                        11 事件复盘与全时空回放
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-4">
                        同步多维数据流回放，精准还原事故现场与决策过程。
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                        <div className="text-2xl font-bold font-mono text-white">14:32:45</div>
                        <div className="text-xs text-slate-400 font-medium">SYSTEM TIME (UTC+8)</div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 font-mono text-sm">
                        <span className="text-white">11</span>
                        <span className="opacity-30">/</span>
                        <span>14</span>
                    </div>
                </div>
            </div>
        </header>

        {/* Main Workspace (Grid Layout) */}
        <main className="flex-1 min-h-[600px] grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Center Stage: Digital Twin / Map Visualization */}
            <section className="lg:col-span-9 relative rounded-2xl overflow-hidden border border-white/10 group bg-white/[0.02] min-h-[500px]">
                {/* Background Map */}
                <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url("https://placeholder.pics/svg/300")', filter: 'contrast(1.2) brightness(0.6) hue-rotate(10deg)' }}></div>
                {/* Map Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                
                {/* Top Right: Live Telemetry Tags */}
                <div className="absolute top-6 right-6 flex gap-3">
                    <div className="glass-panel-replay px-4 py-2 rounded-lg flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Line Voltage</span>
                            <span className="text-lg font-mono font-bold text-white leading-none">750<span className="text-xs text-slate-400 ml-1">V</span></span>
                        </div>
                    </div>
                    <div className="glass-panel-replay px-4 py-2 rounded-lg flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Speed</span>
                            <span className="text-lg font-mono font-bold text-white leading-none">82<span className="text-xs text-slate-400 ml-1">km/h</span></span>
                        </div>
                    </div>
                </div>

                {/* Floating Video Feeds (Bottom Left) */}
                <div className="absolute bottom-6 left-6 flex flex-col sm:flex-row gap-4 max-w-full overflow-x-auto pb-2 sm:pb-0 z-20">
                    {/* Cam 1 */}
                    <div className="glass-panel-replay p-2 rounded-xl w-64 shrink-0 transition-transform hover:scale-105 duration-300">
                        <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-white/5">
                            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuxyki55Dmpd5RvftZHZCIPXcZuU_cSmrj-gxSSyLBOnJSyfx4CGCb3p-z3YCe8feK_26aXbO_DGDoWuvTAHN1_QXYcHC24HzGcpJsbA8s3gCJ76ToI7iiHa0IQlSQ6NY0IWnvGoaft753zh5J6C-eorQDlUFwwedpj-1POCpRbClRjc5TCMD8DBNfNVT4rGGGTTUSrT0ThbU-7-CtXIZmGf9rkjdp1ldPVWNb-2fO9p5yx3p47vNZkOuOGqYJBVqYc-1YGZaMd70")' }}></div>
                            <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-white/80 border border-white/10">
                                CAM 04 • PLATFORM B
                            </div>
                            <div className="absolute bottom-2 right-2 flex gap-1">
                                <span className="material-symbols-outlined text-white text-[14px]">volume_off</span>
                                <span className="material-symbols-outlined text-white text-[14px]">fullscreen</span>
                            </div>
                        </div>
                        <div className="mt-2 flex justify-between items-center px-1">
                            <span className="text-xs text-slate-400 font-medium">Density: Low</span>
                            <span className="text-[10px] font-mono text-primary">LIVE</span>
                        </div>
                    </div>
                    {/* Cam 2 */}
                    <div className="glass-panel-replay p-2 rounded-xl w-64 shrink-0 transition-transform hover:scale-105 duration-300 ring-1 ring-primary/40">
                        <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-white/5">
                            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlndSZlvty5KYrCBqnx4htwhIL70u5AlqKDouduskqVvwnTxfU2WdgbwBARFbnUbctQc2-vcvpihZNs3QShIEYiIgx1AON7M_exvkw2MLHvLsJeDvazHpR8lJ8_5X3d7OSwaloRjrrPipLfBGE9yus01obATW_q4FsZWD0G66TfRw0hZsU7M-d7Ldj1bvc3vwq4ElRZkpxUkYjOQS9kEFL1BEv1J7sY1o2l50QWJD9OtThi12pkNjv_rG74i7-REOXR2iRnTtaj7s")' }}></div>
                            {/* Incident Marker on Video */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500/80 rounded-full flex items-center justify-center animate-ping"></div>
                            <div className="absolute top-2 left-2 bg-red-500/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-white border border-red-400/50">
                                CAM 01 • TUNNEL SECTOR 4
                            </div>
                        </div>
                        <div className="mt-2 flex justify-between items-center px-1">
                            <span className="text-xs text-red-300 font-medium">Signal Loss Detected</span>
                            <span className="text-[10px] font-mono text-red-400 animate-pulse">ALERT</span>
                        </div>
                    </div>
                </div>

                {/* Central 3D Elements (Visual Decoration) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-[400px] h-[400px] border border-primary/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                        <div className="w-[300px] h-[300px] border border-dashed border-primary/10 rounded-full"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                </div>
            </section>

            {/* Right Sidebar: Post-Mortem Report */}
            <aside className="lg:col-span-3 flex flex-col gap-4 min-h-0">
                <div className="glass-panel-replay flex-1 rounded-2xl p-6 flex flex-col relative overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">assignment</span>
                            Incident #9281
                        </h3>
                        <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/20 uppercase">Resolved</span>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                            <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Duration</div>
                            <div className="text-sm font-mono text-white">14m 20s</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                            <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Passengers</div>
                            <div className="text-sm font-mono text-white">~1,240</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                            <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Delay Impact</div>
                            <div className="text-sm font-mono text-red-300">+4m 10s</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                            <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Weather</div>
                            <div className="text-sm font-mono text-white">Rainy</div>
                        </div>
                    </div>

                    {/* AI Summary */}
                    <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                        <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                                <span className="text-xs font-bold text-primary uppercase">AI Analysis</span>
                            </div>
                            <p className="text-xs leading-relaxed text-slate-300">
                                Automatic braking triggered at <span className="text-primary font-mono">14:30:15</span> due to momentary signal loss in Sector 4. System recovered automatically after 45 seconds. Operator intervention confirmed safety protocols.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Event Log</h4>
                            <div className="space-y-3 relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                                <div className="relative pl-5">
                                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 border border-[#0B1020]"></div>
                                    <span className="text-[10px] font-mono text-slate-500 block mb-0.5">14:30:10</span>
                                    <p className="text-xs text-slate-300">Signal strength fluctuation detected.</p>
                                </div>
                                <div className="relative pl-5">
                                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border border-[#0B1020] shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                    <span className="text-[10px] font-mono text-red-300 block mb-0.5">14:30:15</span>
                                    <p className="text-xs text-white font-medium">Emergency Brake Triggered.</p>
                                </div>
                                <div className="relative pl-5">
                                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-primary border border-[#0B1020]"></div>
                                    <span className="text-[10px] font-mono text-primary/60 block mb-0.5">14:31:00</span>
                                    <p className="text-xs text-slate-300">OCC Operator voice contact established.</p>
                                </div>
                                <div className="relative pl-5">
                                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-green-500 border border-[#0B1020]"></div>
                                    <span className="text-[10px] font-mono text-green-400/60 block mb-0.5">14:32:00</span>
                                    <p className="text-xs text-slate-300">Service resumed.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button className="mt-4 w-full py-3 bg-primary text-[#0B1020] font-bold rounded-xl hover:bg-white hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">download</span>
                        Export Full Report
                    </button>
                </div>
            </aside>
        </main>

        {/* Bottom: Playback Controls (Glass Bar) */}
        <footer className="glass-panel-replay shrink-0 rounded-2xl h-24 flex items-center px-4 md:px-8 gap-6 z-20 w-full mb-2">
            {/* Play Button Group */}
            <div className="flex items-center gap-4">
                <button className="text-slate-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">skip_previous</span>
                </button>
                <button className="h-12 w-12 rounded-full bg-white text-[#0B1020] flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                </button>
                <button className="text-slate-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">skip_next</span>
                </button>
            </div>
            
            {/* Timeline */}
            <div className="flex-1 flex flex-col justify-center gap-2">
                <div className="flex justify-between text-xs font-mono text-slate-500 px-1">
                    <span>14:30:00</span>
                    <span className="text-primary font-bold">14:30:15 (INCIDENT)</span>
                    <span>14:35:00</span>
                </div>
                <div className="relative h-8 flex items-center group cursor-pointer">
                    {/* Track */}
                    <div className="absolute w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        {/* Progress */}
                        <div className="h-full w-[35%] bg-gradient-to-r from-primary/50 to-primary rounded-full relative">
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/20 to-transparent"></div>
                        </div>
                        {/* Markers */}
                        <div className="absolute left-[35%] top-0 h-full w-0.5 bg-white z-10"></div> {/* Current Time */}
                        <div className="absolute left-[15%] top-0 h-full w-0.5 bg-red-500/50 z-0"></div> {/* Marker 1 */}
                    </div>
                    {/* Thumb (Hidden until hover/active conceptually, but visible here for design) */}
                    <div className="absolute left-[35%] w-4 h-4 bg-white rounded-full border-2 border-primary -translate-x-1/2 cursor-grab active:cursor-grabbing hover:scale-125 transition-transform z-20"></div>
                    {/* Event Tag on Timeline */}
                    <div className="absolute left-[15%] -top-1 -translate-x-1/2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute"></div>
                        <div className="w-2 h-2 bg-red-500 rounded-full relative z-10"></div>
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-[10px] whitespace-nowrap border border-white/10">Signal Loss</div>
                    </div>
                </div>
            </div>

            {/* Playback Speed */}
            <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-10">
                <div className="flex items-center bg-black/20 rounded-lg p-1 border border-white/5">
                    <button className="px-2 py-1 rounded text-[10px] font-bold text-slate-400 hover:text-white hover:bg-white/10 transition">1x</button>
                    <button className="px-2 py-1 rounded text-[10px] font-bold bg-primary text-[#0B1020] shadow-sm">2x</button>
                    <button className="px-2 py-1 rounded text-[10px] font-bold text-slate-400 hover:text-white hover:bg-white/10 transition">4x</button>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                    <span className="material-symbols-outlined text-sm">volume_up</span>
                    <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[70%] h-full bg-white/60 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>

      </div>
    </div>
  );
};