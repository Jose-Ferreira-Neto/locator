import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import NavBar from './components/partials/NavBar'
import UserPainel from './components/partials/UserPainel'
import Soon from './components/partials/Soon'
import Schedule from './components/partials/Schedule';
import Contact from './components/partials/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Soon/>}/>
        <Route path='user' element={<UserPainel/>}/>
        <Route path='schedule' element={<Schedule/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
      <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
