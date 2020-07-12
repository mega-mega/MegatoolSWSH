import React from "react";
import { Provider } from "react-redux";
import store from "./src/Store";
import SampleHome from "./sampleHome";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
