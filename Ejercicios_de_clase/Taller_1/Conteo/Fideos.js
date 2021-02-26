/**
 * Un restaurante de fideos ofrece 5 tipos de fideos para elegir. Cada plato viene 
 * con una de 4 carnes y una de 6 salsas diferentes a elección. 
 * ¿Cuántas combinaciones se pueden hacer?
 */

 const Comida = () => {
     let fideos = 5;
     let carnes = 4;
     let salsas = 6;
     let contador = 0;

     for (let i = 1; i <= fideos; i++){
         for (let j = 1; j <= carnes; j++){
             for (let k = 1; k <= salsas; k++){
                 contador++;
                 console.log("Cantidad de combinaciones posibles:", contador);
             }
         }
     }
 }

 console.time("Ejercicio 6");
 Comida();
 console.timeEnd("Ejercicio 6");