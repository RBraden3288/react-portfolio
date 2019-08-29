import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/resume" component={Resume}></Route>
      </Router>
    </div>
  );
}

export default App;
