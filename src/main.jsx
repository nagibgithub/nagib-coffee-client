import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

import router from './routes/Routes'
import {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
