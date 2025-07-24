import { useState } from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Sidebar/>
    </>
  )
}

export default App
