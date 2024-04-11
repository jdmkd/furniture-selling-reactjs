import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
// import './App.css';

import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import QuoteSection from './components/QuoteSection';
import MainProductList from './components/MainProductList';
import ProductList from './components/ProductList';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/About-Us" element={<Contacts />} />
      {/* <Route path="/Sevices" element={<Settings />} /> */}
      <Route path="/Product" element={<ProductList />} />
      {/* <Route path="/Gallary" element={<Gallary />} /> */}
      <Route path="/Contact-us" element={<Contacts />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>

    <BrowserRouter>
      <Header />
      <ImageSlider />
      <QuoteSection />
      <MainProductList />
      <ProductList />
      <Contacts />
      <Footer />

    </BrowserRouter>
  </div>
  );
}

export default App;
