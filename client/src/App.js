import React from 'react'
import {useEffect, useState} from 'react'
  
const App = () => {

  const [data, setData] = useState();
  const [message, setMessage] = useState("");

  //sampel 1
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  //sampel 2
  useEffect(() => {
    fetch("http://localhost:5000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  
  return (
    <div className="min-h-screen w-full bg-gray-400 flex flex-col justify-center items-center">
      <section className='text-4xl text-bold '>
        <p>Hallo Node server for Express</p>
      </section>
      <section className='mt-8 text-red-500 text-2xl font-medium' >
          <p>{!data ? "Loading..." : data.users}</p> 
      </section>
      <section className='mt-8 text-red-500 text-2xl font-medium'>
          <p>{message}</p>
      </section>
    </div>
  )
}

export default App
