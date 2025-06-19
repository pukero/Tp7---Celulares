import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/index';
import QuienesSomos from './QuienesSomos/index';
import Layout from './componentes/Layout';
import Notfound from './componentes/Notfound';
import Contacto from './Contacto';
import Productos from './Productos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quienes-somos" element={<QuienesSomos />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="productos" element={<Productos />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

