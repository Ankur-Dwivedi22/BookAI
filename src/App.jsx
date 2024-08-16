import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import Card2 from './components/Card2'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className='bg-gradient-to-br from-[#1e0533] to-[#110a1f]  w-full '>
        {/* <Cards /> */}
        <Card2 />
      </div>
  
  )
}

export default App
