import React from 'react'

const Transcribing = ({downloading}) => {
  return (
    <div className='flex flex-col justify-center gap-10 md:gap-14 py-20 flex-1 p-4'>
        <div className='flex flex-col gap-2 sm:gap-4 text-center'>
            <h1 className='font-semibold text-4xl sm:text-4xl md:text-6xl'>Tran<span className='text-blue-400 bold'>Scribing</span></h1>
            <p>{!downloading? 'warming up cylinders': 'core cylinders engaged'}</p>
        </div>
        <div className='flex flex-col max-w-[400px] mx-auto w-full gap-2 sm:gap-4 pb-7'>
            {
                [0,1,2,3].map((val)=>{
                    return(
                        <div key={val} className={'rounded-full h-2 sm:h-3 bg-slate-400 loading ' + `loading${val}`}></div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Transcribing
