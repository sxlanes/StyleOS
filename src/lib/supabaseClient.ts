
import { createClient } from '@supabase/supabase-js';

// NOTE: These should be in a .env file in a real project
// REACT_APP_SUPABASE_URL
// REACT_APP_SUPABASE_ANON_KEY

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://smkerridlllwjjcnjzyy.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNta2VycmlkbGxsd2pqY25qenl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5NTE2MzUsImV4cCI6MjA4NDUyNzYzNX0.6NSUD-r4hKxgSBNUHwVKD4hVsm91OkzTy39nXwPzwv4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
