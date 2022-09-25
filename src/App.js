import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage, ProjectsPage, ArticlesPage, InformationPage } from "./pages";
import { Header} from "./components/layout";
import classnames from "./App.module.scss";

const App = () => (
  <BrowserRouter>
    <div className={classnames.container}>
      <Header />
      <div className={classnames.content}>
        <main className={classnames.main}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/articles" component={ArticlesPage} />

            <Route path="/info" component={InformationPage} />
          </Switch>
        </main>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
