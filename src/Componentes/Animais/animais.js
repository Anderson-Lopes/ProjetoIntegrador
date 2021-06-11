import React from 'react';
import { Button } from 'reactstrap';

const Animais = (props) => {
  return (
  <div>
      <h3>Animais</h3>
        
      <p>Vamos incluir seu animalzinho perdinho aqui?</p>

      {/* <a href="" <button type="button" class="btn btn-primary"></button></a> */}
      <Button color="primary" onClick='../animais/cadastroanimais' >Cadastrar Animal perdido</Button>{' '}
</div>
  )};

export default Animais;