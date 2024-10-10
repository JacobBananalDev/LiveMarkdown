import { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import MarkdownSidebar from './components/MarkdownSidebar';
import MarkdownHeader from './components/MarkdownHeader';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [viewMode, setViewMode] = useState('Split'); // 'editor', 'preview', or 'side-by-side'
  

  return (
    <div className='flex min-h-screen overflow-hidden bg-blue-950'>
      <MarkdownSidebar />
      <main className='flex-1 flex flex-col w-full min-h-screen overflow-hidden'>
        <MarkdownHeader viewMode={viewMode} setViewMode={setViewMode} />
        {/* Conditional Rendering Based on View Mode */}
        {viewMode === 'Editor' && (
          <div className='flex p-4'>
            <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
          </div>
        )}
        {viewMode === 'Preview' && (
          <div className='flex p-4'>
            <MarkdownPreview markdown={markdown} />
          </div>
        )}
        {viewMode === 'Split' && (
          <div className="flex gap-4 p-4">
            <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
            <MarkdownPreview markdown={markdown} />
          </div>
        )}
      </main>

    </div>
  )
}

export default App
