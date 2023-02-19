import logo from './logo.svg';
import {Route, Routes, Navigate} from 'react-router-dom'; 
import './App.css';
import React from 'react';
import Store from './Store';
import Header from './Header';
import StoreItem from './StoreItem';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Routes>
            <Route exact path="/" element={<Store />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/products/:id" element={<StoreItem />} />
            <Route path="*" element={<Navigate to="/" replace />}
            />
        </Routes>
      </header>
    </div>
  );
}

export default App;
