import React, { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import FullPageLayout from './layouts/FullPageLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Credits from './pages/Credits';
import NotFound from './pages/NotFound';
import FursonaCon from './pages/FursonaCon';

function App() {
  const [useHash, setUseHash] = useState(false);

  useEffect(() => {
    // If GitHub Pages serves 404, fallback to hash routing
    // Detect by checking if current path !== "/" and no matching file exists
    const path = window.location.pathname;
    if (path !== '/' && !path.includes('.')) {
      fetch(path)
        .then(response => {
          if (response.status === 404) {
            setUseHash(true);
          }
        })
        .catch(() => setUseHash(true));
    }
  }, []);

  const Router = useHash ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/about" element={<Layout><About/></Layout>} />
        <Route path="/contact" element={<Layout><Contact/></Layout>} />
        <Route path="/credits" element={<Layout><Credits/></Layout>} />
        <Route path="/fursonacon" element={<FullPageLayout><FursonaCon/></FullPageLayout>} />
        <Route path="*" element={<Layout><NotFound/></Layout>} />  
      </Routes>
    </Router>
  );
}

export default App;
