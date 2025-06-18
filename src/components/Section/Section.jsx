import React, { useState } from 'react';
import { UserCard } from '../UserCard/UserCard';
import './section.css';

import rutImg from '../../assets/arandano.png';
import rut2Img from '../../assets/cerezas.png';
import rut3Img from '../../assets/fresa.png';

// Datos de usuarios (corregido: no hay cambios aquí, pero se usa correctamente)
const users = [
  {
    id: 1,
    name: 'arandano deli',
    description: 'Fruta sabor dulce',
    image: rutImg,
  },
  {
    id: 2,
    name: 'cereza',
    description: 'fruta jugosa',
    image: rut2Img,
  },
  {
    id: 3,
    name: 'fresa',
    description: 'fruta frutos rojos',
    image: rut3Img,
  },
];

export const Section = () => {
  // Hook de estado (aún no se usa, pero lo dejamos por ahora)
  const [count, setCount] = useState(0);

  console.log(count, setCount);

  return (
    <section>     
      {
      users.map((user) => (
      //return(
        <UserCard key={user.id} user={user} />
      //)  
        
      ))
    }
    </section>
  );
};
