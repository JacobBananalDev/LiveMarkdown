import { useState, useEffect, useRef } from 'react';

const MarkdownEditor = ({ markdown, setMarkdown }) => {
  const [lineNumbers, setLineNumbers] = useState(['1']);
  const textareaRef = useRef(null);

  useEffect(() => {
    const lines = markdown.split('\n').length;
    const lineArray = Array.from({ length: lines }, (_, i) => `${i + 1}`);
    setLineNumbers(lineArray);
  }, [markdown]);

  // Sync scroll of line numbers with textarea
  const handleScroll = (e) => {
    textareaRef.current.scrollTop = e.target.scrollTop;
  };

  return (
    <div className="flex w-full min-h-full border rounded-lg shadow-lg">
      {/* Line numbers */}
      <div className="bg-gray-200 rounded-l-lg p-2 text-right text-sm font-mono ">
        {lineNumbers.map((line) => (
          <div key={line} className="leading-6">{line}</div>
        ))}
      </div>

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        onScroll={handleScroll}
        autoFocus='true'
        className="min-h-full w-full rounded-r-lg p-4 border-l resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
        placeholder="Enter your markdown code here..."
      />
    </div>
  );
};

export default MarkdownEditor;
