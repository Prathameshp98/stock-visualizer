import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StockVisualizer from './StockVisualizer/StockVisualizer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StockVisualizer />
  </StrictMode>,
)
