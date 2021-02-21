const yargs = require("yargs");
const argumentos = yargs.argv;

/** 
 * En un baile escolar la profesora forma parejas extrayendo de una bolsa el nombre de un niño y de otra 
 * bolsa el nombre de la niña. Si en el aula hay 9 niños y 7 niñas, ¿Cuantas posibles parejas distintas se
 * podrían formar? R/ 63 maneras posibles
 * 
 *  Comando: node Ejercicios_de_clase/Principios_de_conteo/Ejercicio_2.js --ninos=9 --ninas=7
 */

const Baile_Escolar = () => {
    let nroninos = argumentos.ninos;
    let nroninas = argumentos.ninas;
    let contador = 1;
    console.log("Numero de niños:", nroninos);
    console.log("Numero de niñas:", nroninas);

    for (let i = 1; i <= nroninos; i++) {
        for (let j = 1; j <= nroninas; j++) {
            console.log(contador, "Combinaciones: " , "Niño: " , i, " y Niña: " , j)
            contador++;
        }      
    }
}
Baile_Escolar();