import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://odtgqvttqbsmrlyfvzvs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kdGdxdnR0cWJzbXJseWZ2enZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NDUxNTgsImV4cCI6MjA0NjIyMTE1OH0.Tjv8Kc1-xTfxetxqXKzh4RVf1hqXfZUJyia6B0-yqHc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
