let info = document.getElementById("input");
let button = document.getElementById("button");
let array = document.querySelectorAll(".star")
let originalClasses = [];

for (let i = 0; i < array.length; i++) {
    originalClasses[i] = array[i].className;
}

button.addEventListener("click",function(){
let min = info.value - Math.floor(info.value)

    for (let i = 0; i < array.length; i++) {
        array[i].className = originalClasses[i];
    }
    if(info.value <=-1 || info.value >=5.1){
        alert("numero no valido")
    }else{
            for (let i=0; i<=info.value - 1; i++){
                array[i].classList.add("fa-solid");
                var x = i
            }
            if (info.value > 0.01 && info.value < 0.99){
                array[0].classList.add("fa-star-half-stroke")
            }
            else{
                if  (min >= 0.3 && min < 0.75){ 
                    array[x+1].classList.add("fa-solid");
                    array[x+1].classList.add("fa-star-half-stroke")
                    } 
                if (min > 0.76 && min <=0.9){
                    array[x+1].classList.remove("fa-star-half-stroke")
                    array[x+1].classList.add("fa-solid");
                }  
            }
        }
})