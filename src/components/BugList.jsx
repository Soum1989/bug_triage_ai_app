import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function BugList() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBugs = async () => {
      const { data, error } = await supabase
        .from("bug_reports")
        .select("*")
        .order('created_at', { ascending: false });

      if (error) {
        console.error("❌ Failed to fetch bugs:", error);
      } else {
        setBugs(data);
      }
      setLoading(false);
    };

    fetchBugs();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🐛 Logged Bug Reports</h2>
      {loading ? (
        <p>Loading bugs...</p>
      ) : (
        <ul>
          {bugs.map((bug) => (
            <li key={bug.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}>
              <pre>{bug.content}</pre>
              <small>📅 {new Date(bug.created_at).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BugList;
