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
                <Accordion.Header>2 - Hello world (parte 2)- Dificultad:⭐</Accordion.Header>
                <Accordion.Body>
                    <p>Modificar el componente anterior y enviar mediante props el valor “My friend”.</p>  
                    <Link to="/ejercicio-1-3">ver solucion...</Link>                  
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>3 - Hello world (parte 3) - Dificultad:⭐</Accordion.Header>
                <Accordion.Body>
                    <p>Modificar el programa anterior agregando al componente un state con la clave msj: “(from changed state)”, además agregar un botón al presionar este botón (onClick).</p>  
                    <Link to="/ejercicio-1-3">ver solucion...</Link>                  
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>4 - Lista de tareas - Dificultad:⭐</Accordion.Header>
                <Accordion.Body>
                    <p>Crear una aplicación web que  muestre una lista de tareas, al ingresar una tarea en el input y presionar enter, esta tarea se debe mostrar en una lista.</p>  
                    <Link to="/ejercicio-4-5">ver solucion...</Link>                  
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>5 - Lista de tareas - Dificultad:⭐⭐</Accordion.Header>
                <Accordion.Body>
                    <p>Modifica el programa anterior para que las tareas se puedan almacenar en el localstorage.</p>  
                    <Link to="/ejercicio-4-5">ver solucion...</Link>                  
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    </>
  )
}

export default IndexAcordeon