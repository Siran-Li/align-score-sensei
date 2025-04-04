
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
  testId: z.string().min(1, { message: "Test ID is required" }),
  evaluatorName: z.string().min(1, { message: "Evaluator name is required" })
});

type FormValues = z.infer<typeof formSchema>;

const Index = () => {
  const navigate = useNavigate();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      testId: "",
      evaluatorName: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    // We would typically store this in a context or state manager
    // For now, let's use sessionStorage
    sessionStorage.setItem('testId', data.testId);
    sessionStorage.setItem('evaluatorName', data.evaluatorName);
    navigate('/evaluate');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="py-6 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center">
          <img 
            src="/lovable-uploads/32b8a728-dce6-4646-9f13-5f0e59cda0ae.png" 
            alt="TextMatchScore Logo" 
            className="h-12 mr-3"
          />
          <h1 className="text-2xl font-serif font-bold text-blue-800">
            TextMatchScore
          </h1>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-blue-800">Sentence Alignment Evaluation</CardTitle>
            <CardDescription>
              Evaluate alignment between two sentences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="testId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Test ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter test ID" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="evaluatorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-2">
                  Start Evaluation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
      
      <footer className="py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} TextMatchScore. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
