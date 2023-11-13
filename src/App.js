// src/App.js
import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
