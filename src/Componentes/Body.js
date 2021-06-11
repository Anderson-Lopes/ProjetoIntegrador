import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, CardGroup, CardColumns, CardDeck
  } from 'reactstrap';
  
  const Body = (props) => {
    return (
      <div>
        <Card className='d-flex flex-column align-items-center flex-md-row '>
          <CardImg className='fotodog d-block' top width="100%" src="https://img.freepik.com/fotos-gratis/retrato-de-grupo-de-filhotes-adoraveis_53876-64778.jpg?size=626&ext=jpg&ga=GA1.2.1538381143.1614723433" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Mais que um objetivo, torna-se uma missão auxiliarmos para um companheiro, um amigo, um ser familiar seja encontrado, nosso objetivo é agir já, assim como um parente familiar nossos pets nos trazem alegria, emoção e paz, portanto vamos colaborar com cada integrante aqui para encontrarmos o seu pet fujão, solitário ou tirado de você! Se você avistou um pet com sinais de estar perdido adicione aqui os dados por favor, colabore com um humano desesperado em busca de seu pet!</CardTitle>
          </CardBody>
        </Card>
        <CardColumns>
        <Card className='d-flex flex-column align-items-center flex-md-row'>
        <CardImg variant="top" className= 'imgEsp' top width="100%" src="http://4.bp.blogspot.com/-9QMoDGOkNZM/UVw1npBNmPI/AAAAAAAAJZA/ZXs_7h8mtcA/s1600/ANF%C3%8DBIOS.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Anfíbios</CardTitle>
        </CardBody>
        </Card>
        <Card className='d-flex flex-column align-items-center flex-md-row'>
        <CardImg variant="top" className= 'imgEsp' top width="100%" src="http://1.bp.blogspot.com/-ZvH4r8bV6aQ/UlP5aUuNc5I/AAAAAAAAnNw/-JlMz63hpp0/s1600/ARTR%C3%93PODES,+CARACTER%C3%8DSTICAS+GERAIS+DOS+ARTR%C3%93PODES.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Artrópodes</CardTitle>
        </CardBody>
        </Card>
        <Card className='d-flex flex-column align-items-center flex-md-row'>
        <CardImg variant="top" className= 'imgEsp' top width="100%" src="https://thumbs.dreamstime.com/b/yellow-bird-29110651.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Aves</CardTitle>
        </CardBody>
        </Card>        
        <Card className='d-flex flex-column align-items-center flex-md-row'>
        <CardImg variant="top" className= 'imgEsp' top width="100%" src="https://thumbs.dreamstime.com/b/running-dogs-19923945.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Cachorros</CardTitle>
        </CardBody>
        </Card>
        <Card className='d-flex flex-column align-items-center flex-md-row'>
        <CardImg variant="top" className= 'imgEsp' top width="100%" src="https://thumbs.dreamstime.com/b/grey-cat-25625964.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Gatos</CardTitle>
        </CardBody>
        </Card>
        <Card className='d-flex flex-column align-items-center flex-md-row'>
        <CardImg variant="top" className= 'imgEsp' top width="100%" src="https://thumbs.dreamstime.com/b/iguana-19941342.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Iguanas</CardTitle>
        </CardBody>
        </Card>
        <Card className='d-flex flex-column align-items-center flex-md-row'>
        <CardImg variant="top" className= 'imgEsp' top width="100%" src="https://thumbs.dreamstime.com/b/tropical-fishes-closeup-colorful-swimming-aquarium-40893321.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Peixes</CardTitle>
        </CardBody>
        </Card>
        <Card className='d-flex flex-column align-items-center flex-md-row'>
        <CardImg variant="top" className= 'imgEsp' top width="100%" src="https://thumbs.dreamstime.com/b/reptil-animal-small-exotic-pet-farm-orange-skin-animal-reptil-animal-small-exotic-pet-169932685.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Répteis</CardTitle>
        </CardBody>
        </Card>
        <Card className='d-flex flex-column align-items-center flex-md-row'>
        <CardImg variant="top" className= 'imgEsp' top width="100%" src="https://thumbs.dreamstime.com/b/funny-portrait-group-farm-animals-isolated-white-background-111932587.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Outros</CardTitle>
        </CardBody>
        </Card>
        </CardColumns>
        

        </div>
  );
};

export default Body;