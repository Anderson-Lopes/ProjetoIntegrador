import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Header from '../Componentes/Headers';

const CadastroAnimal = (props) => {
    return (
<>
    <Header/>
    <Form>
        <FormGroup>
            <Label for="exampleName">Nome</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Nome do Pet" />
        </FormGroup>
        <FormGroup tag="fieldset">
            <legend>Espécie</legend>
            <FormGroup check>
            <Label check>
                <Input type="radio" name="radio1" />{' '}
                Cachorro
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="radio" name="radio1" />{' '}
                Gato
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="radio" name="radio1" />{' '}
                Ave
            </Label>
            </FormGroup>
        </FormGroup>
      <Button>Submit</Button>

    </Form>
</>
    )
};

export default CadastroAnimal;