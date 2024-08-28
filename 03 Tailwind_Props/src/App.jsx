import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Rohan",
    age: 16
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-4'>Tailwind Test</h1>
      
      <Card username="Rohan" description="He is a genius." />
      <Card username="Jeet" description="He is genius ++." />
      
      
       
      
  
    </>
  )
}

export default App
