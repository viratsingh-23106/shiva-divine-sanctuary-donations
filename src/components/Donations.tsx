
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Building, BookOpen, Stethoscope, Users, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import QRDonation from './QRDonation';

const Donations = () => {
  const { t } = useLanguage();
  const [donationForm, setDonationForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [submittedDonationId, setSubmittedDonationId] = useState(null);
  const { toast } = useToast();

  const donationCategories = [
    {
      id: 'temple_maintenance',
      title: t('temple_maintenance'),
      description: t('temple_maintenance_desc'),
      icon: Building,
      color: 'orange'
    },
    {
      id: 'food_distribution',
      title: t('food_distribution'),
      description: t('food_distribution_desc'),
      icon: Users,
      color: 'green'
    },
    {
      id: 'education',
      title: t('education'),
      description: t('education_desc'),
      icon: BookOpen,
      color: 'blue'
    },
    {
      id: 'medical_aid',
      title: t('medical_aid'),
      description: t('medical_aid_desc'),
      icon: Stethoscope,
      color: 'red'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setDonationForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDonation = async () => {
    if (!donationForm.name || !donationForm.email || !donationForm.amount || !donationForm.category) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting donation:', donationForm);
      
      const { data, error } = await supabase.functions.invoke('process-donation', {
        body: donationForm
      });

      if (error) {
        console.error('Error submitting donation:', error);
        toast({
          title: "Donation submission failed",
          description: "Please try again later.",
          variant: "destructive"
        });
        return;
      }

      console.log('Donation response:', data);

      toast({
        title: "Donation Request Submitted Successfully!",
        description: t('donation_saved'),
      });

      // Show QR code and store donation ID
      setSubmittedDonationId(data.donation_id);
      setShowQRCode(true);

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

  const handleBackToForm = () => {
    setShowQRCode(false);
    setSubmittedDonationId(null);
    // Reset form
    setDonationForm({
      name: '',
      email: '',
      phone: '',
      amount: '',
      category: '',
      message: ''
    });
  };

  if (showQRCode) {
    return (
      <section id="donations" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
              {t('complete_donation')}
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              {t('donation_saved')}
            </p>
          </div>

          <div className="mb-8">
            <QRDonation />
          </div>

          <div className="text-center">
            <Button
              onClick={handleBackToForm}
              variant="outline"
              className="border-orange-300 text-orange-700 hover:bg-orange-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('make_another')}
            </Button>
          </div>

          <div className="mt-8 p-4 bg-green-100 rounded-lg border border-green-200">
            <p className="text-center text-green-800">
              <strong>{t('thank_you_donation')}</strong><br />
              Donation ID: {submittedDonationId}<br />
              {t('transaction_note')}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="donations" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
            {t('donations_title')}
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('donations_description')}
          </p>
        </div>

        {/* QR Code Donation Section */}
        <div className="mb-12">
          <QRDonation />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Categories */}
          <div>
            <h3 className="text-2xl font-bold text-orange-800 mb-6">{t('donation_categories')}</h3>
            <div className="space-y-4">
              {donationCategories.map((category) => {
                const IconComponent = category.icon;
                const isSelected = donationForm.category === category.id;
                return (
                  <Card 
                    key={category.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      isSelected ? `border-${category.color}-500 bg-${category.color}-50` : 'border-gray-200'
                    }`}
                    onClick={() => handleInputChange('category', category.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-${category.color}-100`}>
                          <IconComponent className={`h-6 w-6 text-${category.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800 mb-2">{category.title}</h4>
                          <p className="text-gray-600">{category.description}</p>
                        </div>
                        {isSelected && (
                          <div className={`w-6 h-6 rounded-full bg-${category.color}-500 flex items-center justify-center`}>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Donation Form */}
          <div>
            <Card className="shadow-xl border-orange-200">
              <CardHeader className="bg-orange-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="mr-2 h-6 w-6" />
                  {t('make_donation')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t('full_name')} {t('required')}</Label>
                    <Input
                      id="name"
                      value={donationForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={t('enter_name')}
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t('email')} {t('required')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={donationForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={t('enter_email')}
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">{t('phone')}</Label>
                    <Input
                      id="phone"
                      value={donationForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={t('enter_phone')}
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="amount">{t('amount')} {t('required')}</Label>
                    <Input
                      id="amount"
                      type="number"
                      value={donationForm.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      placeholder={t('enter_amount')}
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">{t('category')} {t('required')}</Label>
                  <Select 
                    value={donationForm.category} 
                    onValueChange={(value) => handleInputChange('category', value)}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder={t('select_category')} />
                    </SelectTrigger>
                    <SelectContent>
                      {donationCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">{t('message_optional')}</Label>
                  <Textarea
                    id="message"
                    value={donationForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t('share_thoughts')}
                    className="mt-1"
                    rows={3}
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  onClick={handleDonation}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  {isSubmitting ? t('processing') : t('submit_donation')}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  {t('donation_form_note')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;
