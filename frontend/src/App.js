import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Import the created component
import TransactionTracking from './TransactionTracking'; 

function App() {
  return (
    <Router basename="/transaction-tracking">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transaction-tracking" element={<TransactionTracking />} />
      </Routes>
    </Router>
  );
}

export default App;
