import React from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from '../Componentes/Headers';

const Login = (props) => {
  return (
  <>
    <Header/><br></br><br></br><br></br>
    <div className='Form'>
      <Container className='Form'>        
      <Form>
        <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <br></br><br></br>

        <Button color="success" href="/home">Junte-se ao time dos Heróis pelos Animais</Button>
      </Form>
      </Container>
    </div>
  </>
  );
}

export default Login;