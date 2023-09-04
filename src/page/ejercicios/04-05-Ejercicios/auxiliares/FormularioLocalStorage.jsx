import React, { useState, useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { styled } from 'styled-components';
import { MdOutlineDeleteForever } from "react-icons/md";

let LiStyled = styled.li`
  list-style: none;
  text-transform: uppercase;
  background-color: #c5c5c5;
  margin-bottom: 0.1rem;
  display: flex;
  align-items: center;
  border-radius: 10px;
`

let PList = styled.p`
  width: 90%;
  padding: 1.2rem 0 0 0.7rem;
`

let BotonDelete = styled.button`
  background: none;
  border: none;
`

const FormularioLocalStorage = () => {
  const [inputValue, setinputValue] = useState("");
  const [tareas, settareas] = useState([]);

  // Obtener tareas guardadas en localStorage al cargar la página
  useEffect(() => {
    const storedTasks = localStorage.getItem('tareas');
    if (storedTasks) {
      settareas(JSON.parse(storedTasks));
    }
  }, []);

  // Guardar tareas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  let cargarTarea = (e) => {
    settareas([inputValue, ...tareas]);
    setinputValue("");
    e.preventDefault();
  }

  let deletElement = (index) => {
    const updatedList = tareas.filter((_, i) => i !== index);
    settareas(updatedList);
  }

  return (
    <>
      <main className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 border__interno p-3 minH__80vh">
            <h2 className='text-center mt-4'>Bienvenido</h2>
            <h3 className='text-center mt-2'>Ingresa tu tarea</h3>
            <form onSubmit={cargarTarea}>
              <FloatingLabel
                controlId="floatingInput"
                label="Ingresa una tarea"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Tarea 1" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
              </FloatingLabel>
            </form>
            <ul>
              {tareas.map((tarea, index) => (
                <LiStyled key={index}>
                  <PList>{tarea}</PList>
                  <BotonDelete onClick={() => deletElement(index)}><MdOutlineDeleteForever /></BotonDelete>
                </LiStyled>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default FormularioLocalStorage;