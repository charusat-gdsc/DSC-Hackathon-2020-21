/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";

const App = () => {
  return (
    <Switch>
      <Route path='/' component={Homepage} />
    </Switch>
  );
};

export default App;
