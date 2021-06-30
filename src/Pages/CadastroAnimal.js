import React from 'react';
import { Button, Container, Form,FormText, FormGroup, Label, Input} from 'reactstrap';
import Header from '../Componentes/Headers';

const CadastroAnimal = (props) => {
    return (
<>
    
    <Header/><br></br><br></br>
    <div className='Form'>
    <Container className='Form'>
    <Form>
        <FormGroup>
            <Label for="exampleName">Nome</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Nome do Pet" />
        </FormGroup><br></br>
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
        <FormGroup>
        <Label for="exampleFile">Escolher Arquivo</Label>
        <Input type="file" name="file" id="exampleFile" /><br></br>
        <FormText color="text-danger">
          Insira aqui uma imagem do Pet onde você o avistou!
        </FormText>
      </FormGroup><br></br>
      <Button color='info'>Enviar Meu Pet no Achadinho Pet's.</Button>

    </Form>
    </Container>
    </div>
</>
    )
};

export default CadastroAnimal;