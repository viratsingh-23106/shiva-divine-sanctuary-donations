
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
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

    console.log('Contact form data:', contactForm);
    
    // For now, show success message. Later this will integrate with Supabase
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for your message. We will get back to you soon.",
    });

    // Reset form
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // TODO: Once Supabase is connected, save to database
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Connect With Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions, need guidance, or want to know more about our temple activities? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Temple Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Puskeraswarnath Temple<br />
                      Sacred Hills, Divine Valley<br />
                      Near Mountain Springs<br />
                      PIN: 123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
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
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
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
                    <h4 className="font-bold text-gray-800 mb-1">Temple Timings</h4>
                    <p className="text-gray-600">
                      Morning: 5:00 AM - 12:00 PM<br />
                      Evening: 4:00 PM - 9:00 PM<br />
                      Special ceremonies as announced
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Daily Activities</h3>
              <ul className="space-y-2">
                <li>• Morning Aarti: 6:00 AM</li>
                <li>• Abhishek: 8:00 AM - 11:00 AM</li>
                <li>• Afternoon Prayers: 12:00 PM</li>
                <li>• Evening Aarti: 7:00 PM</li>
                <li>• Night Prayer: 8:30 PM</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-blue-200">
              <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      value={contactForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input
                      id="contact-subject"
                      value={contactForm.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Subject of your message"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Write your message, question, or query here..."
                    className="mt-1"
                    rows={5}
                  />
                </div>

                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours during business days
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
