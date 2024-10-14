import { useState, useEffect, useRef } from 'react'
import Homepage from './components/Homepage'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay'
import Info from './components/Info'
import Transcribing from './components/Transcribing'
import { MessageTypes } from './utils/presets'


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [finished, setFinished] = useState(false)

  const isAudioAvailable = audioStream||file

  const handleAudioReset = ()=>{
    setFile(null)
    setAudioStream(null)
  }

  const worker = useRef(null)

  useEffect(()=>{
      if(!worker.current){
        worker.current = new Worker(new URL('./utils/whisper.worker.js', import.meta.url), {
          type: 'module'
        })
      }

      const onMessageRecieved = async (e)=>{
        switch(e.data.type){
          case 'DOWNLOADING':
            setDownloading(true)
            console.log('downloading')
            break;
          case 'LOADING':
            setLoading(true)
            console.log('LOADING')
            break;
          case 'RESULT':
            setOutput(e.data.results)
            console.log('Results')
            break;
          case 'INFERENCE_DONE':
            setFinished(true)
            console.log('Finished')
            break;
        }
      }
      worker.current.addEventListener('message', onMessageRecieved)

      return ()=> worker.current.removeEventListener('message', onMessageRecieved)

  }, [])

  async function readFromAudioFile(file){
    const sampling_rate = 16000
    const audioCTX = new AudioContext({ sampleRate: sampling_rate})

    const respone = await file.arrayBuffer()
    const decoded = await audioCTX.decodeAudioData(respone)
    const audio = decoded.getChannelData(0)
    return audio
  }

  async function handleFormSubmission(){
    if(!file && !audioStream) {return}

    let audio = await readFromAudioFile(file? file: audioStream)
    const model_name = 'openai/whisper-tiny.en'
    worker.current.postMessage({
      type: MessageTypes.INFERENCE_REQUEST,
      audio,
      model_name
    })
  }
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
