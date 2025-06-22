
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
            About Puskeraswarnath Temple
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A divine sanctuary established on June 5, 2025, dedicated to Lord Shiva - the destroyer of evil and transformer of the universe
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
            <h3 className="text-3xl font-bold text-orange-800">Our Sacred Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Puskeraswarnath Temple stands as a beacon of divine light, where ancient traditions meet modern devotion. Our temple serves as a spiritual haven for devotees seeking blessings from Lord Shiva, the Mahadev who resides in the mountains and in our hearts.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Established with the vision of spreading peace, prosperity, and spiritual awakening, we conduct daily prayers, special ceremonies, and community service activities that benefit all of society.
            </p>
            <div className="bg-orange-100 p-6 rounded-xl border-l-4 border-orange-600">
              <p className="text-orange-800 font-semibold text-lg">
                "शिवम् शान्तम् अद्वैतम्" - Shivam Shantam Advaitam
              </p>
              <p className="text-gray-700 mt-2">
                Shiva is peace, Shiva is oneness, Shiva is the ultimate reality
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="text-xl font-bold text-orange-800 mb-3">Sacred Architecture</h4>
              <p className="text-gray-600">
                Built with traditional architectural principles that harmonize with nature and cosmic energies
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h4 className="text-xl font-bold text-orange-800 mb-3">Daily Worship</h4>
              <p className="text-gray-600">
                Regular prayers, aarti, and special ceremonies conducted by learned priests following ancient traditions
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-orange-800 mb-3">Community Service</h4>
              <p className="text-gray-600">
                Dedicated to serving society through food distribution, education, and healthcare initiatives
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
