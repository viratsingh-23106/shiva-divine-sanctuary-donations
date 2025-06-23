
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const QRDonation = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const upiId = "809019359@axl";

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    toast({
      title: "UPI ID Copied!",
      description: "You can now paste it in your payment app",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="shadow-xl border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
      <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl flex items-center justify-center">
          <QrCode className="mr-2 h-6 w-6" />
          Quick Donation via UPI
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 text-center space-y-6">
        <div className="bg-white p-4 rounded-2xl shadow-lg inline-block">
          <img 
            src="/lovable-uploads/7b5fa59b-a7ae-4e64-bdf4-c14fa37de48c.png" 
            alt="Bank of Baroda UPI QR Code" 
            className="w-64 h-64 object-contain mx-auto"
          />
        </div>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-2 border-green-200">
            <p className="text-sm text-gray-600 mb-2">UPI ID:</p>
            <div className="flex items-center justify-center space-x-2">
              <code className="text-lg font-mono font-bold text-green-700 bg-green-100 px-3 py-1 rounded">
                {upiId}
              </code>
              <Button
                variant="outline"
                size="sm"
                onClick={copyUpiId}
                className="border-green-300 text-green-700 hover:bg-green-100"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          <div className="text-sm text-gray-600 space-y-2">
            <p className="font-semibold text-green-800">How to donate:</p>
            <ol className="text-left space-y-1 max-w-md mx-auto">
              <li>1. Open any UPI app (GPay, PhonePe, Paytm, etc.)</li>
              <li>2. Scan the QR code or use the UPI ID</li>
              <li>3. Enter your donation amount</li>
              <li>4. Complete the payment</li>
            </ol>
          </div>
          
          <div className="bg-orange-100 p-3 rounded-lg border border-orange-200">
            <p className="text-sm text-orange-800">
              <strong>Bank:</strong> Bank of Baroda<br />
              Your donation helps maintain our sacred temple and serve the community
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRDonation;
