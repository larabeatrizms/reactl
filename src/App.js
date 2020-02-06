import React from "react";
//import api from "./services/api";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
