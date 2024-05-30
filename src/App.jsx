import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
  useEffect(()=> {
    document.body.classList.add("light");
  },[])

  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  )
}

export default App
