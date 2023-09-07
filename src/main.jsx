import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import {BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <div className="dark">
          <App />
        </div>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
