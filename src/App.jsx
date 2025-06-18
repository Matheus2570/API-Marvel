import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Detalhes from './pages/DetalhesHerois';
import Favoritos from './pages/Favoritos';
import NavBar from './components/NavBar';


function App() {
  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detalhes" element={<Detalhes/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App