import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./authentication/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegistrationPage from "./authentication/RegistrationPage";
import CreateEnrolleePage from "./enrollee/pages/CreateEnrolleePage";
import EnrolleeRouter from "./enrollee/EnrolleeRouter";
import DefaultPageLayout from "./shared/pagelayout/defaultpage/DefaultPageLayout";
import {ENROLLEES} from "./enrollee/const";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/login">
                  <LoginPage/>
              </Route>
              <Route exact path="/registration">
                  <RegistrationPage/>
              </Route>
              <Route exact path="/">
                  <DefaultPageLayout>
                      <div>Hello :))</div>
                  </DefaultPageLayout>
              </Route>
              <Route path={`/${ENROLLEES}`}>
                  <EnrolleeRouter/>
              </Route>

          </Switch>
      </BrowserRouter>
  );
}

export default App;
