
let precios = {
    producto: 200,
    hidro: 250,
    secado: 300,
}

let char1 = '';
let char2 = '';
let char3 = "";
let prod_cont = 0;//cantidad de veces se uso el producto (maximo 2 usos).
let hidro_cont = 0;//cantidad de veces que uso el hidrolavao (maximo 2 usos).
let seco_cont = 0;//cantidad de veces que se uso el secado (maximo).

alert('Bienvenido al primer lavadero automatico NECO WASH');

do {
    char1 = (prompt("¿Quiere utilizar el PRODUCTO para el auto? si/no"));

    if (char1 == 'si' || char1 == 'SI' || char1 == 'Si') {
        prod_cont = prod_cont + 1;

        let w1 = prompt("¿Quiere utilizar más producto? si/no ");

        if (w1 == 'si' || w1 == 'SI' || w1 == 'Si') {
            prod_cont = prod_cont + 1;
        } else {
            char1 = 'no';
        }
    }
} while ((char1 == 'si' || char1 == 'SI' || char1 == 'Si') && prod_cont < 2);

console.log(prod_cont);

do {
    char2 = (prompt("¿Quiere utilizar el HIDRO LAVADO? si/no"));

    if (char2 == 'si' || char1 == 'SI' || char1 == 'Si') {
        hidro_cont = hidro_cont + 1;

        let w1 = prompt("¿Quiere utilizarlo más tiempo? si/no ");

        if (w1 == 'si' || w1 == 'SI' || w1 == 'Si') {
            hidro_cont = hidro_cont + 1;
        } else {
            char2 = 'no';
        }
    }

} while ((char2 == 'si' || char2 == 'SI' || char2 == 'Si') && hidro_cont < 2);

console.log(hidro_cont);

do {
    char3 = (prompt("¿Quiere utilizar el SECADO rapido? si/no"));

    if (char3 == 'si' || char3 == 'SI' || char3 == 'Si') {
        seco_cont = seco_cont + 1;
    }

} while ((char3 == 'si' || char3 == 'SI' || char3 == 'Si') && seco_cont < 1);

console.log(seco_cont);
let t_produ = prod_cont * precios.producto;
let t_hidro = hidro_cont * precios.hidro;
let t_seca = seco_cont * precios.secado;
let total = hidro_cont * precios.hidro + prod_cont * precios.producto + seco_cont * precios.secado;


console.log(
    "Producto: " + prod_cont, " x " + precios.producto, " =  " + t_produ,
    "\n Hidrolavado: " + hidro_cont, " x " + precios.hidro, " = " + t_hidro,
    "\n Secado: " + seco_cont, " x " + precios.secado, " = " + t_seca,
    "\n El importe total de: $" + total,
)