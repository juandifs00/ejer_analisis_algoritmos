/**
 * Sofia trabaja en una tienda de ropa. Se le ha asignado la tarea de vestir a un maniquí 
 * con una falda, una blusa y un par de zapatos de una exposición de faldas, blusas y zapatos 
 * que hacen juego. Ya que todas las prendas combinan, ella puede elegir cualquier blusa, 
 * cualquier falda y cualquier par de zapatos y el atuendo se verá bien. 
 * Si hay 3 faldas, 5 blusas y 2 pares de zapatos, ¿De cuántas maneras distintas puede vestir al maniquí?
 */

 const Maniqui = () => {
     let faldas = 3;
     let blusas = 5;
     let zapatos = 2;
     let contador = 0;

     for (let i = 1; i <= blusas; i++){
         for (let j = 1; j <= faldas; j++){
             for (let k = 1; k <= zapatos; k++){
                 contador++;
                 console.log("Combinaciones posbiles:", contador);
             }
         }
     }
 }

 console.time("Ejercicio 5");
 Maniqui();
 console.timeEnd("Ejercicio 5");