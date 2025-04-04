
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MethodologyCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <Card className="h-full">
    <CardHeader className="pb-2">
      <div className="flex items-center mb-2">
        <div className="bg-blue-100 text-blue-800 font-bold w-8 h-8 rounded-full flex items-center justify-center mr-3">
          {number}
        </div>
        <CardTitle className="text-xl font-serif">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-700 text-base">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const MethodologySection = () => {
  return (
    <section className="py-8 bg-gray-50 rounded-lg mb-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center text-blue-800 mb-8">Evaluation Methodology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MethodologyCard 
              number="1"
              title="Compare Alignment"
              description="Analyze the semantic and contextual alignment between the reference sentence and the generated sentence, considering factors like meaning preservation, factual accuracy, and stylistic consistency."
            />
            
            <MethodologyCard 
              number="2"
              title="Rank Model Scores"
              description="Evaluate three model-generated scores (0-1) based on how accurately they reflect the actual alignment between the sentences, helping identify which automated metrics are most reliable."
            />
            
            <MethodologyCard 
              number="3"
              title="Assign Your Score"
              description="Provide your own human judgment score (0-5) based on how well the generated sentence aligns with the reference, offering valuable ground truth for model training and evaluation."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
