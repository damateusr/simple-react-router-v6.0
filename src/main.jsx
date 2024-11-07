import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<BrowserRouter>*/}
      <RouterProvider router={router}/>
    {/*</BrowserRouter>*/}
  </StrictMode>,
)
