console.log("Validacion de fechas");
console.log("Obtener fecha y hora del navegador");
// Greenwich Mean Time
let timeGMT = new Date();
console.log(timeGMT);
console.log("==Fecha y Hora en String==");
let timeGMTStr = timeGMT.toString();
console.log(timeGMTStr);
console.log("==Obtener el dia de la semana==");
let timeGTMDay = timeGMT.getDate();
let month = timeGMT.getMonth();
console.log(timeGTMDay);

let diaSemana =["Domingo","lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
let mesYear =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log("Hoy es el dia " + timeGTMDay +" del mes " + mesYear[month] + " del año 2023");
// ===============================================================================================================================================
console.log("Partes que esta conformado una fecha");
let currentTime = new Date();
console.log ("Dia de la semana: " + currentTime.getDay());
console.log ("Mes del año: " + currentTime.getMonth());
console.log ("Dia del mes: " + currentTime.getDate());
console.log ("Año: " + currentTime.getFullYear());
console.log ("Hora: " + currentTime.getHours());
console.log ("Minutos: " + currentTime.getMinutes());
console.log ("Segundos: " + currentTime.getSeconds());
console.log ("Milisegundos: " + currentTime.getMilliseconds());

console.log("==Milisegundos transcurridos desde 01/01/1970==");
console.log(currentTime.getTime());

console.log("Estableciendo diferencia de fechas");
let newYear2024 = new Date("January 1,2024");
let fechaActual = new Date();
console.log(newYear2024);
let newYear2024Ms = newYear2024.getTime();
let milisecDiff = newYear2024Ms - fechaActual;
let diasDiff = milisecDiff / (1000 * 60 * 60 * 24);

console.log("Dias faltantes para el año nuevo:" + Math.floor(diasDiff));

console.log("Ingresar dia y hora");
let fechaHora = new Date("July 2, 2023 08:00:00");
let fechaHorams = fechaHora.getTime();
let fechaDifVot = fechaHorams - fechaActual;
console.log("Segundos faltantes: " + fechaDifVot/1000);
console.log("Minutos faltantes: " + fechaDifVot / (1000 * 60));
console.log("Horas faltantes: " + fechaDifVot / (1000 * 60 * 60));
console.log("Dias faltantes: " + fechaDifVot / (1000 * 60 * 60 * 24));
 
function calcularTiempoVotaciones() {
    let horasRestantes = fechaDifVot / (1000 * 60 * 60);
    console.log (Math.floor (horasRestantes % 24));
    let MinutosRestantes = fechaDifVot / (1000 * 60);
    console.log(Math.floor(MinutosRestantes % 60));
    console.log("El tiempo restante para las votaciones es: "+  Math.floor(fechaDifVot / (1000 * 60 * 60 * 24)) +" Dias " + Math.floor (horasRestantes % 24) + " horas " + Math.floor(MinutosRestantes % 60) + " minutos " + Math.floor(fechaDifVot%60) + " segundos");
};
calcularTiempoVotaciones();








