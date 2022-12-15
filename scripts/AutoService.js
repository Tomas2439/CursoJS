//---------CUPONES---------------
const cupones = { //Se ingresan los valores para porcentajes. producto * valor = valor con descuento incluido.
    vip: 0.50,
    socio: 0.40,
    estudiante: 0.25,
}

//---------------funciones
function ingreso_datos(arreglo) {
    let producto = '';
    let precio = 0;
    let follow = '';

    do {
        follow = '';
        console.log(carrito);
        producto = prompt("Ingrese el producto: ");
        precio = parseInt(prompt("Ingrese precio del producto"));
        total += precio;
        arreglo.push(producto + '   $' + precio);
        follow = prompt("¿Quiere agregar otro producto? Si/No");

    } while ((follow == 'si' || follow == 'sI' || follow == 'SI' || follow == 'Si'));

    return arreglo;
}

function valor_final(valor_total) {
    let respuesta = ''; let dato = false; let final = 0;
    //Se pide el cupon. Si no ingresa bien el cupon, no se hace el descuento.
    //cupones valido= vip, estudiante,socio.
    respuesta = prompt("Ingrese su cupon\nSi no posee un cupon pulse aceptar");
    dato = buscador(dato, respuesta);
    if (dato == true) {
        final = valor_total - (valor_total * cupones[respuesta]);
    } else {
        console.log("Cupon no ingresado. Descuento sin efectuar");
        final = valor_total;
    }
    return final;
}

function buscador(question, palabra_buscar) { // se copian las propiedades del objeto a un arreglo
    const valores = Object.keys(cupones);
    if (valores.includes(palabra_buscar) == true) { // se compara si la palabra esta dentro del arreglo (la misma propiedad del objeto)
        question = true;
    }
    return question;
}
function ticket(carrito, precio_final, total) {
    alert('Ticket:\n\n' + carrito + '\n\nPrecio total:  $' + total + '\n\nPrecio final:  $' + precio_final);
}
//------------------------------------------------------------------------------------
/*
    Intento de carrito.
    Se agregaran los objetos por computadora.
    Ejemplo de una caja de supermercado.
        +Se ingresaran los datos manualmente por pantalla. 
        +Se almacenaran en un arreglo vacio. 
        +Objeto (cupones) si hay un cupon valido, habra un descuento.
        +Proceso de eliminacion (busqueda y eliminacion).
*/

//variables globales ------  aplicacion script
let carrito = [];
let total = 0;
let precio_final = 0;

alert("Bienvenido a la aplicacion Cajero - Service");
carrito = ingreso_datos(carrito); //se ingresan datos por copia arreglo = arreglo;
console.log(carrito);
console.log(total);
precio_final = valor_final(total)
console.log(precio_final);
ticket(carrito, precio_final, total);




