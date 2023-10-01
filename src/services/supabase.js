import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mzuspkxmqqhchvpulcra.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16dXNwa3htcXFoY2h2cHVsY3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxMDQyMzksImV4cCI6MjAxMTY4MDIzOX0.6_aYwSP5hDnDy_HrD2cv9BacxwTQDgKbFYBzTlynSS0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
