import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./redux/store";

import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import SavedImage from "./Components/Pages/SavedImage";
import ImageScroll from "./Components/Pages/Image";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/saved-images" component={SavedImage} />
          <Route path="/image/:id" component={ImageScroll} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
