import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Video from "./Video";
import Navbar from "./Components/Navbar";
import Horace from "./Components/Horace";

function App() {
  return (
    <div className="mainApp">
      <Navbar />
      <Route component={Horace} exact path="/horace" />
      <Route component={Video} exact path="/" />
    </div>
  );
}

export default App;
