import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: 'http://localhost:5173/dashboard'
      }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
