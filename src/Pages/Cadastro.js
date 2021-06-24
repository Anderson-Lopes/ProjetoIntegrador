import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Header from '../Componentes/Headers';

const Cadastro = (props) => {
  return (
<>
    <Header/>
    <div className='Form'>
    <Form className='Forma'>
        <FormGroup>
            <Label for="exampleNome">Nome</Label>
            <Input type="text" name="nome" placeholder="Seu Nome aqui Por Favor" />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Seu e-mail" />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Senha</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Sua Senha" />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Confrime sua Senha</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Confirme Sua Senha" />
        </FormGroup>

       <FormGroup check>
            <Label check>
            <Input type="checkbox" />{' '}
            Confirmo os Termos
            </Label>
        </FormGroup>
        <br></br>
        <Button color='success'>Fazer parte deste Mundo Pet</Button>
    </Form>
    </div>
</>
  )
};

export default Cadastro;