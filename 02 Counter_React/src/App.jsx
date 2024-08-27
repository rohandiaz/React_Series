import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

      let [counter,setCounter] = useState(10)


      // let counter=5

      const addValue= () =>{
        if(counter<20){
          // console.log("clicked",counter);
          counter=counter+1;
          setCounter(counter)
        }
        else{
          console.log("Counter cannot go above 20");
          
        }
        
        
      }

      const removeValue= ()=>{
        if(counter>0)
        setCounter(counter-1);
      else
        console.log("Counter cannot go below 0");
        
      }

  return (
    <>
       <h1>Rohan and React</h1>
       <h2>Counter Value: {counter}</h2>
       <button onClick={addValue}>Add Value {counter}</button>
       <br />
       <button onClick={removeValue}>Remove Value {counter}</button>
       <p>Footer {counter}</p>
    </>
   
  )
}

export default App
