
import React from 'react';
import { Button } from '@/components/ui/button';
import { Scroll, Heart, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <LanguageToggle />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2834&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-orange-100 drop-shadow-2xl">
            🕉️ {t('hero_title')}
          </h1>
          <div className="text-2xl md:text-3xl mb-6 text-orange-200 font-semibold">
            {t('hero_title_hindi')}
          </div>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto leading-relaxed">
            {t('hero_subtitle')}
          </p>
          <p className="text-lg md:text-xl text-orange-200 max-w-2xl mx-auto mb-12">
            {t('hero_description')}
          </p>
        </div>
        
        {/* Enhanced Action Buttons */}
        <div className="flex flex-col items-center space-y-6 mb-8">
          {/* Primary Donate Button - Most Prominent */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-4 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-300"
            onClick={() => scrollToSection('donations')}
          >
            <Heart className="mr-3 h-6 w-6" />
            {t('hero_donate')}
          </Button>
          
          {/* Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold shadow-2xl transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t('hero_contact')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold shadow-2xl transition-all duration-300"
              onClick={() => scrollToSection('about')}
            >
              <Scroll className="mr-2 h-5 w-5" />
              {t('hero_learn')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
