/**
 * Escribe una función recursiva que dado un número entero n, retorne un array con
 * todos los números enteros en orden decreciente desde n a 1.
 */

let descendiente = [];

function Random_descendiente(n) {

    descendiente.push(n)

    if(n == 1)
    {
        return console.log(descendiente)
    } else
    {        
        return Random_descendiente(--n);
    }
}

console.time("Ejercicio 3 Recursividad");
console.log(Random_descendiente(100));
console.timeEnd("Ejercicio 3 Recursividad");