import React from "react";

//importando componentes em React
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Post from "./pages/post";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/post" component={Post} />
      </Switch>
    </BrowserRouter>
  );
}
