import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoriteFood, HelloGif, TestHeading } from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloGif />
    <TestHeading />
    <FavoriteFood />
  </StrictMode>,
)
