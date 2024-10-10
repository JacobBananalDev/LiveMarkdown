import { useState } from 'react';
import { motion } from 'framer-motion';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';

function App() {
  const [markdown, setMarkdown] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: '100vw', transition: { ease: 'easeInOut' } },
  };

  return (
    <div className='min-h-screen bg-blue-400'>
      <motion.div
        className="mt-4 flex flex-col lg:flex-row gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
      </motion.div>
    </div>
  )
}

export default App
