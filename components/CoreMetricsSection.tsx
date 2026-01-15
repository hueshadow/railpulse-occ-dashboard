import React from 'react';

export const CoreMetricsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 md:px-12 lg:px-16">
      <div className="max-w-[1920px] w-full flex flex-col gap-8">
        
        {/* Header */}
        <section className="flex flex-col gap-4 items-start w-full">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start">
            <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
            <p className="text-primary text-sm font-medium leading-normal">洞察：将抽象的安全标准转化为可操作的实时指标。</p>
          </div>
          <h1 className="text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight">
            02 设定目标与核心指标
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-2">
            平衡安全、效率与乘客体验的数字化衡量标准。
          </p>
        </section>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full flex-1 min-h-0">
          
          {/* Left Column: Goals */}
          <div className="lg:col-span-3 flex flex-col gap-4 h-full">
            {[
              {
                icon: 'gpp_good',
                title: '安全第一',
                desc: '零事故运营，通过毫秒级监测实现实时风险预警与资产保护。'
              },
              {
                icon: 'traffic',
                title: '运行有序',
                desc: '基于精准行车调度的数字化管理，最大程度降低全线晚点率。'
              },
              {
                icon: 'sentiment_satisfied_alt',
                title: '服务卓越',
                desc: '动态优化客流引导，利用 AI 分析提升全时段乘车舒适度。'
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel-interactive p-6 rounded-xl flex flex-col justify-center gap-4 transition-all group relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-lg bg-surface-dark flex flex-shrink-0 items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors glow-cyan">
                    <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Middle Column: Key Metrics Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            
            {/* Metric 1: On-time Rate */}
            <div className="glass-panel-dark rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group min-h-[220px]">
              <div className="flex items-center justify-between relative z-10">
                <span className="text-text-secondary font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-primary">schedule</span>
                  正点率
                </span>
              </div>
              <div className="relative z-10 mt-4">
                <div className="text-5xl xl:text-6xl font-bold text-white tracking-tight">99.85<span className="text-2xl text-primary ml-1">%</span></div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full gradient-cyan-blue w-[99.85%]"></div>
                  </div>
                  <span className="text-primary text-[10px] font-mono font-bold uppercase tracking-widest">Target &gt;99.8%</span>
                </div>
              </div>
            </div>

            {/* Metric 2: Departure Interval */}
            <div className="glass-panel-dark rounded-xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
              <div className="flex items-center justify-between relative z-10">
                <span className="text-text-secondary font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-primary">timer</span>
                  平均发车间隔
                </span>
              </div>
              <div className="relative z-10 mt-4">
                <div className="text-5xl xl:text-6xl font-bold text-white tracking-tight">115<span className="text-2xl text-primary font-normal ml-1">秒</span></div>
                <div className="text-text-secondary text-xs mt-2 uppercase tracking-tighter font-bold">Peak Hours 早晚高峰</div>
              </div>
            </div>

            {/* Metric 3: P1 Accidents */}
            <div className="glass-panel-dark rounded-xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
              <div className="flex items-center justify-between relative z-10">
                <span className="text-text-secondary font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-primary">warning_amber</span>
                  P1 级重大事故
                </span>
              </div>
              <div className="relative z-10 mt-4">
                <div className="text-5xl xl:text-6xl font-bold text-gradient-cyan tracking-tight">0</div>
                <div className="text-text-secondary text-xs mt-2 font-bold">Annual Cumulative 本年度累计</div>
              </div>
            </div>

            {/* Metric 4: Crowding Index */}
            <div className="glass-panel-dark rounded-xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
              <div className="flex items-center justify-between relative z-10">
                <span className="text-text-secondary font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-primary">groups</span>
                  客流拥挤指数
                </span>
                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              </div>
              <div className="relative z-10 mt-4">
                <div className="text-5xl xl:text-6xl font-bold text-white tracking-tight">104.2</div>
                <div className="text-primary text-[10px] font-mono mt-2 px-2 py-0.5 rounded bg-primary/10 inline-block border border-primary/20 font-bold uppercase">Attention Required 偏高需关注</div>
              </div>
            </div>
          </div>

          {/* Right Column: Trends & Standards */}
          <div className="lg:col-span-3 glass-panel-dark rounded-xl p-8 flex flex-col gap-8 h-full">
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-white font-bold text-sm tracking-wide">24小时运营趋势预览</h4>
                <span className="material-symbols-outlined text-primary text-xl">insights</span>
              </div>
              <div className="h-full min-h-[150px] flex items-end justify-between gap-1.5 px-1 border-b border-primary/10 pb-1">
                {[20, 40, 85, 60, 45, 70, 95, 55, 30, 15].map((height, i) => (
                   <div 
                    key={i}
                    className={`w-full gradient-cyan-blue rounded-t-sm transition-all hover:opacity-100 ${height === 95 ? 'opacity-80' : height === 85 ? 'opacity-60' : 'opacity-30'}`}
                    style={{ height: `${height}%` }}
                   ></div>
                ))}
              </div>
            </div>
            
            <div className="w-full h-px bg-white/5"></div>
            
            <div className="flex flex-col gap-5">
              <h4 className="text-white font-bold text-sm tracking-wide">“优秀”的衡量标准</h4>
              <div className="flex flex-col gap-4">
                {[
                  '实时数据同步延迟 < 500ms',
                  '关键应急响应一键直达',
                  '智能算法辅助决策推荐'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-text-secondary group font-medium">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                    <span className="group-hover:text-white transition-colors">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};