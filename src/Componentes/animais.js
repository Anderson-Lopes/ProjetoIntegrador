import React from 'react';
import { Button } from 'reactstrap';
import Header from './Headers';

const Animais = (props) => {
  return (
    <>
    <Header/>
    <div className="container"><br></br><br></br>

        <h2>Animais</h2><br></br>

        <p>Bem Vindo! Que tal Cadastrar-mos o animal perdido?</p>

        <p>Um copo com água e um pote de ração não se nega a nenhum pet, não é mesmo?</p>
        <Button color='secondary' href="/criar">Cadastrar Animal Perdido</Button>{''}
        {/* <button type='submit' className="btn btn-primary" href="..">Cadastrar Animal perdido</button> */}
    </div>
    </>
  )};

export default Animais;