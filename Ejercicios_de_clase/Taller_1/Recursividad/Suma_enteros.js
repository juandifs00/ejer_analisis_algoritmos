/**
 * Escribir un programa que encuentre la suma de los enteros positivos pares desde N hasta 2.
 * Comprobar que si N es impar se imprima un mensaje de error.
 */

let suma = 0;
function sumaEnterosPositvos(n) {

   if (n%2 != 0) {
       console.log("ERROR: El número ingresado es impar");
   }else{
       if (n==0) {
           return 0;
       }else{
           return n + sumaEnterosPositvos(n-2);
       }
   }
}

console.time("Ejercicio 4 Recursividad");
console.log("Resultado: ",sumaEnterosPositvos(20000));
console.timeEnd("Ejercicio 4 Recursividad");