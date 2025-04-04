
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BenefitItem = ({ title, description }: { title: string; description: string }) => (
  <div className="flex mb-6">
    <div className="mr-4 pt-1">
      <CheckCircle2 className="h-6 w-6 text-blue-600" />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const BenefitsSection = () => {
  return (
    <section className="mb-16 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-blue-800 mb-8 text-center">
            Why Evaluate Sentence Alignment?
          </h2>
          
          <div className="space-y-2">
            <BenefitItem 
              title="Improve Model Performance"
              description="By evaluating sentence alignment, you help create better language models that more accurately capture and preserve meaning."
            />
            
            <BenefitItem 
              title="Enhance Automated Metrics"
              description="Your rankings of model scores help researchers develop better automated evaluation metrics that correlate with human judgment."
            />
            
            <BenefitItem 
              title="Establish Reliable Benchmarks"
              description="Your evaluations contribute to establishing reliable benchmarks for assessing the quality of language generation systems."
            />
            
            <BenefitItem 
              title="Advance NLP Research"
              description="Human feedback on sentence alignment is crucial for advancing research in natural language processing and generation."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
