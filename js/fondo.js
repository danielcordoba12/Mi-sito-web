// let personaje = document.getElementById("personaje");

// let left =0;


// window.addEventListener("keydown",function(event){
//     if(event.key == "ArrowRight"){
//         (personaje.classList.remove("img-personaje-left"));
//         (personaje.classList.add("img-personaje-rigth"));
//         left = left + 10;
//         personaje.style.marginLeft = left + 'px'   
//     }

//     if(event.key == "ArrowLeft"){
//         (personaje.classList.remove("img-personaje-rigth"));
//         (personaje.classList.add("img-personaje-left"));
//         left = left - 10;
//         personaje.style.marginLeft = left + 'px'
//     }
// }) 

//     window.addEventListener("keydown",function(event){
//     if(event.key == "ArrowUp"){
//         console.log("bjn")
//         personaje.style.marginTop ="350px"

//         this.setTimeout(()=>{
//             personaje.style.marginTop = "530px"
//         },350)

//     }
// })
const imgContainer = document.getElementById("imgContainer");
const personaje = document.getElementById("personaje");

let right = 0; 
let left =0;


window.addEventListener("keydown", function (event) {
    if (right <= -1770){
        left = left + 10;
        personaje.style.marginLeft = left + 'px';
        console.log(left + "left");
        if(left >= 1490){
            left = 1490;
            // if (event.key ==="ArrowLeft" && right <= -1790  ){
            //     // personaje.classList.remove("img-personaje-right");
            //     // personaje.classList.add("img-personaje-left");
            //     right = right - 10;
            //     personaje.style.marginRight = right + "px";
            //     console.log(right + "fgsa1")
            // }
        }
    }else{

    if (event.key === "ArrowRight") {
        personaje.classList.remove("img-personaje-left");
        personaje.classList.add("img-personaje-right");
        right = right - 10;
        imgContainer.style.marginLeft = right + "px";
        console.log(right + "right");
    }
}   
    if(right >= 1760){
        right = 1760;
        console.log(left + "left 01")
    }else{

    if (event.key === "ArrowLeft") {
        personaje.classList.remove("img-personaje-right");
        personaje.classList.add("img-personaje-left");
        right = right + 10;
        imgContainer.style.marginLeft = right + "px";
        console.log(right + "left")
}
    }

    if(event.key == "ArrowUp"){
        console.log("bjn")
        personaje.style.marginTop ="350px"

        this.setTimeout(()=>{
            personaje.style.marginTop = "530px"
        },350)
    }

});





