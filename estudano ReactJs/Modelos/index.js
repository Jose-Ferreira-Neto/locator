import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Painel from './components/Painel'
import App from './App';
import Element from './components/Element'
import NotFound from './components/NotFound'
import Cargo from './components/Cargo'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
ReactDOM.render(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Painel/>}>
      <Route path='app' element={<App/>}/>
      <Route path='cargo' element={<Element/>}>
        <Route path=':dataNumber' element={<Cargo/>}/>
      </Route>
      <Route index element={<p>ESCOLHA O CARGO</p>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  </Routes>
</BrowserRouter>,

  document.getElementById('root')
);
