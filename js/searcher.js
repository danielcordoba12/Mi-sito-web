let button = document.getElementById("button");
let containerSeacher = document.getElementById("containerSeacher");
let containerQuery = document.getElementById("containerQuery");
let container = document.getElementById("container");


button.addEventListener("click",function(){
    container.classList.add("main-searcher-query");
    container.classList.remove("main-searcher-query-hidden");
    container.classList.remove("container-searcher");


});