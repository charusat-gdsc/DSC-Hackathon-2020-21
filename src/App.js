/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Judges from "./Pages/Judges/Judges";
import Members from "./Pages/Members/Members";
const App = () => {
  return (
    <Switch>
      <Route path="/members" exact component={Members} />
      <Route path="/judges" exact component={Judges} />
      <Route path="/" component={Homepage} />
    </Switch>
  );
};

export default App;
