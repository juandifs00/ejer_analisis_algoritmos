const yargs = require("yargs");
const argumentos = yargs.argv;

/** 
 * En tres estados de una ciudad se vende arroz por bulto; en el primer mercado hay disponibles seis
 * tiendas, en el segundo cuatro y en el tercer mercado hay disponbles cinco tiendas. ¿De cuantas
 * maneras puede realizarse la compra de un bulto de arroz?
 * R/
 * 
 *  Comando: node Ejercicios_de_clase/Principios_de_conteo/Ejercicio_6.js --Tienda1=6 --Tienda2=4 --Tienda3=5
 */

const Mercado = () => {
    let nroTienMercado1 = argumentos.Tienda1;
    let nroTienMercado2 = argumentos.Tienda2;
    let nroTienMercado3 = argumentos.Tienda3;
    let contador = 1;
    console.log("Numero de tiendas en el mercado 1:", nroTienMercado1);
    console.log("Numero de tiendas en el mercado 2:", nroTienMercado2);
    console.log("Numero de tiendas en el mercado 3:", nroTienMercado3);
    console.log();

    for (let i = 1; i <= nroTienMercado1; i++) {
        console.log("Manera numero:", contador,"----", "Primer mercado, tienda numero: " , i)
        contador++;
    }

    for (let j = 1; j <= nroTienMercado2; j++) {
        console.log("Manera numero:",contador,"----", "Seguno mercado, Tienda numero; " , j)
        contador++;
    }  

    for (let k = 1; k <= nroTienMercado3; k++) {
        console.log("Manera numero:",contador,"----","Tercer mercado, tienda numero: " , k)
        contador++;
    }     
}
Mercado();