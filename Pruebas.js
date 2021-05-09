/**
 * funcion de sumar 2 numeros
 * @param {*} numero1 
 * @param {*} numero2 
 */
function sumar(numero1, numero2){
    return numero1 + numero2;
}
//console.log(sumar(46, 8))

/**
 * @param {*} numero Número
 */
function devolverNumero(numero){
    return numero;
}
//console.time("devolverNumero");
//console.log(devolverNumero(5000000));
//console.timeEnd("devolverNumero");

/**
 * Funcion del cuadrado de un numero + 2
 * @param {*} numero Número 
 */
function cuadrado(numero){
    return numero * numero +2;
}
//console.time("cuadrado");
//console.log(cuadrado(25));
//console.timeEnd("dcuadrado");

/***
 * Funcion para imprimir numeros
 * @param {*} numero Numero limite 
 */
function imprimirNumeros(numero){
    for (let index = 0; index <= numero; index++){
        console.log(index);
    }
}
//console.time("ImprimirNumeros");
//console.log(imprimirNumeros(150));
//console.timeEnd("ImprimirNumeros");

/**
 * Funcion sumar numeros enteros
 * @param {*} numero Suma de enteros
 */
function sumarNumeros(numero){
    let suma = 0;
    for (let index = 0; index <= numero; index++){
        suma = suma + index;
    }
    return suma;
}
//console.time("SumarNumeros");
//console.log(sumarNumeros(5555));
//console.timeEnd("sumarNumeros");

/**
 * Tablas de Multiplicar
 * @param {*} limite 
 */
function tablaDeMultiplicar(limite){
    let nroItems = 30;
    for (let i = 1; i <= limite; i++){
        console.log("Tabla del " + i)
        for (let j = 1; j <= nroItems; j++){
            console.log(`${i}x${j}=${i * j}`);
        }
        console.log();
    }
}
//console.time("tablaDeMultiplicar");
//tablaDeMultiplicar(15);
//console.timeEnd("tablaDeMultiplicar");

/**
 * Funcion factorial de un numero de manera recursiva
 * @param {*} n 
 */
function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}
//console.time("Factorial Recursivo");
//console.log(factorialRecursivo(10));
//console.timeEnd("Factorial Recursivo");

const solucionRecursiva = (n) => {
    if (n==1) {
        return 1;
    } else {
        return solucionRecursiva(n - 1) + 5    
    } 
}

const solucionEcuacuion = (n) => {
    return (5 * n) - 4;
}

/*console.time("SolucionRecursiva");
let resultado = solucionRecursiva(100);
console.log(resultado);
console.timeEnd("SolucionRecursiva");

console.time("SolucionEcuacion");
let solucion = solucionEcuacuion(100);
console.log(solucion);
console.timeEnd("SolucionEcuacion");
*/

/**
 * ordenar de mayor a menor y luego de menor a mayor.
 * @returns 
 */
/*
const crearVector = () => {
    let vector = [];
    let tam = 10000;
    for (let index = 0; index < tam; index++) {
      let random = Math.random() * 1000;
      vector.push(Math.round(random));
    }
    return vector;
  };
  
  let vector_numeros = crearVector();
  
  console.log(vector_numeros);
  */ 
 /*
console.log("buenas a todos");
console.log(vector_numeros);
*/
