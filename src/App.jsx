import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Home from './page/Home';
import NavbarWeb from './components/NavbarWeb';
import EjerciciosA from './page/ejercicios/EjerciciosA';
import FooterWeb from './components/FooterWeb';



function App() {


  return (
    <>
      <BrowserRouter>
        <NavbarWeb />
      
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/ejercicio-1-3'  element={<EjerciciosA />} />
        </Routes>

        <FooterWeb />
      
      </BrowserRouter>


    </>
  )
}

export default App
