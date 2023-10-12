class Automovil {
    constructor(marca,modelo,precio,year,kilometros,ciudad,imagen){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.year = year;
        this.kilometros = kilometros;
        this.ciudad = ciudad;
        this.imagen = imagen;


    }
}
let auto1 = new Automovil("Toyota","txl",25000000,2021,45235,"Medillin,Antioquia","img/txl.png");
let auto2 = new Automovil("Toyota", "Hilux",19000000, 2022, 87543, "Pialito, Huila","img/hilux.jpg");
let auto3 = new Automovil("Ford", "Raptor",22000000, 2021, 32444, "Bruselas, Huila","img/raptor.png");
let auto4 = new Automovil("Chevrolet", "Camaro",42000000, 2022, 64444, "Bruselas, Huila","img/camaro.jpg");




var arregloDeAutos = [auto1, auto2, auto3,auto4];


let inputBusqueda = document.getElementById("inputBusqueda");

// window.addEventListener("load",function(){
    let mainContent = document.getElementById("mainContent");

inputBusqueda.addEventListener("keydown",function(event){
        mainContent.innerHTML="";

    if(event.key == "Enter"){
        arregloDeAutos.forEach(function(auto, indice) {
            console.log("Auto " + (indice + 1) + ":");
            console.log(auto.marca);

        let boxAuto = document.createElement("div");
        mainContent.appendChild(boxAuto);
        boxAuto.setAttribute("class","box-auto")


        // crear inforacion para el vehiculo 
        // crear contenedor para la imagen
        let boxImg = document.createElement("div");

        let boxCorazon = document.createElement("div");
        boxImg.appendChild(boxCorazon);
        boxCorazon.setAttribute("class","box-corazon");
        let corazon = document.createElement("div");
        boxCorazon.appendChild(corazon);    
        corazon.setAttribute("class","corazon");

        // cargando icono corazon

        let iconHeart = document.createElement("i");
        corazon.appendChild(iconHeart);
        iconHeart.setAttribute("class", "icon-style-hearth fa-regular fa-heart");


        boxAuto.appendChild(boxImg);
        let imgAuto = document.createElement("img");
        boxImg.appendChild(imgAuto);
        boxImg.setAttribute("class","box-img");
        imgAuto.setAttribute("src",auto.imagen);
        imgAuto.setAttribute("class","img-auto")

        // crear contenedor para la informacion
        let boxInfo = document.createElement("div");
        boxAuto.appendChild(boxInfo);
        let txtMarca = document.createElement("label");
        boxInfo.appendChild (txtMarca); 
        boxInfo.setAttribute("class","box-info")
        txtMarca.innerHTML = auto.marca;
        
        let txtModelo = document.createElement("label");
        boxInfo.appendChild(txtModelo);
        txtModelo.innerHTML = " "+ auto.modelo;
        txtModelo.setAttribute("class","txtModelo"  )



    //    let precioInt = 190000;
    let precioFormat = new Intl.NumberFormat("de-DE").format(auto.precio);
    let txtPrecio = document.createElement("label");
    boxInfo.appendChild(txtPrecio);
    txtPrecio.innerHTML = " "+ precioFormat;
    txtPrecio.setAttribute("class","txt-precio")

    //    kilometraje y preocedencia
    let boxProcedencia = document.createElement("div");
    boxInfo.appendChild(boxProcedencia);
    boxProcedencia.setAttribute("class", "box-procedencia");

        
    let txtyear = document.createElement("label");
    boxProcedencia.appendChild(txtyear);
    txtyear.innerHTML = auto.year + " · ";


        let txtKilometros = document.createElement("label");
        boxProcedencia.appendChild(txtKilometros);
        let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto.kilometros);
        txtKilometros.innerHTML = txtKilometrosFormat + "km <br>";
        


        let txtciudad = document.createElement("label");
        boxProcedencia.appendChild(txtciudad);
        txtciudad.innerHTML = auto.ciudad;


        let boxLineaDiv = document.createElement("div");
        mainContent.appendChild(boxLineaDiv);
        boxLineaDiv.setAttribute("class", "box-linea-div");
    



});
        

    // })
        
}
})