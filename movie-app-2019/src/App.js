import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
