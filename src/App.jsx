import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const Home = () => {
    return <>este es el home</>
  }

  const Game = () => {
    return <>este es el game</>
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/catalago" element={<Game />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
