import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TransactionTracking from './components/TransactionTracking';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transaction-tracking" element={<TransactionTracking />} />
    </Routes>
  );
}

export default App;
