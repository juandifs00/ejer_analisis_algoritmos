const yargs = require("yargs");
const argumentos = yargs.argv;

/** 
 * ¿Cúantos numeros de 3 cifras existen? Donde el numero no puede empezar por 0
 * R/ Existen 900 numeros de 3 cifras
 * 
 *  Comando: node Ejercicios_de_clase/Principios_de_conteo/Ejercicio_4.js --cifras=999
 */

const Tres_digitos = () => {
    let nroCifras = argumentos.cifras;
    let contador = 1;
    console.log("Numero de Cifras:", nroCifras);

    for (let i = 0; i <= nroCifras; i++) {
        if(i >= 100){
            console.log("Cantidad de numeros existentes con 3 cifras:", contador ,"----", 
            "El numero es: ", i)  
            contador++;      
        }    
    }
}
Tres_digitos();