import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.scss'
import { Provider } from "react-redux";
import store from "../store/index.js";
import { BrowserRouter } from "react-router";
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GoogleOAuthProvider clientId='650062736141-pb64o0ubh8ejek13gogejjb9t5r6sdf0.apps.googleusercontent.com'>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </GoogleOAuthProvider>
    </StrictMode>,
)
