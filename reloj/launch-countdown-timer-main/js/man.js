let btn = document.getElementById("btn");

let seconds = document.getElementById("seconds");
let secondsText = seconds.textContent
let secondsInt = parseInt(secondsText);

let minutes = document.getElementById("minutes");
let minutesText = minutes.textContent;
let minutesInt = parseInt(minutesText);

let hours = document.getElementById("hours")
let hoursText = hours.textContent;
let hoursInt = parseInt(hoursText);

let days = document.getElementById("days");
let daysText = days.textContent;
let dayInt = parseInt(daysText);

let modal= document.getElementById("modal")

// function reloj(){


//     if (secondsInt >= 1) {
//         console.log(secondsInt);
//         secondsInt--;
//         seconds.innerHTML = secondsInt;

//         if (secondsInt <= 0  ) {
//             // console.log("minutos ",minutesInt);
//             minutes.innerHTML = minutesInt;
//             minutesInt--;
//             secondsInt = 60;

//         }
//         if ( minutesInt == 0 && secondsInt == 0 ){
//             hoursInt--;
//             hours.innerHTML = hoursInt;
//             minutesInt = 59;
//             // if(secondsInt == 0 && minutesInt == 0 && hoursInt == 0){}
//             // hoursInt= 60;
//         }

//         if (secondsInt == 0 && minutesInt == 0 && hoursInt == 0) {
//             console.log(dayInt);
//             dayInt--;
//             days.innerHTML = dayInt
//             hoursInt = 24;
//             console.log("");
//         }

//     }
// }
function reloj() {
    if (secondsInt >= 1) {
        console.log(secondsInt);
        secondsInt--;
        seconds.innerHTML = secondsInt;

        if (secondsInt <= 0) {
            if (minutesInt > 0) {
                minutesInt--;
                secondsInt = 60;
            } else if (hoursInt > 0) {
                hoursInt--;
                minutesInt = 59;
                secondsInt = 60;
            } else if (dayInt > 0) {
                dayInt--;
                hoursInt = 23;
                minutesInt = 59;
                secondsInt = 60;
            }
            minutes.innerHTML = minutesInt;
            hours.innerHTML = hoursInt;
            days.innerHTML = dayInt;
        }
//         if (secondsInt ==-0 && minutesInt == 0 && hoursInt == 0){
//         modal.style.display = "flex"
// }

    }
}

btn.addEventListener("click", function() {
    var intervalo = setInterval(reloj, 1000);
});
