
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Evaluate = () => {
  const [testId, setTestId] = useState<string | null>(null);
  const [evaluatorName, setEvaluatorName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the test ID and evaluator name from session storage
    const storedTestId = sessionStorage.getItem('testId');
    const storedEvaluatorName = sessionStorage.getItem('evaluatorName');

    // If either is missing, redirect back to the index page
    if (!storedTestId || !storedEvaluatorName) {
      navigate('/');
      return;
    }

    setTestId(storedTestId);
    setEvaluatorName(storedEvaluatorName);
  }, [navigate]);

  if (!testId || !evaluatorName) {
    return null; // Will redirect via the useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Button asChild variant="outline" size="sm">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Link>
          </Button>
          <div className="text-sm text-gray-600">
            Test ID: <span className="font-medium">{testId}</span> | 
            Evaluator: <span className="font-medium">{evaluatorName}</span>
          </div>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-blue-800">
              Sentence Alignment Evaluation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Compare the alignment between reference and generated sentences. Rank model scores and assign your own alignment score.
            </p>
            
            {/* Evaluation interface to be implemented */}
            <div className="text-center py-8 text-gray-500">
              Evaluation interface coming soon. This is where users will compare sentences, rank model scores, and provide ratings.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Evaluate;
