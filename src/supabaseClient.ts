import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eylvbwzcbnqpapumtfdj.supabase.co'; // ganti dengan URL kamu
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5bHZid3pjYm5xcGFwdW10ZmRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMTg5NDcsImV4cCI6MjA1OTY5NDk0N30.Jlz5TzTl_OH4s5jw8Kd6OOYdfq6OqtEXN0V_1U-Z32c'; // ganti dengan anon key kamu

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
