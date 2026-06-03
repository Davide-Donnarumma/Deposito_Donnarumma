import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductCard } from './ProductCard.jsx'
import { Dashboard } from './Dashboard.jsx'
import { AlertBox } from './AlertBox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br></br>
    <ProductCard></ProductCard>
    <br></br>
    <Dashboard></Dashboard>
    <br></br>
    <AlertBox></AlertBox>
  </StrictMode>,
)
