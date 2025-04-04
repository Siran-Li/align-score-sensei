
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const IntroductionSection = () => {
  return (
    <section className="mb-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-blue-800 mb-6">
            Sentence Alignment Evaluation
          </h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700 mb-4 text-lg">
              Welcome to <strong>AlignScore Sensei</strong>, a platform designed to evaluate and improve the alignment between 
              reference and generated sentences through human feedback.
            </p>
            <p className="text-gray-700 mb-6">
              This tool helps researchers and developers assess how well language models generate text that aligns 
              with reference content, providing valuable insights for model improvement and evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
