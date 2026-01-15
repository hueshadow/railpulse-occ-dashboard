import React from 'react';

export const RoleMatrixSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 md:px-12 lg:px-16 lg:py-24">
      <div className="max-w-[1920px] w-full flex flex-col gap-12">
        <section className="flex flex-col gap-6 items-start max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 pl-2 pr-4 py-1.5 self-start">
            <span className="material-symbols-outlined text-primary text-[20px] icon-glow">lightbulb</span>
            <p className="text-primary text-sm font-medium leading-normal">洞察：为高压力、多角色协作环境而设计。</p>
          </div>
          <h1 className="text-white tracking-tight text-5xl md:text-6xl font-extrabold leading-tight">
            01 背景与角色矩阵
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-2">
            梳理运营指挥中心（OCC）生态系统中的关键决策路径。
          </p>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch min-h-[500px]">
          {/* Matrix Table */}
          <div className="glass-panel-dark rounded-2xl overflow-hidden flex flex-col group">
            <div className="p-6 frosted-header flex items-center justify-between">
              <h3 className="text-xl font-bold text-white tracking-wide text-glow">利益相关者责任矩阵</h3>
              <span className="material-symbols-outlined text-primary icon-glow opacity-80 group-hover:opacity-100 transition-opacity">table_chart</span>
            </div>
            <div className="flex-1 overflow-x-auto glass-scroll">
              <div className="min-w-[600px] w-full">
                <div className="grid grid-cols-12 gap-4 px-8 py-4 border-b border-white/5 bg-black/20 text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">
                  <div className="col-span-3">角色</div>
                  <div className="col-span-4">主要目标</div>
                  <div className="col-span-5">关键决策</div>
                </div>
                
                {/* Row 1 */}
                <div className="grid grid-cols-12 gap-4 px-8 py-6 matrix-row items-center cursor-default">
                  <div className="col-span-3 font-bold text-white flex items-center gap-3 role-text transition-all duration-300">
                    <div className="size-2 rounded-full bg-primary"></div>
                    OCC 值班主任
                  </div>
                  <div className="col-span-4 text-sm text-slate-300">全网稳定性</div>
                  <div className="col-span-5 text-sm font-semibold text-primary">启动应急模式</div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-12 gap-4 px-8 py-6 matrix-row items-center cursor-default">
                  <div className="col-span-3 font-bold text-white flex items-center gap-3 role-text transition-all duration-300">
                    <div className="size-2 rounded-full bg-accent-blue"></div>
                    调度员
                  </div>
                  <div className="col-span-4 text-sm text-slate-300">发车间隔控制</div>
                  <div className="col-span-5 text-sm font-semibold text-primary">列车扣车与跳站</div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-12 gap-4 px-8 py-6 matrix-row items-center cursor-default">
                  <div className="col-span-3 font-bold text-white flex items-center gap-3 role-text transition-all duration-300">
                    <div className="size-2 rounded-full bg-primary/60"></div>
                    站务经理
                  </div>
                  <div className="col-span-4 text-sm text-slate-300">客流安全</div>
                  <div className="col-span-5 text-sm font-semibold text-primary">车站疏散决策</div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-12 gap-4 px-8 py-6 matrix-row items-center cursor-default">
                  <div className="col-span-3 font-bold text-white flex items-center gap-3 role-text transition-all duration-300">
                    <div className="size-2 rounded-full bg-accent-blue/60"></div>
                    维保人员
                  </div>
                  <div className="col-span-4 text-sm text-slate-300">资产健康度</div>
                  <div className="col-span-5 text-sm font-semibold text-primary">维修优先级排序</div>
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-12 gap-4 px-8 py-6 matrix-row items-center cursor-default border-none">
                  <div className="col-span-3 font-bold text-white flex items-center gap-3 role-text transition-all duration-300">
                    <div className="size-2 rounded-full bg-white/40"></div>
                    决策层
                  </div>
                  <div className="col-span-4 text-sm text-slate-300">运营效率指标</div>
                  <div className="col-span-5 text-sm font-semibold text-primary">长期规划决策</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Card */}
          <div className="glass-panel-dark rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden group min-h-[400px]">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05)_0%,transparent_60%)] animate-pulse duration-[4000ms]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-dashed border-primary/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] border border-primary/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full animate-[spin_10s_linear_infinite]">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 bg-primary rounded-full"></div>
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-md">
              <div className="size-28 rounded-3xl bg-gradient-to-br from-primary/10 to-accent-blue/10 border border-primary/30 flex items-center justify-center group-hover:scale-105 transition-all duration-500 backdrop-blur-sm">
                <span className="material-symbols-outlined text-6xl text-primary">account_tree</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white text-glow">基于角色的工作空间视图</h3>
                <p className="text-text-secondary text-sm leading-relaxed">可视化不同组织层级之间的信息流与平台交互。</p>
              </div>
              <button className="px-8 py-3 rounded-xl border border-primary/40 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 hover:border-primary transition-all flex items-center gap-2 tracking-widest uppercase backdrop-blur-md">
                <span className="material-symbols-outlined text-lg">zoom_in</span>
                展开图表
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Cards */}
        <section className="flex flex-col gap-8 pt-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary text-xl icon-glow">compare_arrows</span>
              <h3 className="text-lg font-bold text-white tracking-widest uppercase">同源数据，异构洞察</h3>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel-dark p-6 rounded-xl flex gap-5 hover:-translate-y-1 transition-all duration-300 group">
              <div className="size-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined font-bold">strategy</span>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 text-lg group-hover:text-primary transition-colors">战术稳定性</h4>
                <p className="text-text-secondary text-sm leading-relaxed">值班主任优先关注全网稳定性，而非单列车的延误。</p>
              </div>
            </div>
            
            <div className="glass-panel-dark p-6 rounded-xl flex gap-5 hover:-translate-y-1 transition-all duration-300 group">
              <div className="size-12 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                <span className="material-symbols-outlined font-bold">bolt</span>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 text-lg group-hover:text-accent-blue transition-colors">战术精准度</h4>
                <p className="text-text-secondary text-sm leading-relaxed">调度员专注于行车调度中秒级精度的战术执行。</p>
              </div>
            </div>
            
            <div className="glass-panel-dark p-6 rounded-xl flex gap-5 hover:-translate-y-1 transition-all duration-300 group">
              <div className="size-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined font-bold">analytics</span>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 text-lg group-hover:text-primary transition-colors">诊断深度</h4>
                <p className="text-text-secondary text-sm leading-relaxed">维保人员需要深度的技术诊断，而非仅关注运营速度。</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};