# 🐞 Bug Triage AI App

A lightweight web app for logging, viewing, filtering, and exporting bug reports — built using **React**, **Supabase**, and **Papaparse**.

## ✨ Features

- 📝 Log bugs with structured fields: summary, steps, expected vs actual behavior, platform, priority, and ticket ID.
- 📄 Auto-generate Markdown summaries.
- 📤 Send bug reports directly to Supabase.
- 🔍 Filter by priority in the dashboard.
- 📋 Copy Markdown to clipboard.
- ⬇️ Export filtered bug list as CSV.
- 💾 Export all bug reports as `.xlsx` via backend script.

## 🔧 Tech Stack

- React (Frontend)
- Supabase (Database & backend)
- Papaparse (CSV export)
- Python (XLSX export script)

## 🧱 Project Structure
bug_triage_ai_app/
│
├── src/
│ ├── components/
│ │ ├── BugForm.jsx # Bug submission form
│ │ └── BugOutput.jsx # Markdown + Supabase integration
│ └── App.jsx # Main app logic
│
├── backend/
│ └── export_bug_reports.py # Exports Supabase bug reports to XLSX
│
├── public/
├── supabaseClient.js # Supabase config
└── README.md


## 🚀 Deployment

Live demo hosted on **Vercel**  
> 🔗 https://bug-triage-ai-app-git-master-taursoum-3328s-projects.vercel.app/

To deploy yourself:

```bash
# Build locally
npm run build

# Push to GitHub
git remote add origin https://github.com/Soum1989/bug_triage_ai_app.git
git push -u origin main

# Then connect to Vercel (via dashboard or CLI)

### 🐞 Bug Report Summary
Loan offer banner overlaps with chat input box

### 🔁 Steps to Reproduce
1. Open the chat interface on mobile
2. Scroll down to view chat messages
3. Observe the bottom area
4. Try typing a message when the banner is visible

### ✅ Expected Behavior
Chat input should remain accessible and not hidden behind any UI element like banners

### ❌ Actual Behavior
Loan offer banner overlaps the chat input field, making it difficult to type messages.

### 🖥️ Affected Platform(s)
iOS

### ⏳ Suggested Priority
High

### 🎫 Ticket ID
YPAY-1752568371908

📦 Export to XLSX

cd backend/
python export_bug_reports.py

🧠 Inspiration
Built for streamlining bug triage during UAT cycles, sprint testing, and internal QA — especially for AI/chatbot-based flows.

Contributors:
👩‍💻 Soumyendu Dey


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
