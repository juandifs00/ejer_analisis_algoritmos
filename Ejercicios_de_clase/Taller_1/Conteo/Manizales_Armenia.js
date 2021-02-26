/**
 * Entre Manizales y Armenia hay 3 carreteras ¿De cuantos modos puede viajarse de Manizales a Armenia?
 * 
 * node Ejercicios_de_clase/Taller_1/Manizales_Armenia.js
 */

 const Viajes = () => {
     let Manizales = 3;
     let Armenia =1;
     let contador = 1;
     
     for (let i = 1; i <= Armenia; i++){
         for (let j = 1; j <= Manizales; j++){
            console.log("Trayectos:", contador, "Manizales:", i, "Armenia:", j)
            contador++; i++;
         }
    }
}

 console.time("Ejercicio 2");
 Viajes();
 console.timeEnd("Ejercicio 2");