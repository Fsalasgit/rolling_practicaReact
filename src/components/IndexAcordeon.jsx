import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const IndexAcordeon = () => {
  return (
    <>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>1 - Hello world - Dificultad:⭐</Accordion.Header>
                <Accordion.Body>
                    <p>Crear una aplicación web con un componente que muestre en pantalla el mensaje “Hello World”.</p>  
                    <Link to="/ejercicio-1-3">ver solucion...</Link>                  
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>1 - Hello world - Dificultad:⭐</Accordion.Header>
                <Accordion.Body>
                    <p>Crear una aplicación web con un componente que muestre en pantalla el mensaje “Hello World”.</p>  
                    <Link to="/">ver solucion...</Link>                  
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    </>
  )
}

export default IndexAcordeon