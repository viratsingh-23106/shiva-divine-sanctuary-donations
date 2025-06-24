
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-orange-900 text-orange-100 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Om Namah Shivaya</h3>
            <p className="text-orange-200 mb-2">
              🕉️ {t('footer_blessing')}
            </p>
            <p className="text-orange-200">
              May Lord Shiva's blessings always be upon you
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">{t('quick_links')}</h4>
            <ul className="space-y-2 text-orange-200">
              <li><a href="#about" className="hover:text-white transition-colors">{t('about_temple')}</a></li>
              <li><a href="#donations" className="hover:text-white transition-colors">{t('donations')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('contact_us')}</a></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">{t('admin_panel')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">{t('footer_timings')}</h4>
            <div className="text-orange-200 space-y-1 whitespace-pre-line">
              {t('footer_schedule')}
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-800 mt-8 pt-6 text-center text-orange-300">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
