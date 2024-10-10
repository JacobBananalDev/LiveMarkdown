import React from 'react'
import { FaCode, FaParagraph } from "react-icons/fa6";
import { PiSquareSplitHorizontalLight } from "react-icons/pi";

const MarkdownHeader = ({ viewMode, setViewMode }) => {
    return (
        <div className='flex justify-between bg-white p-2 shadow-lg'>
            <div className='flex flex-row items-center gap-2 bg-gray-100 p-2 rounded-md'>
                <button className={`p-1 rounded ${viewMode === 'Editor' ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-400'}`} onClick={() => setViewMode('Editor')}><FaCode size={24} /></button>
                <button className={`p-1 rounded ${viewMode === 'Preview' ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-400'}`} onClick={() => setViewMode('Preview')}><FaParagraph size={24} /></button>
                <button className={`p-1 rounded ${viewMode === 'Split' ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-400'}`} onClick={() => setViewMode('Split')}><PiSquareSplitHorizontalLight size={24} /></button>
            </div>
        </div>
    )
}

export default MarkdownHeader
