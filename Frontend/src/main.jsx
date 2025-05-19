import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider.jsx';

// 👇 Force light theme
document.documentElement.setAttribute('data-theme', 'light');

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <AuthProvider>
      <div className='dark:bg-slate-900 dark:text-white'>
    <App />
    </div>
   </AuthProvider>
   </BrowserRouter>
   
 
)
