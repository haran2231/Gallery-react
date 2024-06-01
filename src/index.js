import React from 'react';
import ReactDOM from 'react-dom/client';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header></Header>
  <Gallery></Gallery>
  </>
);


