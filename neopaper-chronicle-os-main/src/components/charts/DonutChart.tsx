
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Sample data - would be replaced with real data in production
const generateData = () => [
  { name: 'North Region', value: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'South Region', value: Math.floor(Math.random() * 4000) + 1500 },
  { name: 'East Region', value: Math.floor(Math.random() * 3500) + 1000 },
  { name: 'West Region', value: Math.floor(Math.random() * 4500) + 2500 }
];

interface AnimatedDonutChartProps {
  animate?: boolean;
  height?: number;
}

const COLORS = ['#8B5CF6', '#1EAEDB', '#D13B40', '#10B981'];

const AnimatedDonutChart: React.FC<AnimatedDonutChartProps> = ({ 
  animate = true,
  height = 300 
}) => {
  const [data, setData] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const chartData = generateData();
    setData([]);
    
    if (animate) {
      const timer = setTimeout(() => {
        setData(chartData);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      setData(chartData);
    }
  }, [animate]);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="chart-container bg-paper-light p-4 rounded-sm shadow-md">
      <h3 className="text-lg font-serif mb-3 text-center">Regional Sales Distribution</h3>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart className="chart-paper">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            animationDuration={2000}
            animationBegin={300}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
                stroke="#F1EFE2"
                strokeWidth={activeIndex === index ? 2 : 1}
                className={activeIndex === index ? "drop-shadow-lg" : ""}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ 
              backgroundColor: '#F1EFE2', 
              borderColor: '#D3D3D3',
              fontFamily: 'serif'
            }}
            formatter={(value: any) => [`$${value.toLocaleString()}`, undefined]}
          />
          <Legend wrapperStyle={{ fontFamily: 'serif' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnimatedDonutChart;
