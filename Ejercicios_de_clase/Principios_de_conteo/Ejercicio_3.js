const yargs = require("yargs");
const argumentos = yargs.argv;

/** 
 * Veinte paises mantienen relaciones diplomaticas, cada pais tiene un embajador en los otros paises.
 * Indique la cantidad de embajadores que hay en total. R/ Hay 380 Embajadores en total
 * 
 *  Comando: node Ejercicios_de_clase/Principios_de_conteo/Ejercicio_3.js --Paises=20 --Embajadores=20
 */

const Relaciones_Diplomaticas = () => {
    let Paises = argumentos.Paises;
    let Embajadores = argumentos.Embajadores;
    let contador = 1;
    console.log("Numero de paises:", Paises);
    console.log("Numero de Embajadores:", Embajadores);

    for (let i = 1; i <= Paises; i++) {
        for (let j = 1; j <= Embajadores; j++) {
            if(i != j){
                console.log("Cantidad de embajadores:",contador,"--Combinaciones--", "Pais:",
                Paises, "Embajador", i, "del pais:", j)
                contador++;
            }
        }      
    }
}
Relaciones_Diplomaticas();