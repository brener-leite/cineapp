import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Docs from '../pages/Docs';

const Routes = () => {
    return (
        <Switch>
            <Redirect exact to="/home" from="/" />
            <Route path="/home" component={Home} />
            <Route path="/docs" component={Docs} />
        </Switch>
    );
}

export default Routes;