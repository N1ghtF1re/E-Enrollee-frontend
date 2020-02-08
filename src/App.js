import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./authentication/LoginPage";
import {BrowserRouter, Route} from "react-router-dom";
import RegistrationPage from "./authentication/RegistrationPage";

function App() {
  return (
      <BrowserRouter>
          <Route exact path="/login">
              <LoginPage/>
          </Route>
          <Route exact path="/registration">
              <RegistrationPage/>
          </Route>
          <Route exact path="/">
              <div>main page</div>
          </Route>
      </BrowserRouter>
  );
}

export default App;
