import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jqmciulmsvqxiyzyfarr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxbWNpdWxtc3ZxeGl5enlmYXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0OTUyNDMsImV4cCI6MjA2ODA3MTI0M30.tJMsvHKQH3INR7LrkjUXMWdp2eRKoeOVhKuQTDnwcyo";

export const supabase = createClient(supabaseUrl, supabaseKey);
