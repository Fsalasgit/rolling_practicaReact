import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const AppConUseState = () => {
    const [nuevoMsj, setnuevoMsj] = useState("")
    
    const agregaMsj = () => {
        setnuevoMsj(" (from changed state)")
    }
    const borrarMsj = () => {
        setnuevoMsj("")
    }


  return (
    <>
    
    <br/>
    <>“Hello World{nuevoMsj}!”</>
    <br/>
    <br/>
    <Button variant="outline-primary" onClick={agregaMsj}>mostrar</Button>
    <Button variant="outline-danger" onClick={borrarMsj} className='ms-2'>borrar</Button>
    </>
  )
}

export default AppConUseState