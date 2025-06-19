
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
