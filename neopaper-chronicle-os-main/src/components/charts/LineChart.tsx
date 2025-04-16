
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data - would be replaced with real data in production
const generateData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map((month, index) => ({
    name: month,
    revenue: Math.floor(Math.random() * 5000) + 2000,
    expenses: Math.floor(Math.random() * 3000) + 1000,
    profit: Math.floor(Math.random() * 2000) + 500,
  }));
};

interface AnimatedLineChartProps {
  animate?: boolean;
  height?: number;
}

const AnimatedLineChart: React.FC<AnimatedLineChartProps> = ({ 
  animate = true,
  height = 300 
}) => {
  const [data, setData] = useState<any[]>([]);
  const [visibleData, setVisibleData] = useState<any[]>([]);

  useEffect(() => {
    const chartData = generateData();
    setData(chartData);
    
    if (animate) {
      setVisibleData([]);
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setVisibleData(prev => {
            if (prev.length >= chartData.length) {
              clearInterval(interval);
              return prev;
            }
            return [...prev, chartData[prev.length]];
          });
        }, 300);
        
        return () => clearInterval(interval);
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      setVisibleData(chartData);
    }
  }, [animate]);

  return (
    <div className="chart-container bg-paper-light p-4 rounded-sm shadow-md">
      <h3 className="text-lg font-serif mb-3 text-center">Annual Performance Metrics</h3>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={animate ? visibleData : data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          className="chart-paper"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#D3D3D3" />
          <XAxis 
            dataKey="name" 
            stroke="#333"
            tick={{ fontFamily: 'serif' }}
          />
          <YAxis 
            stroke="#333"
            tick={{ fontFamily: 'serif' }}
          />
          <Tooltip
            contentStyle={{ 
              backgroundColor: '#F1EFE2', 
              borderColor: '#D3D3D3',
              fontFamily: 'serif'
            }}
          />
          <Legend wrapperStyle={{ fontFamily: 'serif' }} />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#8B5CF6" 
            strokeWidth={2.5}
            activeDot={{ r: 8 }}
            animationDuration={2000}
          />
          <Line 
            type="monotone" 
            dataKey="expenses" 
            stroke="#D13B40" 
            strokeWidth={2}
            animationDuration={2000}
          />
          <Line 
            type="monotone" 
            dataKey="profit" 
            stroke="#1EAEDB" 
            strokeWidth={2.5}
            animationDuration={2000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnimatedLineChart;
