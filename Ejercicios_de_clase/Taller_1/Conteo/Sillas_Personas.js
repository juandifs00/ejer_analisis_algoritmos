/**
 * ¿De cuantos modos pueden ubicarse en una fila de 10 sillas a 4 personas?
 * 
 * node Ejercicios_de_clase/Taller_1/Sillas_Personas.js
 */

function factorial (n) {
	let parcial = 1; 
	for (i=1; i<=n; i++) {
		parcial *= i; 
	}
	return parcial; 
}

 const Filas = () => {
     let nroSillas = 10;
     let nroPersonas = 4;

     let ubicacion = (factorial(nroSillas))/(factorial(nroSillas - nroPersonas));

     console.log("El número total de maneras posibles de ubicar a las personas es de:", ubicacion);
}

console.time("Ejercicio 1");
Filas();
console.timeEnd("Ejercicio 1");