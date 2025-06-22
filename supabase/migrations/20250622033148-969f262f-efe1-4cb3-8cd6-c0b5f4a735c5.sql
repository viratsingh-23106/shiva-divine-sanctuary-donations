
-- Create donations table to store donation records
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  amount DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  message TEXT,
  payment_id TEXT,
  payment_status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_messages table to store contact form submissions
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) - make tables publicly readable for admin purposes
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public insert (for donations and messages)
-- and allow reading for authenticated users (admin access)
CREATE POLICY "Allow public donations" 
  ON public.donations 
  FOR INSERT 
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view donations" 
  ON public.donations 
  FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow public contact messages" 
  ON public.contact_messages 
  FOR INSERT 
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view contact messages" 
  ON public.contact_messages 
  FOR SELECT 
  TO authenticated
  USING (true);
