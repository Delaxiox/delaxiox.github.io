// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Credits from './pages/Credits';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout><Home/></Layout>} />
        <Route path="/about" element={<Layout><About/></Layout>} />
        <Route path="/contact" element={<Layout><Contact/></Layout>} />
        <Route path="/credits" element={<Layout><Credits/></Layout>} />
        <Route element={<Layout><NotFound/></Layout>} />  
      </Routes>
    </Router>
  );
}

export default App;