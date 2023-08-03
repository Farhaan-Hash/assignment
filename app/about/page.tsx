import Link from 'next/link'
import React from 'react'

export default function About() { 
  // throw new Error()
  return (
   
    <div className='flex justify-between items-center flex-col mt-20'>
    <h1>About</h1>
    <Link href="/">Link to HomePage</Link>
    </div>
  )
}
