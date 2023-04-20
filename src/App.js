import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./pages/Auth/Login/Login.jsx";
// import SignUp from "./pages/Auth/SingUp/SingUp.jsx";

// import { Routes, Route } from "react-router-dom";

const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      <BrowserRouter history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/auth" component={Auth} />
            <Route path="/login" component={Login} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
