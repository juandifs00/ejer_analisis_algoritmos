const yargs = require("yargs");
const argumentos = yargs.argv;

/**
 * Lucia tiene en su ropero cuatro vestidos y cinco conjuntos deportivos. 
 * ¿De cuantas maneras puede vestirse? R/ 9 maneras
 * 
 *  Comando: node Ejercicios_de_clase/Principios_de_conteo/Ejercicio_1.js --Vestidos=4 --ConDeportivos=5
 */

const Armario = () => {
  let nroVestidos = argumentos.Vestidos;
  let nroDeportivos = argumentos.ConDeportivos;
  let contador = 0;
  console.log("Numero de vestidos:", nroVestidos);
  console.log("Numero de conjuntos deprotivos:", nroDeportivos);

  for (let i = 1; i <= nroVestidos; i++) {
      contador++;
      console.log(contador , " Vestido: " , i)        
  }

  for (let j = 1; j <= nroDeportivos; j++) {
      contador++;
      console.log(contador , "Conjuto Deportivo: " , j)        
  }

}
Armario();