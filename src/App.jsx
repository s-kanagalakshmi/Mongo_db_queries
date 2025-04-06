
import React from 'react';
import ReactMarkdown from 'react-markdown';
import markdownContent from './MONGO_DB_QUERIES.md?raw';

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>📘 MongoDB Queries</h1>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}

export default App;
