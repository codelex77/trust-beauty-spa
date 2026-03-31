// Initialize the Supabase client
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = '/https://pkolzgjtootsjhbvwtcf.supabase.co.'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrb2x6Z2p0b290c2poYnZ3dGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NzczMjMsImV4cCI6MjA5MDE1MzMyM30.blJvipdwJDTzfVDcceGFvk6EYWZNJDaxRnhKeM9EgyY'
const supabase = createClient(supabaseUrl, supabaseKey)

// Example function to push data to your database
async function addToDatabase() {
  const { data, error } = await supabase
    .from('your_table_name')
    .insert([{ column_name: 'value' }])
}
