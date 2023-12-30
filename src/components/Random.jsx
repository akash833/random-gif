import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';

function Random() {
  const {gif,loader,fetchGif} = useGif();

  return (
    <div className="border border-black rounded-md my-10 mx-auto w-1/2 flex flex-col items-center px-10 py-4 bg-green-500">
      <div className="underline mb-4 font-bold">A RANDOM GIF</div>
      {loader ? <div className='spinner'></div> : <img className="border border-black w-1/2 h-56" src={gif} />}
      <button className="w-full bg-yellow-600 mt-4 text-center py-2 rounded-lg font-semibold" onClick={fetchGif}>Generate</button>
    </div>
  )
}

export default Random;
