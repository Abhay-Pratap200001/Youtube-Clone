import {Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import { useAuth } from "./context/AuthProvider";
import Navbar from './components/Navbar';

function App() {
  const { loading } = useAuth();

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
    </Routes>
    </>
  )
}

export default App
