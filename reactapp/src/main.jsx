import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/index.jsx' //The export default was removed in index.jsx. Then is necessary adction "{}"  at "Home"
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
