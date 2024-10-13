import { useState } from 'react'
import Homepage from './components/Homepage'


function App() {

  return (
    <>
      <div className='flex flex-col max-w[1000px] mx-auto w-full'>
        <section className='min-h-screen flex flex-col'>
          <header className='flex item-center justify-between gap-4 p-4'>
            <h1>Free <span className='text-blue-400'>Scribe</span></h1>
            <button className='flex item-center gap-2'><p>New</p> <i className="fa-solid fa-plus"></i></button>
          </header>
          <Homepage/>
        </section>
      </div>
    </>
  )
}

export default App
