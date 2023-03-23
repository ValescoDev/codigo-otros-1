//Codigo Original

/* const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError); */


//Funcionamiento del programa
//Este código se encarga de obtener la información del usuario de GitHub con el nombre de usuario "stolinski" y mostrar su nombre, blog y ubicación en una página HTML.

//Codigo Corregido
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog'); //Se cambió #blog por .blog
const $l = document.querySelector('.location');

//Hay algunos errores en el código que impiden su buen funcionamiento.

//La función displayUser no estaba declarada como async, por lo que no se podía usar await
async function displayUser(username) {
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`); //El método fetch no maneja errores, por lo que fue necesario agregar un bloque try/catch.
    const data = await response.json(); //El valor de la variable data no estaba definido, por lo que las líneas que establecen el contenido de los elementos HTML no funcionaba.
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`; //Las platillas literales (${}) estaban siendo utilizados correctamente. Los valores de data.name, data.blog y data.location deben estar dentro de las llaves.
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

/* Para refactorizar el código, se efectuaron los siguientes cambios:

- Agregar la palabra clave async antes de la declaración de la función displayUser.
- Agregar un bloque try/catch alrededor del método fetch para manejar errores.
- Cambiar la declaración de la variable data para que contenga los datos obtenidos de la respuesta de fetch.
- Corregir el uso de los template literals para que muestren los valores de las propiedades de data dentro de las llaves. */