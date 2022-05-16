/* /*var estudiantes = ['Valen', 'Tamara','Nahuel', 'Franco', 'Pablo' ]
function ingresar(){
   x=prompt('ingresa un nombre')
   document.write (estudiantes + "<br>")
  estudiantes.push (x)
  document.write (estudiantes)
}
*/
/* 
function mousearriba (){
    console.log ('estan arriba mío');

};
function mousefuera () {
    console.log ('están lejos de mí')
} */

/* function eventus(){
    console.log (event)
/* }  */
/* function eventus(){
    console.log (event.key)
} 

/* function mensaje (x) {
    alert(x)
} */

/*var nombre = '';
function asignar(x){
    nombre = x;
    console.log (nombre)
}*/


/*Ahora que ha visto ese evento y ha visto que tipo de dato es… Revisa sus propiedades. 
Agregale a la función la orden de mostrar en la consola qué tecla fue presionada.
/* */


/* document.getElementById("G").style.color="green"
document.getElementById("G").style.display="flex" */ 

/* 1.Al pasar por encima de cada uno de los párrafos deberán cambiar el color del texto, el tamaño y el borde. (mouseover y mouseout).
   2.En el formulario de contacto se deberá “guardar” el nombre e imprimir en un div vacío el contenido 
   “Gracias [nombre ingresado] por comunicarse con nosotros”. Los datos se guardarán con el botón. 
   3.Los 4 botones serán utilizados para cambiar el color del background de la página (se puede también usar background imagen. (click o onclick)
    4.Dentro del primer div vacío deberás crear un elemento imagen (createElement) y asignarlo a ese div (appendChild). 
    Todo eso se hará una vez se clickee el botón restante. */

    //EJERCICIO 1

function bordeytexto1 ()  {
    document.getElementById ("p-1").style.border= "5px solid black";
    document.getElementById ("p-1").style.color= "red";
    
}
function bordeytexto2 ()  {
    document.getElementById ("p-2").style.border= "5px solid black";
    document.getElementById ("p-2").style.color= "green";
    
}
function bordeytexto3 ()  {
    document.getElementById ("p-3").style.border= "5px solid black";
    document.getElementById ("p-3").style.color= "yellow";
    
}

function bordeytextoNO1 ()  {
    document.getElementById ("p-1").style.border= "5px ";
    document.getElementById ("p-1").style.color= "black";
    
}
function bordeytextoNO2 ()  {
    document.getElementById ("p-2").style.border= "5px ";
    document.getElementById ("p-2").style.color= "black";
    
}
function bordeytextoNO3 ()  {
    document.getElementById ("p-3").style.border= "5px";
    document.getElementById ("p-3").style.color= "black";
    
}

    //EJERCICIO 2

/* */


document.getElementById("boton").addEventListener("click", ponerNombre);

function ponerNombre () {
    var nombre = document.getElementById("nombreIngresado").value;

    document.getElementById("ej2").innerHTML += 'Gracias ' + nombre + ' por comunicarse con nosotros';
    console.log('Gracias' + nombre + 'por comunicarse con nosotros');
    
    
    
  
}


    //EJERCICIO 3

    document.getElementById("btng").addEventListener("click", cambiarBody);
    document.getElementById("btny").addEventListener("click", cambiarBody2);
    document.getElementById("btnv").addEventListener("click", cambiarBody3);
    document.getElementById("btnb").addEventListener("click", cambiarBody4);
    document.getElementById("btno").addEventListener("click", cambiarBody5); 

function cambiarBody(){  document.getElementsByTagName("body")[0].style.backgroundColor = "green";}
function cambiarBody2(){  document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";}
function cambiarBody3(){  document.getElementsByTagName("body")[0].style.backgroundColor = "violet";}
function cambiarBody4(){  document.getElementsByTagName("body")[0].style.backgroundColor = "blue";}
function cambiarBody5(){  document.getElementsByTagName("body")[0].style.backgroundImage = "url('img/boys-1793421_1280.jpg')";
}

    //EJERCICIO 4

document.getElementById("boton").addEventListener("click", agregarImg);
function agregarImg (){
var imagen = document.createElement("img");
imagen.src = "img/boys-1793421_1280.jpg";
document.getElementById("divImg").appendChild(imagen);
}

   /*  if (document.getElementsByTagName("button")[0].id == "btng"){
        document.getElementsByTagName("body")[0].style.backgroundColor = "green";

    } else if (document.getElementsByTagName("button")[1].id == "btny"){
        document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
    }


} 

console.log(document.getElementById("btng").id)
console.log(document.getElementsByTagName("button")[0].id ) */