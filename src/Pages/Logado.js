import React from 'react';
import { Button, Form,FormText, FormGroup, Label, Input} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {} from 'bootstrap';
import Header from '../Componentes/Headers';

import 'bootstrap/dist/css/bootstrap.min.css';

const Logado = (props) =>{
    <>
    <Header/>;
    <div>
        <h3>Bem Vindo</h3><br></br>
        <div>
            <h5>Animais Cadastrados do logado.</h5>
        </div>
        <div>
            <h5>Área para deletar Pets!</h5>
        </div>
    </div>

    </>

}
export default Logado;