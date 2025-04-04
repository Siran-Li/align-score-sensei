
import React from 'react';
import Header from '../components/Header';
import IntroductionSection from '../components/IntroductionSection';
import MethodologySection from '../components/MethodologySection';
import BenefitsSection from '../components/BenefitsSection';
import GetStartedSection from '../components/GetStartedSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <IntroductionSection />
        <MethodologySection />
        <BenefitsSection />
        <GetStartedSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
