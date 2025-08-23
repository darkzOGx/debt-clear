import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from '@/App.jsx'
import '@/index.css'

console.log('React app starting...')

try {
    const root = document.getElementById('root')
    console.log('Root element:', root)
    
    ReactDOM.createRoot(root).render(
        <HelmetProvider>
            <App />
        </HelmetProvider>
    )
    console.log('React app rendered successfully')
} catch (error) {
    console.error('Error rendering React app:', error)
} 