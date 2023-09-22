import { useState } from 'react'
import './App.css'
import Posts from './Posts'
function App() {

  return (
    <>
       
      <h2>React Core Concepts Recap</h2>
       <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Side Effect: load date</li>
       </ol>
       <hr />
       <Posts></Posts>
    </>
  )
}

export default App
