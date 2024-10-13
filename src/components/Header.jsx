import React from 'react'

const Header = () => {
  return (
    <header className='flex item-center justify-between gap-4 p-4'>
        <h1 className='font-medium'>Free<span className='text-blue-400'>Scribe</span></h1>
        <button className='flex item-center gap-2'><p>New</p> <i className="fa-solid fa-plus"></i></button>
    </header>
  )
}

export default Header
