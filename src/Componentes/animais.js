import React from 'react';
import { Button } from 'reactstrap';
import Header from './Headers';

const Animais = (props) => {
  return (
    <>
    <Header/>
    <div className="container">

        <h2>Animais</h2>

        <p>Bem Vindo! Que tal Cadastrar-mos o animal perdido?</p>

        <p>Um copo com água e um pote de ração não se nega a nenhum pet, não é mesmo?</p>
        <Button color='secondary' href="/animais/cadastropet">Cadastrar Animal Perdido</Button>{''}
        {/* <button type='submit' className="btn btn-primary" href="..">Cadastrar Animal perdido</button> */}
    </div>
    </>
  )};

export default Animais;