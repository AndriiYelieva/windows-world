import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import { Home, NotFound, Services } from './pages';
// import { Logo } from './Components';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/windows-world" element={(<Home />)} />
        <Route path="/windows-world/services" element={(<Services />)} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
