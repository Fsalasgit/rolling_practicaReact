import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Home from './page/Home';
import NavbarWeb from './components/NavbarWeb';


function App() {


  return (
    <>
      <BrowserRouter>
        <NavbarWeb />
      
        <Routes>
          <Route path='/'  element={<Home />} />
        </Routes>
      
      </BrowserRouter>


    </>
  )
}

export default App
