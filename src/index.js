import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar/NavBar';
import TopHeader from './components/TopHeader/TopHeader';
import InnerHeader from './components/InnerHeader/InnerHeader';
import Website from './components/Website/Website';
import DataSide from './components/DataSide/DataSide';
import Review from './components/Review/Review';
import Customers from './components/Customers/Customers';
import Footer from './components/Footer/Footer';
import FreeService from './components/FreeService/FreeService';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <NavBar />
     < TopHeader/>
     < InnerHeader/>
     < Website/>
     < DataSide/>
     < Review/>
     < Customers/>
     < FreeService/>
     < Footer/> 


  </React.StrictMode>
);


reportWebVitals();
