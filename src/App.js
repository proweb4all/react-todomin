import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/alertState";
import { FirebaseState } from "./context/firebase/FirebaseState";

//import logo from './logo.svg';
//import './App.css';

function App() {
  const alert = {
    type: "@warning",
    text: "Text"
  };
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={alert} />
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/about"} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
