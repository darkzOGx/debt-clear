import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// Optimize for faster initial render
const root = ReactDOM.createRoot(document.getElementById('root'))

// Use concurrent features for better performance
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) 