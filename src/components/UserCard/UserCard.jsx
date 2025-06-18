import React, { useState } from 'react';

export const UserCard = ({ user }) => {
  // Hook para marcar si el usuario fue contactado o no
  const [isContacted, setIsContacted] = useState(false);

  // Desestructuramos los datos del usuario
  const { id, name, description, image } = user;

  // Corrección de nombre: antes era handleClink (posible error tipográfico)
  const handleClick = () => {
    setIsContacted(!isContacted); // Alternamos el estado
  };

  // Consola informativa
  console.log(`La tarjeta de ${name} fue renderizada`);

  return (
    <div className='card'>
      <img className='image' src={image} alt={name} />
      <h2 className='name'>{name}</h2>
      <p>{description}</p>
      {/** Corrección:
       *  - onClick ya no está como función anónima
       *  - El id se deja solo si lo necesitas para algo específico
       */}
      <button id={id} onClick={handleClick}>
        {isContacted ? 'Contactado' : 'Contactar'}
      </button>
    </div>
  );
};

export default UserCard;
