import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'A', value: 40 },
  { name: 'B', value: 60 },
  { name: 'C', value: 80 },
  { name: 'D', value: 100 },
  { name: 'E', value: 70 },
  { name: 'F', value: 50 },
  { name: 'G', value: 90 },
  { name: 'H', value: 65 },
];

export const PassengerFlowChart: React.FC = () => {
  return (
    <div className="flex-1 glass-card-clean !bg-white/[0.01] p-4 flex flex-col border-white/5 min-h-[160px]">
      <span className="text-[10px] font-bold text-primary/70 mb-2 border-l-2 border-primary pl-2 uppercase">
        Live Passenger Flow
      </span>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-end mb-2">
          <div className="text-xs text-white/40 font-medium">Real-time Density</div>
          <div className="text-xl font-bold text-primary font-mono">
            1,138 <span className="text-[10px] text-white/40 font-sans font-normal">p/m²</span>
          </div>
        </div>
        <div className="h-24 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barCategoryGap={2}>
                    <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                        {data.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                fill={index === 3 ? 'rgba(0, 242, 255, 0.8)' : 'rgba(0, 242, 255, 0.2)'}
                                stroke="none"
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};