let fecha = document.getElementById("fecha");
let hora = document.getElementById("hora");
let btnEnviar = document.getElementById("btnEnviar");
let timeGMT = new Date();
let timeGMTStr = timeGMT.toString();

btnEnviar.addEventListener("click",function(){
  if (fecha < timeGMT){
    alert ("Condicion cumplida")
  }else{
    alert("Condicion 2 cumplida")
  }
})