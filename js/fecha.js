
let send = document.getElementById("send");

    
    send.addEventListener("click", function(){

    let fechaIngresada = new Date(document.getElementById('fecha').value);
    let fechaActual = new Date();
    
    if (fechaIngresada > fechaActual) {
    alert('La fecha ya ha pasado.');
    } else {
    alert('Acción realizada con éxito.');
    }


});
