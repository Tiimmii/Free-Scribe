import { useState, useEffect } from 'react'
import Homepage from './components/Homepage'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay'
import Info from './components/Info'
import Transcribing from './components/Transcribing'


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)
  const [loading, setLoading] = useState(true)
  const [output, setOutput] = useState(true)

  const isAudioAvailable = audioStream||file

  const handleAudioReset = ()=>{
    setFile(null)
    setAudioStream(null)
  }

  useEffect(()=>{
    console.log(audioStream)
  }, [audioStream])
  return (
    <>
      <div className='flex flex-col max-w[1000px] mx-auto w-full'>
        <section className='min-h-screen flex flex-col'>
          <Header/>
          {
            output? (<Info/>) :
            loading? (<Transcribing/>):
            isAudioAvailable? (<FileDisplay resetAudio={handleAudioReset} file={file} audioStream={audioStream}/>) :
            (<Homepage setFile={setFile} setAudioStream={setAudioStream}/>)
          }
        </section>
      </div>
    </>
  )
}

export default App
