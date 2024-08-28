import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'
// axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// axios.defaults.headers.common['Authorization']=`Bearer ${process.env.NODE_ENV.REACT_APP_ACCESS_TOKEN}`
// axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`;

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
   </BrowserRouter>
  </Provider>
  
  
)
