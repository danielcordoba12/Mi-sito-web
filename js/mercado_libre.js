class Automovil {
    constructor(marca,modelo,precio,year,kilometros,ciudad){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.year = year;
        this.kilometros = kilometros;
        this.ciudad = ciudad;

    }
}
let auto1 = new Automovil("Toyota","txl",19000000,2021,45235,"medillin-antioquia");
let marcaAutomovil = auto1.modelo;


let inputBusqueda = document.getElementById("inputBusqueda");

window.addEventListener("load",function(){
// inputBusqueda.addEventListener("keydown",function(event){
    // if(event.key == "Enter"){

        let mainContent = document.getElementById("mainContent");
        mainContent.innerHTML="";
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
        imgAuto.setAttribute("src","img/txl.png");
        imgAuto.setAttribute("class","img-auto")

        // crear contenedor para la informacion
        let boxInfo = document.createElement("div");
        boxAuto.appendChild(boxInfo);
        let txtMarca = document.createElement("label");
        boxInfo.appendChild (txtMarca); 
        boxInfo.setAttribute("class","box-info")
        txtMarca.innerHTML = auto1.marca;
        
        let txtModelo = document.createElement("label");
        boxInfo.appendChild(txtModelo);
        txtModelo.innerHTML = " "+ auto1.modelo;
        txtModelo.setAttribute("class","txtModelo")



    //    let precioInt = 190000;
       let precioFormat = new Intl.NumberFormat("de-DE").format(auto1.precio);
       let txtPrecio = document.createElement("label");
       boxInfo.appendChild(txtPrecio);
       txtPrecio.innerHTML = " "+ precioFormat;
       txtPrecio.setAttribute("class","txtprecio")

    //    kilometraje y preocedencia
        let txtyear = document.createElement("label");
        boxPreocedencia.appendChild(txtAnyo);
        txtyear.innerHTML = auto1.year + " · "


        let txtKilometros = document.createElement("label");
        boxPreocedencia.appendChild(txtKilometros);
        let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto1.kilometros);
        txtKilometros.innerHTML = txtKilometrosFormat + " km";
        


        let boxPreocedencia = document.createElement("div");
        boxInfo.appendChild(boxPreocedencia);
        boxPreocedencia.setAttribute("class","box-procedencia");
        let txtCiudad = document.createElement("label");
        boxPreocedencia.appendChild(txtCiudad);
        txtCiudad.innerHTML = auto1.ciudad + " · "; 




    


        // let txtYear = document.createElement("label");
        // boxInfo.appendChild(txtYear);
        // txtYear.innerHTML =" " + auto1.año;
        // txtYear.setAttribute("class","txtyear")


        // let txtKilometraje = document.createElement("label");
        // boxInfo.appendChild(txtKilometraje);
        // txtKilometraje.setAttribute("class","txtKilometraje")
        // txtKilometraje.innerHTML =" " + auto1.kilometraje;


        // let txtUbicacion = document.createElement("label");
        // boxInfo.appendChild(txtUbicacion);
        // txtUbicacion.innerHTML =" " + auto1.ubicacion;
        // txtUbicacion.setAttribute("class","txtUbicacion")

        

    })
        
// }
// })