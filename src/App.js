// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SSRImages from './pages/ssrImages';
import CSRImages from './pages/csrImages';
import './index.css'; // Import regular CSS file

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header>
          <nav>
            <Link to="/" className="font-bold text-xl">SSR vs CSR Example</Link>
            <Link to="/ssr-images">SSR Images</Link>
            <Link to="/csr-images">CSR Images</Link>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/ssr-images" element={<SSRImages />} />
            <Route path="/csr-images" element={<CSRImages />} />
            <Route path="/" element={
              <div>
                <h1>Welcome to SSR vs CSR Example</h1>
                <p>Explore the differences between Server Side Rendering (SSR) and Client Side Rendering (CSR) in a React application.</p>
                <div>
                  <Link to="/ssr-images">View SSR Rendered Images</Link>
                  <br></br>
                  <Link to="/csr-images">View CSR Rendered Images</Link>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 SSR vs CSR Example. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;