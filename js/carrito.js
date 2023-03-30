let imgBox = document.getElementById("imgBox")
let boxImgMini1 = document.getElementById("boxImgMini1")
let boxImgMini2 = document.getElementById("boxImgMini2")
let boxImgMini3 = document.getElementById("boxImgMini3")
let boxImgMini4 = document.getElementById("boxImgMini4")
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");

imgMini2.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-2.jpg");
    boxImgMini1.classlist.add("box-img-mini")
});
imgMini3.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-3.jpg");
});
imgMini4.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-4.jpg");
});
imgMini1.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-1.jpg");
});




