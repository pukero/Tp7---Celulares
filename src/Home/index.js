import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
    
    const images = [
        "https://dcdn-us.mitiendanube.com/stores/179/824/products/iphone-1411-d1482e47593c9c090b16649690581149-1024-1024.png",
        "https://m.media-amazon.com/images/I/71rjXl9tmJL.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJ1AjuZln7_X4NEISxjfSkDHWJ4Clz5-AoA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfFAzIFqlk218aiI9pVfd6-It4kF07hSQbQ&s",
    ];
    return (
        <div>
            <Carousel images={images}/>
            <h1>Bienvenido a la app!</h1>
        </div>
      );
}
export default Home; 