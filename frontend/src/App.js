import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router basename="/transaction-tracking">
      <Switch>
        <Route exact path="/" component={logo} />
        <Route exact path="/transaction-tracking" component={logo} />
      </Switch>
    </Router>
  );
}

export default App;
