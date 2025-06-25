import Carrousel from "../componentes/Carrousel/Carrousel";
import   './Home.css';

const Home = () => {
   const imagenes = [
     'https://dcdn-us.mitiendanube.com/stores/179/824/products/iphone-1411-d1482e47593c9c090b16649690581149-1024-1024.png',
     'https://m.media-amazon.com/images/I/71rjXl9tmJL.jpg',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJ1AjuZln7_X4NEISxjfSkDHWJ4Clz5-AoA&s',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31NMe75yDMQu5J7LwJUpyHIbbS-t75aHTdw&s',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbE9GzLWPbl5uCBDe4Oa7-__DkZD5kNNpcQ&s'
   ];

   return (
      <div class="p-4">
        <Carrousel images={imagenes} />
      </div>
    );
  };
export default Home;
