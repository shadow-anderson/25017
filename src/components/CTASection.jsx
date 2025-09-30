import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = ({ 
  title = "Join the Alumni Network Today", 
  description = "Take the first step towards reconnecting with your university community and unlocking new opportunities.",
  buttonText = "Get Started Now",
  onButtonClick,
  className = ""
}) => {
  return (
    <section className={`py-20 bg-gradient-to-r from-blue-600 to-purple-700 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Button 
          size="lg" 
          className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
          onClick={onButtonClick}
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;