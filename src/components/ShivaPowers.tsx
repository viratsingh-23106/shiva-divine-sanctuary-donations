
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ShivaPowers = () => {
  const { t } = useLanguage();

  const powers = [
    {
      title: t('power_nataraja'),
      description: t('power_nataraja_desc'),
      icon: "💃",
      sanskrit: "नटराज"
    },
    {
      title: t('power_mahadev'),
      description: t('power_mahadev_desc'),
      icon: "🔱",
      sanskrit: "महादेव"
    },
    {
      title: t('power_rudra'),
      description: t('power_rudra_desc'),
      icon: "⚡",
      sanskrit: "रुद्र"
    },
    {
      title: t('power_yogeshwar'),
      description: t('power_yogeshwar_desc'),
      icon: "🧘",
      sanskrit: "योगेश्वर"
    },
    {
      title: t('power_gangadhar'),
      description: t('power_gangadhar_desc'),
      icon: "🌊",
      sanskrit: "गंगाधर"
    },
    {
      title: t('power_neelkanth'),
      description: t('power_neelkanth_desc'),
      icon: "💙",
      sanskrit: "नीलकंठ"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            {t('powers_title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('powers_description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {powers.map((power, index) => (
            <Card key={index} className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{power.icon}</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{power.title}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{power.sanskrit}</p>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">{power.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">{t('mantras_title')}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">{t('maha_mantra')}</h4>
              <p className="text-2xl font-bold mb-2">ॐ नमः शिवाय</p>
              <p className="text-lg">Om Namah Shivaya</p>
              <p className="text-sm mt-2 opacity-90">{t('maha_mantra_desc')}</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">{t('mrityunjaya_mantra')}</h4>
              <p className="text-lg font-bold mb-2">ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्</p>
              <p className="text-sm">उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्</p>
              <p className="text-sm mt-2 opacity-90">{t('mrityunjaya_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShivaPowers;
