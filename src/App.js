import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/review">
            <Home />
          </Route>
          <Route path="/admin">
            <Home />
          </Route>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
