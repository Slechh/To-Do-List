import { useState } from 'react'


function App() {
  const a = new Date()
  return (
    <h1 className='text-9xl text-amber-300 font-bold'>{a.toLocaleDateString()}</h1>
  )
}

export default App
