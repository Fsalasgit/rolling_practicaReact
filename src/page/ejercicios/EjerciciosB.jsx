import React from 'react'
import AppEjerciciosB from './04-05-Ejercicios/AppEjerciciosB'
import OffcambasEjercicios from '../../components/OffcambasEjercicios'
import FormularioLocalStorage from './04-05-Ejercicios/auxiliares/FormularioLocalStorage'





const EjerciciosB = () => {


  return (
    <>
    <OffcambasEjercicios />
      <main className='container mt-3'>
        <h1 className="text-center">Ejercicios 4 a 5</h1>
        <div className="row">
            <article className="col-12">
              <h2>Lista de tareas - Dificultad:  🟢</h2>

              <p>Crear una aplicación web que  muestre una lista de tareas, al ingresar una tarea en el input y presionar enter.</p>

              <AppEjerciciosB/>
            </article>
            <article className="col-12 mt-5">
              <h2>Lista de tareas (con localstorage)- Dificultad:  🟢🟡</h2>

              <p>Modifica el programa anterior para que las tareas se puedan almacenar en el localstorage.</p>

              <FormularioLocalStorage />
            </article>
        </div>
      </main>
    </>
  )
}

export default EjerciciosB