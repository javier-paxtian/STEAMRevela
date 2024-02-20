import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogue from './components/Catalogue';
import Home from './components/Home';
import Game from './components/Game';
import Navbar from './components/global/Navbar.components';
import Footer from './components/global/Footer.components';

function App() {

  return (
    <>
      <div className='max-w-[1920px] m-auto scroll-smooth'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/catalogue" element={<Catalogue />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
