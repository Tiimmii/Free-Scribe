import React, { useState } from 'react'

const Info = () => {
    const [tab, setTab] = useState('transcription')

  return (
    <main className='flex flex-1 p-4 flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center max-w-prose w-full mx-auto'>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap'>Your <span className='text-blue-400 bold'>Transcription</span></h1>  
        <div className='grid grid-cols-2 item-center mx-auto bg-white border-1 border-blue-400 rounded-full shadow overflow-hidden'>
            <button 
            className={'px-5 py-1 font-medium duration-200 ' + (tab==='transcription'?'bg-blue-400 text-white':'hover:text-blue-400')}
            onClick={()=>setTab('transcription')}>Transcription</button>
            <button 
            className={'px-5 py-1 font-medium duration-200 ' + (tab==='translation'?'bg-blue-400 text-white':'hover:text-blue-400')} 
            onClick={()=>setTab('translation')}>Translation</button>
        </div> 
    </main>
  )
}

export default Info
