import React from "react";
import { celulares } from "../../data/index.js";

const Productos = () => {
  return (
    <div>
      <h1>Celulares Disponibles</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {celulares.map((celular) => (
          <div key={celular.id} style={{ border: "1px solid #ccc", padding: "10px", width: "250px" }}>
            <h2>{celular.nombre}</h2>
            <img
              src={celular.fotos[0]}
              alt={celular.nombre}
              style={{ width: "100%", height: "auto" }}
            />
            <p>{celular.descripcion}</p>
            <p><strong>Precio:</strong> ${celular.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
