import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function BugDashboard() {
  const [bugs, setBugs] = useState([]);
  const [search, setSearch] = useState('');
  const [platformFilter, setPlatformFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  useEffect(() => {
    async function fetchData() {
      let query = supabase.from('bug_reports').select('*');

      if (platformFilter) query = query.eq('platform', platformFilter);
      if (priorityFilter) query = query.eq('priority', priorityFilter);

      const { data } = await query.order('created_at', { ascending: false });
      setBugs(data || []);
    }

    fetchData();
  }, [platformFilter, priorityFilter]);

  const filteredBugs = bugs.filter(bug =>
    bug.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 Bug Reports</h2>

      <input
        type="text"
        placeholder="Search by summary..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: '10px' }}
      />

      <select value={platformFilter} onChange={(e) => setPlatformFilter(e.target.value)}>
        <option value="">All Platforms</option>
        <option value="Android">Android</option>
        <option value="iOS">iOS</option>
        <option value="Web">Web</option>
      </select>

      <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} style={{ marginLeft: '10px' }}>
        <option value="">All Priorities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>

      <table style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Summary</th>
            <th>Platform</th>
            <th>Priority</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {filteredBugs.map((bug) => (
            <tr key={bug.id}>
              <td>{bug.ticket_id}</td>
              <td>{bug.summary}</td>
              <td>{bug.platform}</td>
              <td>{bug.priority}</td>
              <td>{new Date(bug.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
