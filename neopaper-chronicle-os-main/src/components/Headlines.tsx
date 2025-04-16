
import React from 'react';
import { Separator } from '@/components/ui/separator';

// Sample headlines - would be generated from data in production
const mainHeadline = "ANNUAL REVENUE SURPASSES EXPECTATIONS";
const subHeadlines = [
  "Tech Division Reports 23% Growth in Q4",
  "New Markets Open in Eastern Region",
  "Product Innovation Drives Customer Acquisition"
];

const headlines = [
  {
    title: "Subscription Services See Record Adoption",
    excerpt: "The company's strategic shift towards subscription-based services has yielded unprecedented results, with year-over-year growth exceeding 40% in this segment.",
  },
  {
    title: "Cost-Cutting Measures Boost Profit Margins",
    excerpt: "Through targeted operational improvements and strategic restructuring, the company has managed to increase profit margins by 12 percentage points.",
  },
  {
    title: "Executive Board Projects Strong Q1 2026",
    excerpt: "In a statement released yesterday, the executive board expressed confidence in continued growth, citing expanding markets and innovative product development roadmaps.",
  }
];

const Headlines: React.FC = () => {
  return (
    <div className="mb-8">
      <h1 className="newspaper-heading text-center mb-6">{mainHeadline}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {subHeadlines.map((headline, index) => (
          <div key={index} className="text-center">
            <h3 className="newspaper-subheading">{headline}</h3>
          </div>
        ))}
      </div>
      
      <Separator className="mb-8 mt-4" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {headlines.map((article, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <p className="drop-cap">{article.excerpt}</p>
            <button className="mt-2 text-sm font-serif italic underline">Continue reading...</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headlines;
