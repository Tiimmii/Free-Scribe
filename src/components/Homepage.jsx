import React from 'react'

const Homepage = () => {
  return (
    <main className='flex flex-1 p-4 flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center'>
        <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Free<span className='text-blue-400 bold'>Scribe</span></h1>  
        <h3 className='font-medium md:text-lg'>Record <span className='text-blue-400'> &rarr; </span>
            Transcribe
            <span className='text-blue-400'> &rarr; </span>
            Translate
        </h3>
        <button className='flex flex-row item-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4'>
            <p>Record</p>
            <i className="fa-solid fa-microphone-lines"></i>
        </button>
        <p>Or <label className='text-blue cursor-pointer hover:text-blue-600 duration-200'>Upload 
            <input className='hidden' type='file' accept='.mp3,.wave'></input></label></p>  
    </main>
  )
}

export default Homepage
