import { useState } from 'react'
import Counter from './Counter'
import './App.css'

function App() {

  return (
    <>
      <div className='d-flex justify-content-center align-items-center border bg-dark' style={{height:'100vh'}}>
        <Counter />
      </div>
    </>
  )
}

export default App
