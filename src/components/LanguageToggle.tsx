
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border-orange-300 text-orange-700 hover:bg-orange-50 shadow-lg font-semibold"
    >
      {language === 'en' ? (
        <span className="flex items-center gap-2">
          🇮🇳 हिन्दी
        </span>
      ) : (
        <span className="flex items-center gap-2">
          🇬🇧 English
        </span>
      )}
    </Button>
  );
};

export default LanguageToggle;
