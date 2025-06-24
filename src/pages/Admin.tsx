
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Mail, Phone, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  created_at: string;
}

const Admin = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedMessage, setExpandedMessage] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching messages:', error);
        toast({
          title: "Error",
          description: "Failed to fetch contact messages",
          variant: "destructive",
        });
      } else {
        setMessages(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleMessageExpansion = (messageId: string) => {
    setExpandedMessage(expandedMessage === messageId ? null : messageId);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <LanguageToggle />
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-lg">{t('loading_messages')}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <LanguageToggle />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-6 h-6" />
            {t('admin_title')}
          </CardTitle>
          <CardDescription>
            {t('admin_description')} ({messages.length} {t('total_messages')})
          </CardDescription>
        </CardHeader>
        <CardContent>
          {messages.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {t('no_messages')}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('name')}</TableHead>
                    <TableHead>{t('email')}</TableHead>
                    <TableHead>{t('phone')}</TableHead>
                    <TableHead>{t('subject')}</TableHead>
                    <TableHead>{t('date')}</TableHead>
                    <TableHead>{t('actions')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((message) => (
                    <>
                      <TableRow key={message.id}>
                        <TableCell className="font-medium">{message.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            {message.email}
                          </div>
                        </TableCell>
                        <TableCell>
                          {message.phone ? (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              {message.phone}
                            </div>
                          ) : (
                            <span className="text-gray-400">{t('not_provided')}</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {message.subject ? (
                            <Badge variant="outline">{message.subject}</Badge>
                          ) : (
                            <span className="text-gray-400">{t('no_subject')}</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatDate(message.created_at)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleMessageExpansion(message.id)}
                          >
                            {expandedMessage === message.id ? (
                              <>
                                <EyeOff className="w-4 h-4 mr-2" />
                                {t('hide')}
                              </>
                            ) : (
                              <>
                                <Eye className="w-4 h-4 mr-2" />
                                {t('view')}
                              </>
                            )}
                          </Button>
                        </TableCell>
                      </TableRow>
                      {expandedMessage === message.id && (
                        <TableRow>
                          <TableCell colSpan={6} className="bg-gray-50">
                            <div className="p-4">
                              <h4 className="font-semibold mb-2">{t('contact_message')}:</h4>
                              <div className="bg-white p-3 rounded border">
                                <p className="whitespace-pre-wrap">{message.message}</p>
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
