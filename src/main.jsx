import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import SimpleApp from '@/SimpleApp.jsx'
import '@/index.css'

console.log('React app starting...')

try {
    const root = document.getElementById('root')
    console.log('Root element:', root)
    
    ReactDOM.createRoot(root).render(
        <HelmetProvider>
            <SimpleApp />
        </HelmetProvider>
    )
    console.log('React app rendered successfully')
} catch (error) {
    console.error('Error rendering React app:', error)
} 