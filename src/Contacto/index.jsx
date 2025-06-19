import { useState } from "react";
import './contacto.css';

const Contacto = () => {
    return(
        <div class="contact-container">
            <h2 class="contact-title">Formulario de Contacto</h2>
            <form class="contact-form">
                <div class="form-group">
                    <label htmlFor="nombre" class="form-label">Nombre</label>
                    <input type="text" id="nombre" name="nombre" class="form-control" />
                </div>
                <div class="form-group">
                    <label htmlFor="apellido" class="form-label">Apellido</label>
                    <input type="text" id="apellido" name="apellido" class="form-control" />
                </div>
                <div class="form-group">
                    <label htmlFor="email" class="form-label">Email</label>
                    <input type="email" id="email" name="email" class="form-control" />
                </div>
                <div class="form-group">
                    <label htmlFor="consulta" class="form-label">Consulta</label>
                    <textarea id="consulta" name="consulta" class="form-control"></textarea>
                </div>
                <button type="submit" class="submit-button">Enviar</button>
            </form>
        </div>
    );
}
export default Contacto;
