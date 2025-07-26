import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Video from './video.jsx'
function Home() {
  return (
    <div className='flex'>
     <Sidebar/>
     <div>

      <Video/>

     </div>
    </div>
  )
}

export default Home