import React, { useState, useEffect, useRef } from 'react'


const Homepage = ({setFile, setAudioStream }) => {
    const [recording, setRecording] = useState("not-recording")
    const [audioChunks, setAudioChunks] = useState([])
    const [duration, setDuration] = useState(0)

    const mediaRecorder = useRef(null)

    const mediaType = 'audio/webm'
    async function startRecording(){
        let tempStream
        try{
            const streamData = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false
            })
            tempStream = streamData
        }
        catch(err){
            console.log(err.message )
        }
        setRecording('recording')
        const media = new MediaRecorder(tempStream, {type: mediaType})

        MediaRecorder.current = media
        mediaRecorder.current.start()
        let localAudioCHunks = []
        MediaRecorder.current.ondatavailable= (e)=>{
            if(typeof e.data === 'undefined'){return}
            if(e.data.size === 0){return}
            localAudioCHunks.push(e.data)
        }
        setAudioChunks(localAudioCHunks)
    }
    async function stopRecording(){
        setRecording('not-recording')
        console.log('stopped recording')
        mediaRecorder.current.stop()
        mediaRecorder.current.onstop = ()=>{
            const audioblob = new Blob(audioChunks, {type: mediaType})
            setAudioStream(audioblob)
            setAudioChunks([])
            setDuration(0)
        }
    }
    useEffect(()=>{
        if(recording==='not-recording'){return}
        const interval = setInterval(()=>{
            setDuration(curr=> curr + 1)
        }, 1000)

        return ()=> clearInterval(interval)
    }, [recording])
  return (
    <main className='flex flex-1 p-4 flex-col justify-center gap-3 sm:gap-4 md:gap-5 text-center'>
        <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Free<span className='text-blue-400 bold'>Scribe</span></h1>  
        <h3 className='font-medium md:text-lg'>Record <span className='text-blue-400'> &rarr; </span>
            Transcribe
            <span className='text-blue-400'> &rarr; </span>
            Translate
        </h3>
        <button 
        onClick={recording === 'recording'? stopRecording: startRecording} 
        className='flex flex-row item-center text-base justify-between specialBtn rounded-xl px-4 py-2 gap-4 mx-auto w-72 max-w-full my-4'>
            <p className='text-blue-400'>{recording==='recording'?<span>Stop Recording</span>:<span>Record</span>}</p>
            <div className='flex items-center gap-2'>
                {duration===0?"":<p className='text-sm'>{duration}s</p>}
                <i className={"fa-solid duration-200 fa-microphone-lines "+(recording==='recording'?"text-rose-300":"")}></i>
            </div>
        </button>
        <p className='text-base'>Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'>Upload
            <input onChange={(e)=>{
                const tempFile = e.target.files[0]
                setFile(tempFile)
            }} className='hidden' type='file' accept='.mp3,.wave'></input></label> an mp3 file</p>
        <p className='italic text-slate-400'>Free now free forever!!!</p>  
    </main>
  )
}

export default Homepage
