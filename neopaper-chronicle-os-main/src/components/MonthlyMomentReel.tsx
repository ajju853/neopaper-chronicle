
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import AnimatedLineChart from '@/components/charts/LineChart';
import AnimatedBarChart from '@/components/charts/BarChart';
import AnimatedDonutChart from '@/components/charts/DonutChart';

const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

const headlines = [
  "Record Growth Reported in Q1",
  "New Product Line Exceeds Expectations",
  "Market Expansion Drives Revenue Surge",
  "Cost-Cutting Measures Show Results",
  "Strategic Partnership Boosts Sales",
  "Innovation Award Puts Company in Spotlight",
  "Analyst Predictions Exceeded by 15%",
  "Regional Performance Varies Widely",
  "Subscription Model Proves Lucrative",
  "Yearly Projections Adjusted Upward",
  "Holiday Season Creates Sharp Uptick",
  "Annual Report Shows Historic Performance"
];

const MonthlyMomentReel: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState('January');
  const [animate, setAnimate] = useState(false);

  const handleMonthChange = (value: string) => {
    setActiveMonth(value);
    setAnimate(true);
    
    // Reset animation after charts have updated
    setTimeout(() => {
      setAnimate(false);
    }, 2500);
  };

  return (
    <div className="bg-paper rounded-sm shadow-md p-4 mb-8">
      <h2 className="newspaper-subheading mb-4 text-center">Monthly Edition Timeline</h2>
      
      <Tabs defaultValue="January" onValueChange={handleMonthChange}>
        <TabsList className="flex flex-wrap justify-center mb-6 bg-paper-dark/20">
          {months.map((month) => (
            <TabsTrigger 
              key={month} 
              value={month}
              className={`data-[state=active]:bg-paper-dark data-[state=active]:text-ink-dark data-[state=active]:shadow-sm
                py-2 px-4 font-serif transition-all`}
            >
              {month}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {months.map((month, index) => (
          <TabsContent 
            key={month} 
            value={month} 
            className="animate-fade-in mt-2"
          >
            <div className="text-center mb-6">
              <h3 className="newspaper-heading">{month} Edition</h3>
              <p className="newspaper-subheading font-normal mt-2">{headlines[index]}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <AnimatedLineChart animate={animate} />
              <AnimatedBarChart animate={animate} />
            </div>
            
            <div className="max-w-md mx-auto mt-8">
              <AnimatedDonutChart animate={animate} />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MonthlyMomentReel;
