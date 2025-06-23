
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message } = await req.json();

    console.log('Sending Gmail notification for contact message:', { name, email, subject });

    // Gmail API configuration
    const GMAIL_ACCESS_TOKEN = Deno.env.get('GMAIL_ACCESS_TOKEN');
    const TEMPLE_EMAIL = Deno.env.get('TEMPLE_EMAIL') || 'info@puskeraswarnath.org';

    if (!GMAIL_ACCESS_TOKEN) {
      console.error('Gmail access token not configured');
      return new Response(
        JSON.stringify({ error: 'Gmail integration not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Prepare email content
    const emailSubject = `New Contact Message from ${name} - ${subject || 'Temple Inquiry'}`;
    const emailBody = `
Dear Temple Administration,

You have received a new contact message through the temple website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'General Inquiry'}

Message:
${message}

---
This message was sent from the Puskeraswarnath Temple website contact form.
Please respond to the visitor at: ${email}

Om Namah Shivaya 🕉️
    `;

    // Create Gmail message
    const gmailMessage = {
      raw: btoa(
        `To: ${TEMPLE_EMAIL}\r\n` +
        `From: noreply@puskeraswarnath.org\r\n` +
        `Subject: ${emailSubject}\r\n` +
        `Content-Type: text/plain; charset=UTF-8\r\n\r\n` +
        emailBody
      ).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    };

    // Send email via Gmail API
    const gmailResponse = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GMAIL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gmailMessage)
    });

    if (!gmailResponse.ok) {
      const errorText = await gmailResponse.text();
      console.error('Gmail API error:', errorText);
      throw new Error(`Gmail API failed: ${gmailResponse.status}`);
    }

    const gmailResult = await gmailResponse.json();
    console.log('Gmail notification sent successfully:', gmailResult.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email notification sent successfully',
        gmail_message_id: gmailResult.id
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error sending Gmail notification:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email notification' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
})
