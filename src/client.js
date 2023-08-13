import { createClient } from "@supabase/supabase-js";

const URL = "https://kbrgwuskechdoenxpdgy.supabase.co";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imticmd3dXNrZWNoZG9lbnhwZGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4ODM1MzEsImV4cCI6MjAwNzQ1OTUzMX0.KP-mxsQcFrItB1Oco2PmzZNIQCgFWdNCTKxpZL1lVWQ";

export const supabase = createClient(URL, API_KEY);
