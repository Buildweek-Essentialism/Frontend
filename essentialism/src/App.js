import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Projects from "./components/Projects";
import User from "./components/User";
import PrivateRoute from "./components/PrivateRoute";
import ProjectsFetch from "./components/ProjectsFetch";
import "./App.css";
import Register from "./components/Register";

export default function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute exact path="/projects" component={Projects} />
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/fetch" component={ProjectsFetch} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}
