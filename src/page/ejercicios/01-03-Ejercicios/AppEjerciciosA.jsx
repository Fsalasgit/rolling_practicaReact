import React from 'react'
import Card from 'react-bootstrap/Card';
import AppEjA from './auxiliares/AppEjA';
import AppProps from './auxiliares/appProps';
import AppConUseState from './auxiliares/AppConUseState';


const AppEjerciciosA = () => {
  return (
    <>

    <main className="container">
      <div className="row">

        <Card border="dark col-12 mt-2">
          <Card.Header>1 - Hello world - Dificultad:  🟢</Card.Header>
          <Card.Body>
            <Card.Title>Crear una aplicación web con un componente que muestre en pantalla el mensaje “Hello World”.</Card.Title>
            <Card.Text>
              <AppEjA />
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="dark col-12 mt-2">
          <Card.Header>2 - Hello world (parte 2)- Dificultad:  🟢</Card.Header>
          <Card.Body>
            <Card.Title>Modificar el componente anterior y enviar mediante props el valor “My friend” de manera que el mensaje quede de la siguiente forma:</Card.Title>
            <Card.Text>
              <AppProps mod="my friends" />
            </Card.Text>  
          </Card.Body>
        </Card>

        <Card border="dark col-12 mt-2">
          <Card.Header>3 - Hello world (parte 3) - Dificultad:  🟢</Card.Header>
          <Card.Body>
            <Card.Title>Modificar el programa anterior agregando al componente un state con la clave msj: “(from changed state)”, además agregar un botón al presionar este botón (onClick), el state de la clave msj se debe mostrar por pantalla de la siguiente manera: </Card.Title>
            <Card.Text>
              <AppConUseState />
            </Card.Text>  
          </Card.Body>
        </Card>

      </div>
    </main>

    
    </>
  )
}

export default AppEjerciciosA