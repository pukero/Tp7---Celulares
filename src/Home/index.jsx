import { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button  from "react-bootstrap/Button";
import { celulares } from "../../data";
import   './Home.css';

const Home = () => {
    return(
      <>
      <p>Bienvenido a nuestra pagina de celulares</p>
      <Carousel>
       <Carousel.Item>
        <img  src={'https://dcdn-us.mitiendanube.com/stores/179/824/products/iphone-1411-d1482e47593c9c090b16649690581149-1024-1024.png' } />
        <Carousel.Caption>
          <h3>iPhone 14 Pro</h3>
          <p>Pantalla Super Retina XDR, chip A16 Bionic, cámara de 48 MP</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={'https://dcdn-us.mitiendanube.com/stores/179/824/products/iphone-1411-d1482e47593c9c090b16649690581149-1024-1024.png' } />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={'https://dcdn-us.mitiendanube.com/stores/179/824/products/iphone-1411-d1482e47593c9c090b16649690581149-1024-1024.png' } />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
      </>
   );
}
export default Home; 