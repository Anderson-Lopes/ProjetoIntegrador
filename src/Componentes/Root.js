import React from 'react';
import {Router, Switch, Route} from 'react-router';
import {history} from '../History';

import Login from '../Pages/Login';
import Home from '../Pages/Home';


const Root = () => (
            <Router history={ history }>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
);

export default Root;