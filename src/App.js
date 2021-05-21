import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Test from "./components/Test/Test";
import User from './components/User/User';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Home />
        </Route>
        <Route exact path="/test">
          <div className="d-flex">
            <Navigation />
            <Test />
          </div>
        </Route>
        <Route exact path="/user">
          <div className="d-flex">
            <Navigation />
            <User/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
