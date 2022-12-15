let box3 = document.getElementById("box3");
let circle = document.getElementById("circle")

box3.addEventListener("click", function() {
    if(box3.classList.contains("box3-old")) {
        box3.classList.add("box3-new");
        box3.classList.remove("box3-old");
    }
    else {
        box3.classList.remove("box3-new");
        box3.classList.add("box3-old");
    }
})  
circle.addEventListener("click",function(){
    if(circle.classList.contains("circulo-d")){
        (circle.classList.add("circulo-old"))
        (circle.classList.remove("circulo-d"))
    }else{
        (circle.classList.add("circulo-d"))
        (circle.classList.remove("circulo-old"))
    }
})
