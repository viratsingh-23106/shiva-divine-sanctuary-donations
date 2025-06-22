
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Building, BookOpen, Stethoscope, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Donations = () => {
  const [donationForm, setDonationForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    category: '',
    message: ''
  });
  const { toast } = useToast();

  const donationCategories = [
    {
      id: 'temple_maintenance',
      title: 'Temple Maintenance',
      description: 'Support daily upkeep, repairs, and maintenance of the sacred temple premises',
      icon: Building,
      color: 'orange'
    },
    {
      id: 'food_distribution',
      title: 'Annadanam (Food Distribution)',
      description: 'Provide free meals to devotees and those in need - the highest form of service',
      icon: Users,
      color: 'green'
    },
    {
      id: 'education',
      title: 'Education & Learning',
      description: 'Support educational programs, Sanskrit learning, and spiritual knowledge sharing',
      icon: BookOpen,
      color: 'blue'
    },
    {
      id: 'medical_aid',
      title: 'Medical & Healthcare',
      description: 'Provide medical assistance and healthcare support to the community',
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

    console.log('Donation data:', donationForm);
    
    // For now, show success message. Later this will integrate with Supabase and Razorpay
    toast({
      title: "Donation Request Received",
      description: "Thank you for your generous donation. You will be redirected to payment gateway shortly.",
    });

    // TODO: Once Supabase is connected, save to database and integrate Razorpay
    // This would call an edge function to process the payment
  };

  return (
    <section id="donations" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
            Support Our Sacred Mission
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your generous donations help us serve the community and maintain this sacred space for future generations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Categories */}
          <div>
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Choose Your Seva (Service)</h3>
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
                  Make a Donation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={donationForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={donationForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={donationForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="amount">Donation Amount (₹) *</Label>
                    <Input
                      id="amount"
                      type="number"
                      value={donationForm.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      placeholder="Enter amount in rupees"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">Donation Category *</Label>
                  <Select value={donationForm.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select donation category" />
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
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={donationForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Share your thoughts or prayers..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <Button 
                  onClick={handleDonation}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
                  size="lg"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Proceed to Payment
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  Your donation is secure and will be processed through Razorpay
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
