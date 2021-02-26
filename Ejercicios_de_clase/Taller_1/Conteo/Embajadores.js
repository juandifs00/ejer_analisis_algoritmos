/**
 * Veinte países mantienen relaciones diplomáticas, cada país tiene un embajador en los otros países. 
 * Indique la cantidad de embajadores que hay en total.
 */

 const Embajadores = () => {
     let Paises = 20;
     let Embajadores = 19;
     let contador = 1;

     for (let i = 1; i <=Paises; i++){
         for (let j = 1; j <= Embajadores; j++){
             console.log("Número de embajadores:", contador, ";", "País;", i, "Embajador:", j)
             contador++;
         }
     }
 }

 console.time("Ejercicio 4");
 Embajadores();
 console.timeEnd("Ejercicio 4");