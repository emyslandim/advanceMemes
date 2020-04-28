import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/grupo">Grupo</NavLink></li>
        <li><NavLink to="/emy">Emy</NavLink></li>
        <li><NavLink to="/rodrigao">Rodrigão</NavLink></li>
        <li><NavLink to="/betina">Betina</NavLink></li>
        <li><NavLink to="/kaka">Kaka</NavLink></li>
        <li><NavLink to="/princesa">Princesa</NavLink></li>
        <li><NavLink to="/pai">Pai</NavLink></li>
        <li><NavLink to="/filho">Filho</NavLink></li>
        <li><NavLink to="/hev">Hev</NavLink></li>
        <li><NavLink to="/yuuuri">Yuuuri</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
