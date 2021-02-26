/**
 * Igual que el ejercicio anterior, pero meter en el array números aleatorios sin que se repitan.
 */

let array = [];

function ArrayRandom(size) {
    if (array.length == size){
        console.log(array);
    }else{
        if (array.length == 0) {
            array.push(Math.floor(Math.random() * size));
            ArrayRandom(size);
        }else{
            let num = Math.floor(Math.random() * size);
            repetidos(num, array.length-1);
            ArrayRandom(size);
        }
    }
}

function repetidos(num, l) {
    if (l < 0) {
        array.push(num);
    }else{
        if (num == array[l]) {
            
        }else{
            repetidos(num, --l);
        }
    }  
}

const readline = require('readline');

let captura = readline.createInterface({
    input : process.stdin, output: process.stdout
});

captura.question("Ingrese el tamaño del arreglo:", function(respuesta) {
    console.time("Ejercicio 2 Recursividad");
    ArrayRandom(parseInt(respuesta));
    console.timeEnd("Ejercicio 2 Recursividad");
    captura.close();
});