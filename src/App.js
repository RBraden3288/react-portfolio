import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import Resume from './pages/Resume';

class App extends React.Component {
  render(){
    return(      
      <div className="App">
      <Router>
        <Route exact path='/' component={Main} />
        <Route path="/resume" component={Resume} />
      </Router>
    </div>
    )
  }
}

export default App;
