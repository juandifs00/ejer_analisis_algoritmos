/**
 * En tres mercados de una ciudad se venden arroz por bulto; en el primer mercado 
 * hay disponibles seis tiendas, en el segundo cuatro y en el tercer mercado cinco tiendas. 
 * ¿De cuántas maneras puede realizarse la compra de un bulto de arroz?
 */

const Mercados = () => {
    let mercado_1 = 6;
    let mercado_2 = 4;
    let mercado_3 = 5;
    let contador = 1;

    for (let i = 1; i <= mercado_1; i++){
        console.log("Posibilidades de comprar arroz:", contador, 
        "Maneras de comprar arroz en el mercado 1;", i);
        contador++;
    }

    for (let j = 1; j <= mercado_2; j++){
        console.log("Posibilidades de comprar arroz:", contador, 
        "Maneras de comprar arroz en el mercado 2;", j);
        contador++;
    }

    for (let k = 1; k <= mercado_3; k++){
        console.log("Posibilidades de comprar arroz:", contador, 
        "Maneras de comprar arroz en el mercado 3;", k);
        contador++;
    }
}

console.time("Ejercicio 3");
Mercados();
console.timeEnd("Ejercicio 3");