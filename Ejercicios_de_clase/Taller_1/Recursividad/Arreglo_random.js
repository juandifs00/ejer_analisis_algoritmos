/**
 * Crear un array números aleatorios. El tamaño del array lo debe de ingresar el usuario.
 */

let array = [];

function ArrayRandom(size) { 
    if (size == 0) {
        console.log(array);
    }else{
        array.push(Math.floor(Math.random() * size));
        ArrayRandom(--size);
    }  
}

const readline = require('readline');

let obtener = readline.createInterface({
    input : process.stdin, output: process.stdout
});

obtener.question("Ingrese el tamaño del arreglo:", function(respuesta) {
    console.time("Ejercicio 1 Recursividad");
    ArrayRandom(parseInt(respuesta));
    console.timeEnd("Ejercicio 1 Recursividad");
    obtener.close();
});