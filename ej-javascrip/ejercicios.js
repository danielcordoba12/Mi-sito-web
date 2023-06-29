// Activando el modo strict
"use strict"



// El siguiente codigo se ejecuta una vez cargue el documento html 
alert ("HII")
// ejercicio 2 : use strict no permite utilizar variables que no hayan sido declaradas
let aprendiz = "daniel cordoba ruiz";
alert (aprendiz);

// ejrcicio n3: crear 2 variables de tipo string (nombres y apellidos) y las mostramos en consola
let nombreAprendiz = "Daniel";
let apelidosAprendiz = "Cordoba Ruiz";
console.log ("Ejercicio N.3");
console.log (nombreAprendiz + " "+ apelidosAprendiz);

// ejercicio N.4
// no se pueden sumar dos tipos de datos diferentes
let num1int = 2;
let num2int =4;
let num3str ="3";
let num4str ="1";

console.log ("Ejercicio 4");
console.log (num1int + num2int);
console.log ("Entero + entero (4+2)")
console.log (num1int + num2int);
console.log ('string + strin ("3" + "1")');
console.log (num3str+ num4str);
console.log ('entero + strin (2 + "1")');
console.log(num1int + num4str);
// EJERCICIO 5
// De string a entero
let number3int = parseInt(num3str);
let num3int = parseInt(num3str);
let resultado = num1int + num2int;
console.log(resultado)
console.log (num1int + Number(num2int));
// De entero a string
console.log ("Conversion explicita de entero a string");
let num1str = num1int.toString();
let resultadoStr = num3str + num1str;
console.log(resultadoStr)
// De entero y string a decimal
console.log("Convercion de entero a decimal");
let num1Float = parseFloat(num1int);
let num3Float = parseFloat(num3str);
let num5Float = 6.4;
let num5Int = parseInt(num5Float);
console.log("Valores"+num1Float+ "+" + num3Float + "+" + num5Float);
console.log("resultado"+(num1Float + num3Float));
console.log (num5Int);

// De decimal a entero
let num6Int = Math.ceil(num5Float);
console.log("Conversion de decimal (6.4) a Entero con ajuste hacia el techo"+num6Int);
// Limitaciones para declaracion de variables 
// 1. No iniciar variables con numeros
// let 1nombre = "Vicente";

// // los nimbres de las variables no llevan espacios
// let nombre Aprendiz = "Margarita";
// // la declaracion de las variables no lleva comillas ni caracteres especiales de tipo -,
// let "apellidos" = "sanchez";
// let nombres-apellidos = "fernando rojas";
// // no podemos declarar variables con nombres restringidps 
// let for = "hols mundo";
// let while = 5;



console.log("Operadores mastemasticos");
let numArit1=8;
let numArit2=6;
console.log("Suma numArit1(8) + numArit2(6) "+ (numArit1 + numArit2));
console.log("Resta: ");
console.log("Suma numArit1(8) - numArit2(6) " + (numArit1 - numArit2));
console.log("Multiplicacion: ");
console.log("Suma numArit1(8) x numArit2(6) " + (numArit1 * numArit2));
console.log("Division: ");
let resultDiv = numArit1 / numArit2;
console.log("Suma numArit1(8) % numArit2(6) " + (numArit1 / numArit2));
console.log("Redondear numeros:");
console.log(Math.round(resultDiv));
console.log("Redondear hacia abajo:");
console.log(Math.floor(resultDiv));
console.log("Redondear hacia arriba");
console.log(Math.ceil(resultDiv));
console.log("Residuo  "+ (numArit1 % numArit2));