import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Papa from 'papaparse';

function BugOutput({ markdown, bugData }) {
  const [allBugs, setAllBugs] = useState([]);
  const [filter, setFilter] = useState('All');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown);
    alert("📋 Copied to clipboard!");
  };

  const sendToSupabase = async () => {
  if (!bugData.summary || !bugData.steps) {
    return alert("Please fill in all required fields before submitting.");
  }
  console.log("Sending bugData:", bugData);
  console.log("Markdown:", markdown);


  const { error } = await supabase
    .from("bug_reports")
    .insert([{
      summary: bugData.summary || '',
      steps: bugData.steps || '',
      expected: bugData.expected || '',
      actual: bugData.actual || '',
      platform: bugData.platform || '',
      priority: bugData.priority || '',
      ticket_id: bugData.ticket_id || '',
      content: markdown || '',
    }]);

  if (error) {
    alert("❌ Failed to send to Supabase");
  } else {
    alert("✅ Sent to Supabase");
    fetchAllBugs();
  }
};


  const fetchAllBugs = async () => {
    let { data, error } = await supabase.from('bug_reports').select('*');
    if (!error) setAllBugs(data);
  };

  useEffect(() => {
    fetchAllBugs();
  }, []);

  const filteredBugs = filter === 'All' ? allBugs : allBugs.filter(bug => bug.priority === filter);

  const exportToCSV = () => {
    const csv = Papa.unparse(filteredBugs);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'bug_reports.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <textarea
        value={markdown}
        readOnly
        rows={10}
        cols={80}
      />
      <br />
      <button onClick={copyToClipboard}>📋 Copy to Clipboard</button>
      <button onClick={sendToSupabase}>📤 Send to Supabase</button>

      <hr />
      <h3>📚 Logged Bug Reports</h3>

      <label>🔍 Filter by Priority: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>
      <button onClick={exportToCSV} style={{ marginLeft: '10px' }}>⬇️ Export to CSV</button>

      <ul>
        {filteredBugs.map(bug => (
          <li key={bug.id}>
            <strong>{bug.summary}</strong> — Priority: {bug.priority} — Platform: {bug.platform}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugOutput;
