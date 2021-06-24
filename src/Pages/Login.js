import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from '../Componentes/Headers';

const Login = (props) => {
  return (
    <>
        <Header/>
        <div className='Form'>        
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

        <Button>Submit</Button>
        </Form>
        </div>
    </>
  );
}

export default Login;