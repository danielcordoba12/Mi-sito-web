let personaje = document.getElementById("personaje");

window.addEventListener("keydown",function(event){
    if(event.key == "ArrowRight"){
    (personaje.classList.add("img-personaje-rigth"));
    }
    if(event.key == "ArrowLeft"){
        // (personaje.classList.remove("img-personaje"))
        // (personaje.classList.add("img-personaje-2"))
        // (personaje.classList.remove("img-personaje-rigth"));
        (personaje.classList.add("img-personaje-left"));

    }
})  
