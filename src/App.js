import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './components/GOTLandingPage';
import CharaterDetailsSearch from './components/components/CharaterDetailsSearch';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={LandingPage} />
          <Route path="/characters" component={CharaterDetailsSearch} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
