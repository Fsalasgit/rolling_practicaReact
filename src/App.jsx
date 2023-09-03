import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Home from './page/Home';
import NavbarWeb from './components/NavbarWeb';
import EjerciciosA from './page/ejercicios/EjerciciosA';
import FooterWeb from './components/FooterWeb';
import EjerciciosB from './page/ejercicios/EjerciciosB';



function App() {


  return (
    <>
      <BrowserRouter>
        <NavbarWeb />
      
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/ejercicio-1-3'  element={<EjerciciosA />} />
          <Route path='/ejercicio-4-5'  element={<EjerciciosB />} />
        </Routes>

        <FooterWeb />
      
      </BrowserRouter>


    </>
  )
}

export default App
