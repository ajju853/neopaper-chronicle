
import React from 'react';
import { Separator } from '@/components/ui/separator';
import DataArticle from './DataArticle';

const DataInsights: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div>
        <DataArticle 
          title="Market Trends Show Unexpected Patterns" 
          dateline="FINANCIAL DISTRICT"
          author="Algorithm X-27"
        >
          The latest market analysis reveals a significant shift in consumer behavior across all regions. 
          Data from the last quarter indicates a 32% increase in digital product adoption, particularly 
          in demographics previously resistant to technological change. This trend appears to correlate 
          with the company's latest marketing campaign which emphasized accessibility and ease-of-use.
          <br /><br />
          Statistical models suggest this isn't merely a seasonal fluctuation, but rather the beginning 
          of a sustained market evolution that could reshape industry expectations for years to come.
        </DataArticle>
        
        <Separator className="my-6" />
        
        <DataArticle 
          title="Revenue Forecast Exceeds Analyst Predictions" 
          dateline="CORPORATE HEADQUARTERS"
          author="Financial Neural Net"
        >
          Quarterly earnings have exceeded industry forecasts by 18.7%, marking the third consecutive 
          quarter of above-expectation performance. Advanced predictive algorithms indicate a 92% probability 
          of this trend continuing through the next fiscal year.
          <br /><br />
          The unexpected growth appears primarily driven by the new product line launched in February, 
          which has captured market share at twice the projected rate. Customer satisfaction metrics for 
          these products show a net promoter score of 76, well above industry averages.
        </DataArticle>
      </div>
      
      <div className="border-l border-paper-dark/30 pl-8">
        <div className="bg-paper-dark/10 p-6 mb-6 rounded-sm">
          <h3 className="text-xl font-bold mb-4">Key Performance Indicators</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-serif">Customer Acquisition</span>
                <span className="font-serif font-bold text-highlight-purple">↑ 23%</span>
              </div>
              <div className="w-full h-2 bg-paper-dark/20 rounded-full overflow-hidden">
                <div className="h-full bg-highlight-purple rounded-full" style={{ width: '73%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-serif">Retention Rate</span>
                <span className="font-serif font-bold text-highlight-blue">↑ 8%</span>
              </div>
              <div className="w-full h-2 bg-paper-dark/20 rounded-full overflow-hidden">
                <div className="h-full bg-highlight-blue rounded-full" style={{ width: '89%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-serif">Profit Margin</span>
                <span className="font-serif font-bold text-highlight-red">↑ 12%</span>
              </div>
              <div className="w-full h-2 bg-paper-dark/20 rounded-full overflow-hidden">
                <div className="h-full bg-highlight-red rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold italic border-b border-paper-dark/30 pb-1 mb-4">Executive Analysis</h3>
          <blockquote className="pl-4 border-l-2 border-ink italic mb-4">
            "The data clearly indicates we've reached an inflection point in market perception. Our strategic 
            investments in digital transformation have yielded returns beyond our most optimistic projections."
          </blockquote>
          <p className="text-right text-sm">— Chief Analytics Officer</p>
        </div>
        
        <DataArticle 
          title="Regional Performance Breakdown" 
          dateline="MARKET ANALYSIS DIVISION"
          author="Regional Insight Algorithm"
        >
          The eastern territory continues to outperform all other regions with a 28% year-over-year growth rate. 
          This can be attributed to the strategic partnerships formed in the last 18 months and the successful 
          rollout of the customized regional marketing campaign.
          <br /><br />
          Western territories showed moderate growth at 12%, while northern regions remained stable. The southern 
          territory requires additional attention, as growth has slowed to just 5%, below the company-wide target of 10%.
        </DataArticle>
      </div>
    </div>
  );
};

export default DataInsights;
