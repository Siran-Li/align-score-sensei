
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const IntroductionSection = () => {
  return (
    <section className="mb-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white p-3 rounded-lg shadow-md mr-4">
              <img 
                src="/lovable-uploads/32b8a728-dce6-4646-9f13-5f0e59cda0ae.png" 
                alt="TextMatchScore Logo" 
                className="h-20"
              />
            </div>
            <h2 className="text-3xl font-serif font-bold text-blue-800">
              TextMatchScore
            </h2>
          </div>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700 mb-4 text-lg">
              Welcome to <strong>TextMatchScore</strong>, a platform designed to evaluate and improve the alignment between 
              two sentences through human feedback.
            </p>
            <p className="text-gray-700 mb-6">
              This tool helps researchers and developers assess how well sentences align with each other, 
              providing valuable insights for linguistic model improvement and evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
