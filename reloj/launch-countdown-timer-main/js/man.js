let btn = document.getElementById("btn");
let seconds = document.getElementById("seconds");
let secondsText = seconds.textContent
let secondsInt = parseInt(secondsText);


function reloj(){

    if (secondsInt >= 0) {
        console.log(secondsInt);
        seconds.innerHTML = secondsInt;
        secondsInt--; // Restar 1 cada vez que se ejecuta

        if (secondsInt < 0) {
            clearInterval(intervalo); // Detener el intervalo cuando llegue a 5 o menos
        }
    }
}


btn.addEventListener("click", function() {
    // Ejecutar la función "reloj" cada segundo
    var intervalo = setInterval(reloj, 1000);
});
