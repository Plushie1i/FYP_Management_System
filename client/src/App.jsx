import { useState } from 'react'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

/*function App() {
  // src/App.jsx

  return (
    <div className="App">
      <SignupForm />
    </div>
  );


}

export default App
*/