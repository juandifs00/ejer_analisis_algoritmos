const devolverCambio = (valor, monedas) => {
  monedas = monedas.sort((a, b) => b - a);
  let nroMonedas = monedas.map(() => 0);
  for (let index = 0; index < monedas.length; index++) {
    let moneda = monedas[index];
    let temp = Math.floor(valor / moneda);
    nroMonedas[index] = temp;
    valor = Math.round(valor % moneda, 2);
    if (valor === 0) {
      break;
    }
  }
  return nroMonedas;
};

const imprimirDevuelta = (monedas, nroMonedas) => {
  monedas = monedas.sort((a, b) => b - a);
  for (let index = 0; index < nroMonedas.length; index++) {
    let nroMoneda = nroMonedas[index];
    if (nroMoneda > 0) {
      console.log(`Valor moneda:$${monedas[index]} -> ${nroMoneda}`);
    }
  }
};

let valor = 4750;
let monedas = [1000, 200, 100, 50, 500];
let cantidadMonedas = [3, 5, 10, 20, 30];
let valoresDevuelta = devolverCambio(valor, monedas);
imprimirDevuelta(monedas, valoresDevuelta);
