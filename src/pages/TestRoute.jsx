import React from 'react';

export default function TestRoute() {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'red', color: 'white' }}>
      <h1>TEST ROUTE WORKING</h1>
      <p>If you can see this, React Router is working correctly.</p>
      <p>Current URL: {window.location.href}</p>
      <p>Current path: {window.location.pathname}</p>
    </div>
  );
}