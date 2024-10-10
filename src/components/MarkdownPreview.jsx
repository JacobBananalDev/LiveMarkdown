import React from 'react';
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const MarkdownPreview = ({ markdown }) => {
    return (
        <div className="p-2 min-h-screen w-full  border rounded-lg overflow-auto shadow-lg bg-white">
            <ReactMarkdown className='prose' rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownPreview;
