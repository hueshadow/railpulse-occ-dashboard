import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { name: '00:00', value: 20 },
  { name: '04:00', value: 45 },
  { name: '08:00', value: 30 },
  { name: '12:00', value: 70 },
  { name: '16:00', value: 50 },
  { name: '20:00', value: 85 },
  { name: '24:00', value: 40 },
];

export const LiveTrendsChart: React.FC = () => {
  return (
    <div className="flex-1 glass-card-clean !bg-white/[0.01] p-4 flex flex-col border-white/5 min-h-[140px]">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-bold text-primary/70 border-l-2 border-primary pl-2 uppercase">
          Live Trends
        </span>
      </div>
      <div className="flex-1 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00F2FF" 
                    strokeWidth={2} 
                    dot={false}
                    strokeOpacity={0.8}
                />
            </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};