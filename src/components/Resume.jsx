import React from 'react'
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <div className='text-secondary bg-transparent !px-7 rounded-xl !py-5 flex flex-row gap-3 items-center'>
        <a href="/resume.pdf" download="Abdulla_Resume.pdf" style={{textDecoration:'none'}}>
          Resume
        </a>
        <FaDownload />
    </div>
  )
}

export default Resume