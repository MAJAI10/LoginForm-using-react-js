import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import React from "react";
import "./App.css";
import "./function.js";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside"></div>
          {/* light blue */}
          <div className="App__Form">
            {/* dark blue */}

            <div className="PageSwitcher">
              {/* dark blue buttons */}
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className=" PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className=" PageSwitcher__Item"
              >
                Sing Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                {" "}
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}></Route>

            <Route path="/sign-in" component={SignInForm}>
              {/* <h1> Sign In</h1> */}
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
