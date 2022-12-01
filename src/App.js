import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Hamburger from './components/Hamburger';
import Home from './pages/Home';
import Products from './pages/Products';
import Partners from './pages/Partners';
import Team from './pages/Team';
import Location from './pages/Location';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div className="App">
      <TopBar
        changeState={() => setMenuToggle(!menuToggle)}
        menuToggle={menuToggle}
      />
      <Hamburger statusBar={menuToggle} />
      <div className="sections">
        <Home />
        <Products />
        <Partners />
        <Team />
        <Contact />
        <Location />
      </div>
    </div>
  );
}

export default App;
