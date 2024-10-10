import { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import MarkdownSidebar from './components/MarkdownSidebar';
import MarkdownHeader from './components/MarkdownHeader';

function App() {
  const [markdown, setMarkdown] = useState('');

  // const containerVariants = {
  //   hidden: { opacity: 0, x: '-100vw' },
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  //   exit: { opacity: 0, x: '100vw', transition: { ease: 'easeInOut' } },
  // };

  return (
    <div className='flex min-h-screen overflow-hidden bg-blue-950'>
      <MarkdownSidebar />
      <main className='flex-1 overflow-auto bg-blue-100'>
        <MarkdownHeader/>
        {/* Editor and Previewer */}
        <div className='flex p-4 gap-4'>
          <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
          <MarkdownPreview markdown={markdown} />
        </div>
      </main>

    </div>
  )
}

export default App
