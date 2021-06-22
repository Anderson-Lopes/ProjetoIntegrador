import React from 'react';
import {Router, Switch, Route} from 'react-router';
import {} from 'react-router-dom'
import {history} from '../History';

import Public from '../Pages/Public';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Cadastro from '../Pages/Cadastro';
import Animais from '../Componentes/animais';
import NotFound from '../Pages/NotFound';


const Root = () => (
            <Router history={ history }>
                <Switch>
                    <Route exact path="/" component={Public}/>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/cadastro" component={Cadastro}/>
                    <Route path="/animais" component={Animais}/>
                    <Route  path="/login" component={Login}/>
                    <Route  path="/notfound" component={NotFound}/>
                    
                </Switch>
            </Router>
);

export default Root;