import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdSlideshow } from "react-icons/md";
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const SpanButton = styled.span`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`

const OffcambasEjercicios = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <SpanButton>
    <Button variant="dark" onClick={handleShow} >
      <p>Index</p><MdSlideshow size={20}/>
    </Button>   
    </SpanButton>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
          <li><Link to="/ejercicio-1-3">Ejercicio 1 a 3</Link></li>
          <li><Link to="/ejercicio-4-5">Ejercicio 4 a 5</Link></li>
          </ul>

          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffcambasEjercicios