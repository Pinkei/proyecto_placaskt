import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./componentes/home/home";
import Navbar from "./componentes/navbar/navbar";
import Footer from "./componentes/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./componentes/contacto/contacto";
import Intro from "./componentes/intro/intro";
import Menu from "./componentes/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      
        <Route path="/" element={ <Menu/> }>
          <Route index element={ <Home/> } />
          <Route path="intro" element={ <Intro/> } />
          <Route path="contacto" element={ <Contacto/> } />
        </Route>
        <Navbar/>
      </Routes>
      <Footer />
      <Contacto/>
    </BrowserRouter>
  );
};

export default App;
