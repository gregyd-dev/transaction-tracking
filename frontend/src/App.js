import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router basename="/transaction-tracking">
      <Routes>
        <Route exact path="/" component={logo} />
        <Route exact path="/transaction-tracking" component={logo} />
      </Routes>
    </Router>
  );
}

export default App;
