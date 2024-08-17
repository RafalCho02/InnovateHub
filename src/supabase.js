import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yiyrywdnckrjpovccjsc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpeXJ5d2RuY2tyanBvdmNjanNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2MzYxNTQsImV4cCI6MjAyMDIxMjE1NH0.w3gpxipac7M2x6JVCp5N_jrPSR8LNOJmQSenQmQY4GU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
