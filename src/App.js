import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Inventory from './pages/Inventory'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/inventory" component={Inventory} />
      </div>
    </Router>
  );
}

export default App;
