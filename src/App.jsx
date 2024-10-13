import { useState, } from 'react'
import Homepage from './components/Homepage'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay'


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = audioStream||file

  const handleAudioReset = ()=>{
    setFile(null)
    setAudioStream(null)
  }
  return (
    <>
      <div className='flex flex-col max-w[1000px] mx-auto w-full'>
        <section className='min-h-screen flex flex-col'>
          <Header/>
          {isAudioAvailable? (<FileDisplay resetAudio={handleAudioReset} file={file} audioStream={audioStream}/>) :
          (<Homepage setFile={setFile} setAudioStream={setAudioStream}/>)}
        </section>
      </div>
    </>
  )
}

export default App
