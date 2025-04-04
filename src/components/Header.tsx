
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-6 border-b border-gray-200 mb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/32b8a728-dce6-4646-9f13-5f0e59cda0ae.png" 
              alt="TextMatchScore Logo" 
              className="h-12 mr-3"
            />
            <h1 className="text-2xl font-serif font-bold text-blue-800">
              TextMatchScore
            </h1>
          </div>
          <div className="flex space-x-4">
            <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/evaluate" className="flex items-center">
                Start Evaluation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
