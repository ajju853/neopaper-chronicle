
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data - would be replaced with real data in production
const generateData = () => {
  const categories = ['Products', 'Services', 'Subscriptions', 'Licenses', 'Support'];
  return categories.map((category) => ({
    name: category,
    current: Math.floor(Math.random() * 5000) + 2000,
    previous: Math.floor(Math.random() * 5000) + 1500,
  }));
};

interface AnimatedBarChartProps {
  animate?: boolean;
  height?: number;
}

const AnimatedBarChart: React.FC<AnimatedBarChartProps> = ({ 
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
        }, 400);
        
        return () => clearInterval(interval);
      }, 800);
      
      return () => clearTimeout(timer);
    } else {
      setVisibleData(chartData);
    }
  }, [animate]);

  return (
    <div className="chart-container bg-paper-light p-4 rounded-sm shadow-md">
      <h3 className="text-lg font-serif mb-3 text-center">Revenue by Category</h3>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
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
          <Bar 
            dataKey="current" 
            name="Current Year" 
            fill="#8B5CF6" 
            animationDuration={2000}
          />
          <Bar 
            dataKey="previous" 
            name="Previous Year" 
            fill="#1EAEDB" 
            animationDuration={2000}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnimatedBarChart;
