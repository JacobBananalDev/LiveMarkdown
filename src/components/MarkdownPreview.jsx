import React from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

const MarkdownPreview = ({ markdown }) => {
  return (
    <div className="p-2 min-h-full w-full h-80 border rounded-lg overflow-auto shadow-lg bg-white">
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
};

export default MarkdownPreview;
