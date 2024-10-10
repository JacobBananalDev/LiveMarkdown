import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownPreview = ({ markdown }) => {
  return (
    <div className="p-4 w-full lg:w-1/2 h-80 border rounded-lg overflow-auto shadow-lg bg-white">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default MarkdownPreview;
