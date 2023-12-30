import axios from 'axios';
import React, { useState } from 'react'
import useGif from '../hooks/useGif';

function Tag() {
  const [tag,setTag] = useState('');
  const {gif,loader,fetchGif} = useGif(tag);

  return (
    <div className="border border-black rounded-md my-10 mx-auto w-1/2 flex flex-col items-center px-10 py-4 bg-blue-500">
    <div className="underline mb-4 font-bold uppercase">RANDOM {tag} GIF</div>
    {loader ? <div className='spinner'></div> : <img className="border border-black w-1/2 h-56" src={gif}/>}
    <input className="mt-4 w-full rounded text-lg text-center p-2 outline-none" value={tag} onChange={(e)=>setTag(e.target.value)}/>
    <button className="w-full bg-yellow-600 mt-4 text-center py-2 rounded-lg font-semibold" onClick={fetchGif}>Generate</button>
  </div>
  )
}

export default Tag;
