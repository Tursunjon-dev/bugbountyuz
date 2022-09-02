import React from 'react';
import About from './pages/About'
import Rules from './pages/Rules'
import Team from './pages/Team'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
const App = () => {
  return (
    <>
    {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/team'  element={<Team />} />
        <Route path='/rules'  element={<Rules />} />
      </Routes>
    </>
  );
};


export default App;
