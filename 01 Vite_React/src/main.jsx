import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom React App!!!</h1>
    </div>
  )
}
const anotherElement=(
  <a href="https://www.google.co.in/?authuser=1" target='_blank'>Visit Google</a>
)
const anotherUser="Rohandiaz"

const reactElement=React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'Click me to visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
