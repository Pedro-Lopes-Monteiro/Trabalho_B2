import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hlcprmfrtvpggscbpqyb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsY3BybWZydHZwZ2dzY2JwcXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjQ3NzcsImV4cCI6MjA0NzUwMDc3N30.B4F4HGI68omniIjRszq22jYM1vnW0ReaAwniuAw-S7A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
