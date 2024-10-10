import React, { useState } from 'react'

const MarkdownSidebar = () => {
    const [isOpen, SetIsOpen] = useState(true);
  return (
    <div className={`flex flex-col min-h-full top-0 left-0 ${isOpen ? 'w-72' : 'w-16'} bg-white p-4`}>
        LiveMark
    </div>
  )
}

export default MarkdownSidebar
