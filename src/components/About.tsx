
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
            {t('about_title')}
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('about_description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=7372&q=80"
              alt="Sacred Mountain"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-orange-800">{t('about_mission_title')}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about_mission_p1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about_mission_p2')}
            </p>
            <div className="bg-orange-100 p-6 rounded-xl border-l-4 border-orange-600">
              <p className="text-orange-800 font-semibold text-lg">
                {t('about_quote_sanskrit')}
              </p>
              <p className="text-gray-700 mt-2">
                {t('about_quote')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="text-xl font-bold text-orange-800 mb-3">{t('about_architecture')}</h4>
              <p className="text-gray-600">
                {t('about_architecture_desc')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h4 className="text-xl font-bold text-orange-800 mb-3">{t('about_worship')}</h4>
              <p className="text-gray-600">
                {t('about_worship_desc')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-orange-800 mb-3">{t('about_service')}</h4>
              <p className="text-gray-600">
                {t('about_service_desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
