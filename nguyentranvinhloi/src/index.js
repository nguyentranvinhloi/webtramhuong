import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from 'react-use-cart';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
<title>Trầm hương Đắc Lợi</title>
root.render(
  <React.StrictMode>
    <CartProvider>
      <GoogleOAuthProvider clientId="204985801261-32d41f1sij0lfrlcnbfuhdsv60i3kh2j.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </CartProvider>

  </React.StrictMode>
  , document.getElementById('root'));

reportWebVitals();


