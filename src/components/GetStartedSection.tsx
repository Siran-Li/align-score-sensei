
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStartedSection = () => {
  return (
    <section className="bg-blue-50 py-12 rounded-lg animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold text-blue-800 mb-4">
            Ready to Start Evaluating?
          </h2>
          <p className="text-gray-700 mb-6">
            Begin by comparing reference and generated sentences, ranking model scores, and providing your own alignment assessment.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/evaluate" className="flex items-center justify-center">
              Start Evaluation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
