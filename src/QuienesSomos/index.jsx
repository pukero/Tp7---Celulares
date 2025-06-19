
import  './index.css';

const QuienesSomos = () => {
  return (
    <>
      <p className="qs-title">¿Quiénes somos?</p>

      <div className="qs-images">
        <img
          src={'https://sillaoficina365.es/img/cms/BLOG/JUNIO/03/imagen-2.jpg'}
          alt="Oficina 1"
        />
        <img
          src={'https://cedreo.com/wp-content/uploads/2023/11/diseno-de-oficinas-1.jpg'}
          alt="Oficina 2"
        />
        <img
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSVRGRASXx9pL1YjEHF844Y92ESaO3uwSpw&s'}
          alt="Oficina 3"
        />
      </div>

      <h3 className="qs-text">
        Somos apasionados por la tecnología y especialistas en conectarte con lo último en telefonía móvil. Desde nuestros inicios, nos propusimos ofrecer no solo los mejores celulares del mercado, sino también una experiencia de compra segura, rápida y confiable.
        <br /><br />
        Trabajamos con marcas líderes como Apple, Samsung, Xiaomi, Motorola, entre otras, para brindarte variedad, calidad y garantía. Nuestro compromiso es ayudarte a encontrar el celular ideal para vos, al mejor precio y con asesoramiento personalizado.
        <br /><br />
        Creemos que la tecnología debe estar al alcance de todos, por eso ofrecemos envíos a todo el país, cuotas sin interés y un equipo siempre listo para resolver tus dudas.
        <br /><br />
        Bienvenido a tu próxima experiencia en celulares.
      </h3>
    </>
  );
};

export default QuienesSomos;
