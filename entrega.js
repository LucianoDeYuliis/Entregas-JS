 //const dolarBlue = 297;
 //const fondos = 100000
 //let cantidad = prompt("Ingresar cantidad a comprar de usd")

 //if (dolarBlue * cantidad <= fondos ) {
   // console.log("Puede comprar")
 //} else {
   // console.log("No puede comprar")
 //}




 function Compra(){
    let dolarblue = document.getElementById("dolarblue").value;
    let cantidad = document.getElementById("cantidad").value;
    let fondos = document.getElementById("fondos").value;

    alert("Precio del usd blue: " + dolarblue);
    alert("cantidad de usd blue a comprar: " + cantidad);
    alert("fondos: " + fondos);

    if (dolarblue * cantidad <= fondos ) {
        alert("Puede comprar");
    }else{
        alert("No puede comprar");
    }
 }