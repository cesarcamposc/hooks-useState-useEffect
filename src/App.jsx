//* HOOKS
//? Hooks useState: Permite agregar estado a los componentes funcionales. Devuelve un par de valores de tipo array: el estado actual y una función para actualizarlo.
//* sintaxis: 
//* const [estadoInicial, setEstadoActualizado] = useState(valorInicial);

//* Example 1: Escribir un componente que muestre un contador y un botón para incrementarlo.
/*
import { useState } from 'react';

const MyApp = () => {
  const [count, setCount] = useState(0); //
  
  return (
    <div>
      <h1> CLICK : {count} </h1>
      <button onClick={()=> setCount(count+1)}>CLICK ME</button>
    </div>
  );
}

export default MyApp;

//* Example 2: Escribir un componente que permita al usuario ingresar su nombre y mostrarlo en pantalla.

import { useState } from 'react';

const MyApp = () => {
  const [name, setName] = useState(''); // Estado para almacenar el nombre ingresado por el usuario 
  const handleInputChange = (event) => {
    setName(event.target.value); // Actualiza el estado con el valor ingresado por el usuario
    //* event.target.value: obtiene el valor actual del input cada vez que el usuario escribe algo en él, y setName lo actualiza en el estado.
  };
  
  return (
    <div>
      <h1> Hola, {name} </h1>
      <input type="text" placeholder="Ingresa tu nombre" onChange={handleInputChange} /> {/* Input para que el usuario ingrese su nombre }
    </div>
  );
}

export default MyApp;

//* Hooks useEffect: Permite realizar efectos secundarios en los componentes funcionales, como llamadas a APIs, suscripciones o manipulaciones del DOM. Se ejecuta después de que el componente se ha renderizado.
//* sintaxis: 
useEffect(() => {
  // Código del efecto secundario
}, [someProp, someState]); // Dependencias que determinan cuándo se ejecuta el efecto
*/
//* Example 1: Escribir un componente que muestre un request a una API después de que el componente se haya montado.

import { useEffect, useState } from 'react';

const MyApp = () => {
  const [data, setData] = useState(null); // Estado para almacenar los datos obtenidos de la API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/2') // Realiza una solicitud a la API para obtener un post específico
      .then(response => response.json()) // Convierte la respuesta a formato JSON
      .then(json => setData(json)); // Actualiza el estado con los datos obtenidos de la API
  }, []); // El efecto se ejecuta solo una vez después del primer renderizado, ya que el array de dependencias está vacío.

  return (
    <div>
      {data ? ( // Verifica si los datos han sido cargados
        <div>
          <h1>{data.title}</h1> {/* Muestra el título del post */}
          <p>{data.body}</p> {/* Muestra el cuerpo del post */}
        </div>
      ) : (
        <p>Cargando...</p> // Muestra un mensaje de carga mientras se obtienen los datos
      )}
    </div>
  );
}

export default MyApp;
