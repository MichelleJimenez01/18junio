
import React, { useState } from 'react';
import './Sidebar.css'; 

export const Sidebar = () => {
  const [active, setActive] = useState("inicio");

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "perfil", label: "Perfil" },
    { id: "configuracion", label: "Configuración" },
    { id: "ayuda", label: "Ayuda" },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={active === item.id ? "active" : ""}
              onClick={() => setActive(item.id)}
            >
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};


