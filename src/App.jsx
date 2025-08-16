import './App.css'
import { HelmetProvider } from 'react-helmet-async'
import Pages from "./pages/index.jsx"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <HelmetProvider>
      <Pages />
      <Toaster />
    </HelmetProvider>
  )
}

export default App 