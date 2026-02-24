import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<GoogleOAuthProvider clientId='1076576648749-iajq1u0i42tr595og8aocrnb6mc98mrg.apps.googleusercontent.com'>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</GoogleOAuthProvider>
  </StrictMode>,
)
