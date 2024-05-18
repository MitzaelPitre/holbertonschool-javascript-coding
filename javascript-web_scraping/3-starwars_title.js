#!/usr/bin/node

const request = require('request');

// Construir la URL de la API con el ID de la película proporcionado como argumento
const movieId = process.argv[2];
const urlApi = 'https://swapi-api.hbtn.io/api/films/' + movieId;

request(urlApi, function (error, response, body) {
  if (error) {
    console.log(error); // Imprimir el error si ocurrió uno
  } else if (response.statusCode !== 200) {
    console.log(`Error: ${response.statusCode}`); // Manejar errores HTTP
  } else {
    const film = JSON.parse(body);
    console.log(film.title);
  }
});
