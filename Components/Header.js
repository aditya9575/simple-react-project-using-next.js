import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-16 bg-red-500 flex items-center justify-between'>
    <h2>Logo</h2>
    <div className='flex gap-8'>
      <Link href="/About">About</Link>  
      <Link href="/Products">Products</Link>
      <Link href="/Courses">Courses</Link>
    </div>
    </div>
  )
}

export default Header