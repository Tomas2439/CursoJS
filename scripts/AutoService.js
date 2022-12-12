//---------STOCK---------------
let comestibles = {
    papas_acanaladas: 350,
    papas_fritas: 300,
    palitos_queso: 290,
    donsatur_negrito: 230,
    donsatur_dulce: 230,
    donsatur_salado: 200,
    chocolinas: 350,
    frutigram_chips: 360,
    frutigram_salvado: 360,
}
let coca = {
    coca_cola: 380,
    coca_zero: 400,
    fanta: 380,
    fanta_zero: 400,
    sprite: 380,
    sprite_zero: 400,
    schweppes_tonica: 380,
    schweppes_pomelo: 380,
}

let pepsico = {
    pepsi_cola: 350,
    pepsi_black: 380,
    seven_up: 350,
    seven_free: 380,
    mirinda: 350,
    gatorade: 380,
    h2o_naranja: 320,
    h20_citrus: 320,
    h20_lemonchelo: 320,
}

let golosina = {
    bon_o_bon: 100,
    pico_chupetin: 70,
    pico_masticable: 20,
    sugus_confite: 240,
    turron_mani: 100,
    flynnPaff: 30,
    yapa: 90,
    alfajor_guaymallen: 150,
    gomitas_mogul: 120,
}

//Codigo App

let opcion1=0;
alert("Bienvenido a Auto-AutoService");
do {
    opcion1 = prompt("\nMENU:\n1- Bebidas\n2- Comestibles\n3- Golosinas\n0- Salir\n\nIngrese una opcion");
    if (opcion1 < 0 || opcion1 > 4) {
        alert("Opcion incorrecta.")
        opcion1 = prompt("Ingrese una opcion correctamente");
    }
    switch (opcion1) {
        case 1:
            
            break;

        default:
            break;
    }
}while(opcion1 != 0);