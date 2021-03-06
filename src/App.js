import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./authentication/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegistrationPage from "./authentication/RegistrationPage";
import EnrolleeRouter from "./enrollee/EnrolleeRouter";
import DefaultPageLayout from "./shared/pagelayout/defaultpage/DefaultPageLayout";
import { ENROLLEES } from "./enrollee/const";
import { CT_CERTIFICATES } from "./ct-certificate/const";
import CtCertificateRouter from "./ct-certificate/CtCertificateRouter";
import { EDUCATION_DOCUMENT } from "./education-document/const";
import EducationDocumentRouter from "./education-document/EducationDocumentRouter";
import Page403 from "./shared/pages/Page403";
import { AuthorizationProvider } from "./shared/authorization/AuthorizationContext";

function App() {
  return (
    <BrowserRouter>
      <AuthorizationProvider>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/registration">
            <RegistrationPage />
          </Route>
          <Route exact path="/">
            <DefaultPageLayout>
              <div>Hello :))</div>
            </DefaultPageLayout>
          </Route>
          <Route path={`/${ENROLLEES}`}>
            <EnrolleeRouter />
          </Route>
          <Route path={`/${CT_CERTIFICATES}`}>
            <CtCertificateRouter />
          </Route>
          <Route path={`/${EDUCATION_DOCUMENT}`}>
            <EducationDocumentRouter />
          </Route>
          <Route exact path="/403">
            <Page403 />
          </Route>
        </Switch>
      </AuthorizationProvider>
    </BrowserRouter>
  );
}

export default App;
