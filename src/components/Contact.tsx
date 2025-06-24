
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting contact message:', contactForm);
      
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: contactForm
      });

      if (error) {
        console.error('Error submitting contact message:', error);
        toast({
          title: "Message submission failed",
          description: "Please try again later.",
          variant: "destructive"
        });
        return;
      }

      console.log('Contact response:', data);

      toast({
        title: "Message Sent Successfully",
        description: data.message || "Thank you for your message. We will get back to you soon.",
      });

      // Reset form
      setContactForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            {t('contact_title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('contact_description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">{t('temple_info')}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{t('address')}</h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {t('temple_address')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{t('phone')}</h4>
                    <p className="text-gray-600">
                      +91 12345 67890<br />
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{t('email')}</h4>
                    <p className="text-gray-600">
                      info@puskeraswarnath.org<br />
                      seva@puskeraswarnath.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{t('temple_timings')}</h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {t('temple_schedule')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">{t('daily_activities')}</h3>
              <ul className="space-y-2">
                <li>{t('morning_aarti')}</li>
                <li>{t('abhishek')}</li>
                <li>{t('afternoon_prayers')}</li>
                <li>{t('evening_aarti')}</li>
                <li>{t('night_prayer')}</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-blue-200">
              <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  {t('send_message')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">{t('full_name')} {t('required')}</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={t('enter_name')}
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">{t('email')} {t('required')}</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={t('enter_email')}
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-phone">{t('phone')}</Label>
                    <Input
                      id="contact-phone"
                      value={contactForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={t('enter_phone')}
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-subject">{t('subject')}</Label>
                    <Input
                      id="contact-subject"
                      value={contactForm.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder={t('subject_placeholder')}
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-message">{t('contact_message')} {t('required')}</Label>
                  <Textarea
                    id="contact-message"
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t('contact_message_placeholder')}
                    className="mt-1"
                    rows={5}
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {isSubmitting ? t('sending') : t('send_message')}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  {t('contact_form_note')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
