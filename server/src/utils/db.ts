import { createClient } from "@supabase/supabase-js";
import 'dotenv/config';

const supabaseUrl: string = process.env.SUPABASE_URL ?? "";
const supabaseKey: string = process.env.SUPABASE_KEY ?? "";
console.log("Supabase Url:", supabaseUrl ? "Loaded" : "Missing");
console.log("Supabase Key:", supabaseKey ? "Loaded" : "Missing");

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;