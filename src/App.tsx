
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { TheMomentOfClarity as Clarity } from './pages/TheMomentOfClarity.tsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/The-Moment-of-Clarity" element={ <Clarity/> }/> 
      </Routes>
    </Router>
  )
}

export default App
