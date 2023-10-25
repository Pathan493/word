import './App.css';
import React, { useState } from "react";

function App() {
  const [wordCount, setWordCount] = useState(0);

  const handleParagraphChange = (event) => {
    const paragraph = event.target.value;
    const wordCount = paragraph.split(" ").length;
    setWordCount(wordCount);
  };

  return (
    <div className="container">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        className="paragraph-input"
        onChange={handleParagraphChange}
        placeholder="Enter your paragraph here..."
      />
      <div className="word-count">Word Count: {wordCount}</div>
    </div>
  );
}

export default App;


