import React from 'react'

const FileDisplay = ({resetAudio, file, audioStream}) => {
  return (
    <main className='flex flex-1 p-4 flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center w-fit max-w-full mx-auto'>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>Your <span className='text-blue-400 bold'>File</span></h1>  
        <div className='flex items-center gap-2 mx-auto flex-row my-4'>
            <h3 className='font-semibold'>File Name:</h3>
            <p>{file?file?.name:"Custom audio"}</p>
        </div> 
        <div className='flex item-center justify-between gap-4'>
            <button className='text-slate-400 font-medium hover:text-blue-600 duration-200' onClick={resetAudio }>Reset</button>
            <button className='specialBtn px-4 py-3 rounded-lg text-blue-400 flex item-center gap-2'><p>Transcribe <i className="fa-solid fa-pen-nib"></i></p></button>
        </div> 
    </main>
  )
}

export default FileDisplay
