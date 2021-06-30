import React from 'react';
import Header from '../Componentes/Headers';

const Home = (props) =>{
    return (
    <>
        <Header/>
        <div>
            <h3>Bem Vindo</h3><br></br>
            <div>
                <h5>Animais Cadastrados do logado.</h5>
            </div>
            <div>
                <h5>Área para deletar </h5>
            </div>
        </div>
    </>
    )
};
export default Home;