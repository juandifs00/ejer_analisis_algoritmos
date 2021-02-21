const yargs = require("yargs");
const argumentos = yargs.argv;

/** 
 * En el estante de una biblioteca hay 5 libros de estadistica de autores diferenrentes y 7 libros
 * de matematicas, tambien de distintos autores. Si deseamos seleccionar un libro solo, ¿Cuantas 
 * opciones diferentes tenemos?
 * R/ Se tienen 12 diferentes opciones
 * 
 *  Comando: node Ejercicios_de_clase/Principios_de_conteo/Ejercicio_5.js --Estadistica=5 --Matematicas=7
 */

const Estante_Biblioteca = () => {
    let nroLibrosEstadistica = argumentos.Estadistica;
    let nroLibrosMatematica = argumentos.Matematicas;
    let contador = 1;
    console.log("Numero de Libros Estadistica:", nroLibrosEstadistica);
    console.log("Numero de libros de Matematicas:", nroLibrosMatematica);

    for (let i = 1; i <= nroLibrosEstadistica; i++) {
        console.log("Opcion", contador, "Libro de Estadistica del autor: ", i)
        contador++;
    }

    for (let j = 1; j <= nroLibrosMatematica; j++) {
        console.log("Opcion", contador, "Libro de Matematica del autor: ", j )
        contador++;
    }  
}
Estante_Biblioteca();