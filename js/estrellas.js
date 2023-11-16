let info = document.getElementById("input");
let button = document.getElementById("button");

let containerStar = document.getElementById("containerStar")
let star = document.getElementById("star")

let array = document.querySelectorAll(".star")

// for(let i = 0;i< array.length;i++){
//     array[i].addEventListener("click",function(){
       
       
//         for(let x = 0;x< array.length;x++){
//             if(x <= i){
//                 array[x].style.color = 'green';
//                 array[x].classList.remove("fa-regular")
//                 array[x].classList.add("fa-solid")
//             }else{
//                 array[x].style.color = 'green';
//                 array[x].classList.add("fa-regular")
//                 array[x].classList.remove("fa-solid")
//             }
//         }
        
//     })
//     //     starRegular.classList.add("fa-regular")
//     //     starRegular.classList.add("fa-star")
//     // }
//     // array[i]
// console.log(array[i])
// 
// }
button.addEventListener("click",function(){

        let min = info.value - Math.floor(info.value)
        console.log(min);

        for (let i = 0;i <=array.length;i++ ){

            // if (info.value == 0){
            //     console.log(array[i])
            //     array[i].classList.add("fa-regular")
            //     array[i].classList.add("fa-star")
            // }
            if(info.value >= 0 && info.value <= 1){
                for(let x= 0;x < 1;x++)
                array[x+1].classList.remove("fa-solid")
                array[x].classList.add("fa-solid")
                array[x].classList.add("fa-star")



            }if(info.value >= 2 && info.value <= 2.7){
                for(let x= 0;x < 2;x++)
                array[x].classList.add("fa-star")


                if(min >= 0.3 && min <= 0.7){
                    array[x+1].classList.remove("fa-solid")
                    array[x+1].classList.add("fa-star")
                    array[x+1].classList.add("fa-star-half-stroke")
                }

            }
            
            if(info.value >= 2.8 && info.value <= 3.3){
                for(let x= 0;x < 3;x++)
                array[x].classList.add("fa-solid")
                array[x].classList.add("fa-star")
            }if(info.value >= 3.8 && info.value <= 4.3){
                for(let x= 0;x < 4;x++)
                array[x].classList.add("fa-solid")
                array[x].classList.add("fa-star")
            }
            if(info.value >= 4.8 && info.value <= 5){
                for(let x= 0;x < 5;x++)
                array[x].classList.add("fa-solid")
                array[x].classList.add("fa-star")
            }
        }

    

    // if(info.value >= 1.4 && info.value <=1.7 ){
    //     starRegular.classList.remove("fa-regular")
    //     starRegular.classList.add("fa-solid")
    //     starRegular2.classList.add("fa-star-half-stroke")

    //     }
    // if(info.value >= 1.8 && info.value <=2.3){
    //     starRegular.classList.remove("fa-regular")
    //     starRegular2.classList.remove("fa-regular")
    //     starRegular.classList.add("fa-solid")
    //     starRegular2.classList.add("fa-solid")
    // }
    // if(info.value >= 2.4 && info.value <=2.7){
    //     starRegular.classList.remove("fa-regular")
    //     starRegular2.classList.remove("fa-regular")
    //     starRegular3.classList.add("fa-regular")
    //     starRegular.classList.add("fa-solid")
    //     starRegular2.classList.add("fa-solid")
    //     starRegular3.classList.add("fa-star-half-stroke")

    // }
    // if(info.value >= 2.8 && info.value <=3.3){
    //     starRegular.classList.remove("fa-regular")
    //     starRegular2.classList.remove("fa-regular")
    //     starRegular3.classList.remove("fa-regular")
    //     starRegular.classList.add("fa-solid")
    //     starRegular2.classList.add("fa-solid")
    //     starRegular3.classList.add("fa-solid")
    // }
    // if(info.value >= 3.4 && info.value <=3.7){
    //     starRegular.classList.remove("fa-regular")
    //     starRegular2.classList.remove("fa-regular")
    //     starRegular3.classList.remove("fa-regular")
    //     starRegular4.classList.add("fa-regular")
    //     starRegular.classList.add("fa-solid")
    //     starRegular2.classList.add("fa-solid")
    //     starRegular3.classList.add("fa-solid")
    //     starRegular4.classList.add("fa-star-half-stroke")
    // }
    // if(info.value >= 3.8 && info.value <=4.3){
    //     starRegular.classList.remove("fa-regular")
    //     starRegular2.classList.remove("fa-regular")
    //     starRegular3.classList.remove("fa-regular")
    //     starRegular4.classList.remove("fa-regular")
    //     starRegular.classList.add("fa-solid")
    //     starRegular2.classList.add("fa-solid")
    //     starRegular3.classList.add("fa-solid")
    //     starRegular4.classList.add("fa-solid")
    // }
    // if(info.value >= 4.4 && info.value <=4.7){
    //     starRegular.classList.remove("fa-regular")
    //     starRegular2.classList.remove("fa-regular")
    //     starRegular3.classList.remove("fa-regular")
    //     starRegular4.classList.remove("fa-regular")
    //     starRegular5.classList.add("fa-regular")
    //     starRegular.classList.add("fa-solid")
    //     starRegular2.classList.add("fa-solid")
    //     starRegular3.classList.add("fa-solid")
    //     starRegular4.classList.add("fa-solid")
    //     starRegular5.classList.add("fa-star-half-stroke")

    // }
    // if(info.value >= 4.8 && info.value <=5){
    //     starRegular.classList.remove("fa-regular")
    //     starRegular2.classList.remove("fa-regular")
    //     starRegular3.classList.remove("fa-regular")
    //     starRegular4.classList.remove("fa-regular")
    //     starRegular5.classList.remove("fa-regular")
    //     starRegular.classList.add("fa-solid")
    //     starRegular2.classList.add("fa-solid")
    //     starRegular3.classList.add("fa-solid")
    //     starRegular4.classList.add("fa-solid")
    //     starRegular5.classList.add("fa-solid")

    // }

})