import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const Contacto = () => {
    return(
        <div className="contact-container">
            <h2 className="contact-title">Formulario de Contacto</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" id="nombre" name="nombre" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" id="apellido" name="apellido" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="consulta" className="form-label">Consulta</label>
                    <textarea id="consulta" name="consulta" className="form-control"></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </div>
    );
}
export default Contacto;
