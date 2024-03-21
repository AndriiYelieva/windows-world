import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, NotFound, Services } from './pages';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={(<Home />)} />
        <Route path="/services" element={(<Services />)} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
