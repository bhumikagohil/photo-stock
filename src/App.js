import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import SavedImage from "./Components/Pages/SavedImage";
import ImageScroll from "./Components/Pages/Image";

const { persistor, store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/saved-images" component={SavedImage} />
            <Route path="/image/:id" component={ImageScroll} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
