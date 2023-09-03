import React from 'react'
import OffcambasEjercicios from '../../components/OffcambasEjercicios'
import AppEjerciciosA from './01-03-Ejercicios/appEjerciciosA'


const EjerciciosA = () => {
  return (
    <>
      <OffcambasEjercicios />
      <main className='container mt-3'>
        <h1 className="text-center">Ejercicios 1 a 3</h1>
        <div className="row">
          <article className="col-12">

            <AppEjerciciosA />       

          </article>
         
        </div>
      </main>

    </>
  )
}

export default EjerciciosA