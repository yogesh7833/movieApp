import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='flex flex-col items-center bg-neutral-800 rounded-lg py-2 text-neutral-300'>
      <div className='flex items-center justify-center gap-4'>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
      </div>
      <div className='flex text-center items-center justify-center gap-2 text-sm'>
      <p>Created By Yogesh</p>
      <p><FaHeart className='text-red-500'/></p>
      </div>
    </footer>
    
  )
}

export default Footer