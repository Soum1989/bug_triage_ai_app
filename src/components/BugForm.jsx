import React, { useState } from "react";

export default function BugForm({ onSubmit }) {
  const [form, setForm] = useState({
    summary: "",
    steps: "",
    expected: "",
    actual: "",
    platform: "Android",
    priority: "Medium",
    ticket_id: `YPAY-${Date.now()}`
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form); // pass to parent
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px" }}>
      <h2>📝 Bug Report</h2>
      <input name="summary" placeholder="Bug Summary" onChange={handleChange} required />
      <textarea name="steps" placeholder="Steps to Reproduce" onChange={handleChange} required />
      <textarea name="expected" placeholder="Expected Behavior" onChange={handleChange} required />
      <textarea name="actual" placeholder="Actual Behavior" onChange={handleChange} required />
      <select name="platform" onChange={handleChange}>
        <option>Android</option>
        <option>iOS</option>
        <option>Web</option>
      </select>
      <select name="priority" onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Critical</option>
      </select>
      <button type="submit">Generate Markdown</button>
    </form>
  );
}
