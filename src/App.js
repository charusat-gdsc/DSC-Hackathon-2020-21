/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
// import Judges from "./Pages/Judges/Judges";
// import Members from "./Pages/Members/Members";
import Teams from "./Pages/Teams/Teams";
const App = () => {
  return (
    <Switch>
      <Route path='/teams' exact component={Teams} />
      {/* <Route path='/judges' exact component={Judges} /> */}
      {/* <Route path='/teams/:id' exact component={Members} /> */}
      <Route path='/' component={Homepage} />
    </Switch>
  );
};

export default App;
