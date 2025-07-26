import { useState } from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import { useAuth } from './context/AuthProvider'


function App() {
  const {loading, data}=useAuth() //using auth data 
  console.log(loading)
  console.log(data);
  
  return (
    <>
    <Navbar/>
    <Sidebar/>
    </>
  )
}

export default App
