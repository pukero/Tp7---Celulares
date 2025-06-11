import React, { useState } from 'react';
import './ImageCarousel.css';

const Home = () => {
    const images = [
    'https://dcdn-us.mitiendanube.com/stores/179/824/products/iphone-1411-d1482e47593c9c090b16649690581149-1024-1024.png',
    'https://m.media-amazon.com/images/I/71rjXl9tmJL.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJ1AjuZln7_X4NEISxjfSkDHWJ4Clz5-AoA&s'
    ];

    
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    };

    const nextSlide = () => {
        setIndex(index === images.length - 1 ? 0 : index + 1);
    };

    return (
        <div className="carousel">
        <div className="carousel-images" style={{ transform: `translateX(-${index * 100}%)` }}>
            {images.map((src, i) => (
            <img key={i} src={src} alt={`Slide ${i + 1}`} />
            ))}
        </div>
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
}
export default Home;