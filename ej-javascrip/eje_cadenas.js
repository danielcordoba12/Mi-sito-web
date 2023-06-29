console.log("Hola mundo");

let ciudad = "Palestina";
// Para convertir toto el strin en mayuscula 
let ciudadUpper = ciudad.toUpperCase();
console.log(ciudadUpper);
// Para convertir toto el strin en minuscula;
let ciudadLow = ciudad.toLocaleLowerCase();
console.log(ciudadLow);
// Pimer letra en mayuscula 
let ciudadOracion = ciudad[0].toUpperCase() + ciudad.slice(1).toLowerCase();
console.log(ciudadOracion)
/* Extraer partes de una cadena */
let year ="2023-06-22";
let yearStr = year.toString();
let yearcard = yearStr.slice(0,4);
console.log("Año:" + yearcard);
let nombre  = "Daniel Cordoba Ruiz";
let cantNombre = nombre.length;
console.log (cantNombre);

/* Obtener fechas */
console.log("==Fecha y Hora GMT==");
let timeGMT = new Date();
console.log(timeGMT);
