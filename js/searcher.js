let button = document.getElementById("button");
let buttonX = document.getElementById("buttonX");
let containerSeacher = document.getElementById("containerSeacher");
let containerQuery = document.getElementById("containerQuery");
let container = document.getElementById("container");
let mainSearcher = document.getElementById("mainSearcher");
let chat = document.getElementById("chat");
let chatX = document.getElementById("chatX")
let containChat = document.getElementById("containChat");
let containChatX = document.getElementById("containChatX");
let mainContaint = document.getElementById("mainContaint");
let chatModal = document.getElementById("chatModal");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let sliders = document.querySelectorAll(".slider");
let containerSlider = document.getElementById("containerSlider");
// let slider = document.getElementById("slider");

let sliderIndex = 0;

button.addEventListener("click", function() {
    containerQuery.classList.remove("main-searcher-query-hidden");
});

buttonX.addEventListener("click", function() {
    containerQuery.classList.add("main-searcher-query-hidden");
});

chat.addEventListener("click", function() {
    containChat.classList.remove("containt-chat");
    containChat.classList.add("contain-chat-hidden");
    containChatX.classList.remove("containt-chat-x-hidden")
    chatModal.classList.remove("chat-modal-hidden")
    slider.classList.remove("slider-1-hidden")
    if(contPixeles < 330*flechas.length){
        flechas[0].style.visibility="visible";

    }
    if(contPixeles > 0){
        flechas[1].style.visibility="visible";

    }

});

chatX.addEventListener("click", function() {
    containChat.classList.add("containt-chat");
    containChat.classList.remove("contain-chat-hidden");
    containChatX.classList.add("containt-chat-x-hidden")
    chatModal.classList.add("chat-modal-hidden")
    flechas[0].style.visibility = "hidden";
    flechas[1].style.visibility = "hidden";
});


// nextButton.addEventListener("click",function(){
//     if (slider.classList.contains("slider-1")){
//         slider.classList.add("slider-1-hidden")
//         slider.classList.remove("slider-1");
//         containerSlider.classList.add("slider-2")
//         slider.classList.add("slider-2")

//     }else if (containerSlider.classList.contains("slider-2")){
//         slider.classList.add("slider-2-hidden")
//         slider.classList.remove("slider-2");
//         containerSlider.classList.remove("slider-2")
//         containerSlider.classList.add("slider-3")
//         slider.classList.add("slider-3")
//     }
//     else if (containerSlider.classList.contains("slider-3")){
//         slider.classList.add("slider-3-hidden")
//         slider.classList.remove("slider-3" );
//         containerSlider.classList.remove("slider-3")
//         containerSlider.classList.add("slider-4")
//         slider.classList.add("slider-4")
//     }
    
// })
// prevButton.addEventListener("click",function(){
//     if (slider.classList.contains("slider-4")){
//         slider.classList.add("slider-4-hidden")
//         slider.classList.remove("slider-1-hidden")
//         slider.classList.remove("slider-4");
//         containerSlider.classList.remove("slider-4")
//         containerSlider.classList.add("slider-3")
//         slider.classList.add("slider-3")

//     }else if (containerSlider.classList.contains("slider-3")){
//         slider.classList.add("slider-3-hidden")
//         slider.classList.remove("slider-4-hidden")
//         slider.classList.remove("slider-1-hidden")
//         slider.classList.remove("slider-3");
//         containerSlider.classList.remove("slider-3")
//         containerSlider.classList.add("slider-2")
//         slider.classList.add("slider-2")
//     }
//     else if (containerSlider.classList.contains("slider-2")){
//         slider.classList.add("slider-2-hidden")
//         slider.classList.remove("slider-3-hidden")
//         slider.classList.remove("slider-1-hidden")
//         slider.classList.remove("slider-2");
//         containerSlider.classList.remove("slider-2")
//         containerSlider.classList.add("slider-1")
//         slider.classList.add("slider-1")
//         slider.classList.remove("slider-2-hidden")

//     }
    
// })
let contPixeles= 0;
let flechas = document.querySelectorAll(".flechas");
let slider = document.getElementById("containerSlider");

    
for (let i = 0;i <  flechas.length; i++) {
    if(contPixeles == 0){
        flechas[1].style.visibility="hidden";
    }
    flechas[i].addEventListener("click",function(){
        if(i == 0) {
            if(contPixeles < 330*flechas.length){
                contPixeles = contPixeles +  330;
                slider.style.marginLeft = "-" + contPixeles + "px";
                console.log(contPixeles,"A");


                if (contPixeles == 330 * flechas.length){
                    flechas[0].style.visibility = "hidden";
                }else{
                    flechas[1].style.visibility="visible";
                }
            }
        }else{
            if (contPixeles > 0){
                contPixeles = contPixeles - 330;
                slider.style.marginLeft = "-" + contPixeles + "px";
                console.log(contPixeles,"B");


                if (contPixeles == 0) {
                    flechas[1].style.visibility = "hidden";
                }else{  
                    flechas[0].style.visibility = "visible";
                }
            }
        }
    })

    
}






