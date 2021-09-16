import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Scenes = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Dashboard {...props} />} />
      <Route path="*" render={() => {}}/>
    </Switch>
  );
};

export default withRouter(Scenes);