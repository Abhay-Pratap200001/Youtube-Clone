import {Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import { useAuth } from "./context/AuthProvider";
import Navbar from './components/Navbar';
import Loading from './components/Loading';

function App() {
  const { loading } = useAuth();

  return (
    <>
    {loading && <Loading/>}
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
