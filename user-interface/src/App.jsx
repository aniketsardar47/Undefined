import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import './App.css'

import JoySignInSideTemplate from './login/JoySignInSide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <JoySignInSideTemplate />
    </>
  )
}

export default App
