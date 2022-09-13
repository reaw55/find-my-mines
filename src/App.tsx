import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Name from './pages/Name';
import Menu from './pages/Menu';
import Game from './pages/Game';
import Result from './pages/Result';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Name />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/game" element={<Game />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
