import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Project from './components/Project';

import User from './components/User';
import PrivateRoute from './components/PrivateRoute';
import TestProjectsFetch from './components/TestProjectsFetch'
import './App.css';
import TestRegister from './components/TestRegister'


export default function App() {
  

  return (
    <Router>
      
      <div className="App">
        <PrivateRoute exact path="/projects"  component={Project}  />
       
        <Route exact path="/users/:id" component={User} />
        <PrivateRoute exact path="/" component={Login} />
<PrivateRoute exact path="/fetch" component={TestProjectsFetch} />
        {/* 
          Build a PrivateRoute component that will 
          display Projects  when you're authenticated 
        */}
        
      </div>
    </Router>
  );
}


