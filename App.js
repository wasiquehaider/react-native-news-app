import React, { Component } from "react";
import { Provider } from "react-redux";
import Router from "./app/config/routes";
import store from "./app/redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
