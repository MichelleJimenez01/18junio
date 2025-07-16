import React, { useEffect, useState } from 'react';
import { UserCard } from '../UserCard/UserCard';
import './section.css';

//import rutImg from '../../assets/arandano.png';
//import rut2Img from '../../assets/cerezas.png';
//import rut3Img from '../../assets/fresa.png';

// Datos de usuarios (corregido: no hay cambios aquí, pero se usa correctamente)
//const users = [
  //{
    //id: 1,
    //name: 'arandano deli',
    //description: 'Fruta sabor dulce',
    //image: rutImg,
  //},
  //{
  //  id: 2,
  //  name: 'cereza',
  //  description: 'fruta jugosa',
  //  image: rut2Img,
  //},
  //{
  //  id: 3,
  //  name: 'fresa',
  //  description: 'fruta frutos rojos',
  //  image: rut3Img,
  //},
//];

export const Section = () => {
  // estado para contar los clics
  const [count, setCount] = useState(0);

  // estado para almacenar los usuarios
  const [users, setUsers] = useState([]);

  // estado para almacenar el texto de busqueda para luego setarse 
  const [searchTerm, setSearchTerm] = useState('');

  // efecto que se ejecuta al cargar o cuando cambia el contador
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
      });
  }, [count]);

  // funcion para actualizar el contador
  const handleClick = () => {
    setCount(count + 1);
  };

  // funcion que se ejecuta cada vez que se escribe en el input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
// cambiamos las propiedades de los datos del usuario ya que anteriormente se estaba haciendo deacuerdo a los atributos del arreglo y ahora se hace con los que da la apl
  // se filtran los usuarios en base al texto ingresado
  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.email}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Contador</button>

      {/* campo de texto para la busqueda */}
      <input 
        type="text" 
        placeholder="buscar por nombre o correo" 
        value={searchTerm} 
        onChange={handleSearch}
        className="search-input"
      />

      <section>
        {
          filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        }
      </section>
    </div>
  );
};
  

//  return (
   // <section>     
     // {
      //[].map((user) => {
      //return(
        //<UserCard key={user.id} user={user} />
      //)  
        
//})
  //  }
    //</section>
 // );
// };