import React, { useState } from "react";
import BugForm from "./components/BugForm";       // ✅ update this if BugForm is also inside /components
import BugOutput from "./components/BugOutput";   // ✅ correct path based on your folder structure

function App() {
  const [markdown, setMarkdown] = useState("");

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
  };

  return (
    <div>
      <BugForm onSubmit={handleBugSubmit} />
      {markdown && <BugOutput markdown={markdown} />}
    </div>
  );
}

export default App;
