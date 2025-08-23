import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function TestPage() {
  return (
    <div style={{ backgroundColor: 'red', color: 'white', padding: '2rem', minHeight: '100vh' }}>
      <h1>REACT IS WORKING!</h1>
      <p>Current URL: {window.location.href}</p>
      <p>Current path: {window.location.pathname}</p>
    </div>
  );
}

function HomePage() {
  return (
    <div style={{ backgroundColor: 'green', color: 'white', padding: '2rem', minHeight: '100vh' }}>
      <h1>HOME PAGE WORKING!</h1>
      <p>React Router is functioning correctly</p>
      <a href="/test-simple" style={{ color: 'yellow' }}>Go to test page</a>
    </div>
  );
}

function SimpleApp() {
  console.log('SimpleApp rendering...');
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test-simple" element={<TestPage />} />
        <Route path="*" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default SimpleApp;