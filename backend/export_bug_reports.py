import pandas as pd
import requests

# Supabase credentials (replace with env vars in production)
SUPABASE_URL = "https://jqmciulmsvqxiyzyfarr.supabase.co"
SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxbWNpdWxtc3ZxeGl5enlmYXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0OTUyNDMsImV4cCI6MjA2ODA3MTI0M30.tJMsvHKQH3INR7LrkjUXMWdp2eRKoeOVhKuQTDnwcyo"

# Headers for Supabase REST API
headers = {
    "apikey": SUPABASE_API_KEY,
    "Authorization": f"Bearer {SUPABASE_API_KEY}",
}

# Fetch data from Supabase table
def fetch_bug_reports():
    url = f"{SUPABASE_URL}/rest/v1/bug_reports?select=*"
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.json()

# Filter by priority or platform
def filter_reports(data, priority=None, platform=None):
    df = pd.DataFrame(data)
    if priority:
        df = df[df['priority'] == priority]
    if platform:
        df = df[df['platform'] == platform]
    return df

# Export to both CSV and XLSX
def export_data(df, base_filename="bug_reports"):
    df.to_csv(f"{base_filename}.csv", index=False)
    df.to_excel(f"{base_filename}.xlsx", index=False)
    return f"{base_filename}.csv and {base_filename}.xlsx exported."

# Example usage
data = fetch_bug_reports()
filtered_data = filter_reports(data, priority="Medium", platform="Android")
export_result = export_data(filtered_data)
export_result
