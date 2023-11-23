const datos = document.querySelectorAll(".puntuacion");
const button = document.getElementById("button");
const barraas = document.querySelectorAll(".barra");
const barrita = document.querySelectorAll(".barrita")

const tamaño = '80%';

button.addEventListener("click",function(){


    for (let i = 0; i < datos.length;i++){
        console.log(datos[i].value);
        barrita[i].style.height = '100%';
        barrita[i].style.width = tamaño;
    }

})
    