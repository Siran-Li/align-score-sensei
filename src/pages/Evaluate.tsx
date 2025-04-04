
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Evaluate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="outline" size="sm">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Introduction
            </Link>
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-serif font-bold text-blue-800 mb-6">
            Sentence Alignment Evaluation
          </h1>
          
          <p className="text-gray-700 mb-12 text-center">
            Evaluation interface coming soon. This is where users will compare sentences and provide ratings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Evaluate;
