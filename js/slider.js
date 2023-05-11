let leftArrow = document.getElementById("leftArrow");
let imgArbol = document.getElementById("imgArbol");
let imgForma = document.getElementById("imgForma");

leftArrow.addEventListener("click", function(){
    if (imgArbol.classList.contains("img-1")){
        imgArbol.classList.remove("img-1");
        imgArbol.classList.add("img-1-hidden")
        imgForma.classList.add("img-2")
        imgForma.classList.remove("img-2-hidden")
        
    }
});
// leftArrow.addEventListener("click", function(){
//     alert (" Funcionando")
// })