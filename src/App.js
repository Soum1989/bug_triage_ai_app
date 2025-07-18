import React, { useState } from "react";
import BugForm from "./components/BugForm";
import BugOutput from "./components/BugOutput";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [bugData, setBugData] = useState(null);

  const handleBugSubmit = (data) => {
    const md = `
### 🐞 Bug Report Summary
${data.summary}

### 🔁 Steps to Reproduce
${data.steps}

### ✅ Expected Behavior
${data.expected}

### ❌ Actual Behavior
${data.actual}

### 🖥️ Affected Platform(s)
${data.platform}

### ⏳ Suggested Priority
${data.priority}

### 🎫 Ticket ID
${data.ticket_id}
`;
    setMarkdown(md);
    setBugData(data);
  };

  return (
    <div>
      <BugForm onSubmit={handleBugSubmit} />
      {markdown && bugData && <BugOutput markdown={markdown} bugData={bugData} />}
    </div>
  );
}

export default App;
