import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute } from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";
import store, { history } from "./store";
import "./index.css";
import SignIn from "./users/SignIn";
import GroupsContainer from "./components/GroupsContainer"
import GroupShow from './components/GroupShow'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={GroupsContainer} />
        <Route component={GroupShow} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/batch/:batchNumber" component={GroupShow} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
