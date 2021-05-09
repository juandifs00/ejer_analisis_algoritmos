const Peso_Mochila = (Peso_Full, elementos) => {
    let P_actual = 0;
    let Mochila = [];

    for (let i = 0; i < elementos.length; i++){
        elementos[i].Precio = (elementos[i].Valor/elementos[i].Peso).toFixed(2)
    }

    elementos = elementos.sort((a, b) => b.Precio - a.Precio)
    
    for (let j = 0; j < elementos.length; j++) {
        if(P_actual < Peso_Full){
            if((Peso_Full - P_actual) >= elementos[j].Peso){     
                elementos[j].Cantidad++;
            }else{
                elementos[j].Cantidad = ((1/elementos[j].Peso)*(Peso_Full - P_actual)).toFixed(1) 
            }
            P_actual += elementos[j].Peso;
            Mochila.push(elementos[j]);
        }     
    }
    return Mochila
};

const Valot_Total = (Mochila) => {
    let valorTotal = 0;
    for (let i = 0; i < Mochila.length; i++) {
        valorTotal += Math.round(Mochila[i].Valor * Mochila[i].Cantidad);
    }
    return valorTotal
}

const Peso_Total = (Mochila) => {
    let Peso_Total = 0;
    for (let i = 0; i < Mochila.length; i++) {
        Peso_Total += Math.round(Mochila[i].Peso * Mochila[i].Cantidad);
    }
    return Peso_Total
}

const Mostrar_elementos = (Mochila) => {
    console.log("Resultado:")
    console.log("Peso Total: ", Peso_Total(Mochila));
    console.log("Valor Total: ", Valot_Total(Mochila));
    console.log(Mochila);
}

let Peso_Full = 24;
let elementos = [
    {Id: "01", Peso: 24, Valor: 2, Precio: 0, Cantidad: 0},
    {Id: "02", Peso: 13, Valor: 5, Precio: 0, Cantidad: 0},
    {Id: "03", Peso: 9, Valor: 4, Precio: 0, Cantidad: 0},
    {Id: "04", Peso: 19, Valor: 7, Precio: 0, Cantidad: 0},
    {Id: "05", Peso: 12, Valor: 5, Precio: 0, Cantidad: 0},
    {Id: "06", Peso: 14, Valor: 12, Precio: 0, Cantidad: 0},
    {Id: "07", Peso: 7, Valor: 13, Precio: 0, Cantidad: 0},
    {Id: "08", Peso: 22, Valor: 15, Precio: 0, Cantidad: 0},
    {Id: "09", Peso: 19, Valor: 10, Precio: 0, Cantidad: 0},
    {Id: "10", Peso: 15, Valor: 8, Precio: 0, Cantidad: 0},
    {Id: "11", Peso: 8, Valor: 10, Precio: 0, Cantidad: 0},
    {Id: "12", Peso: 18, Valor: 15, Precio: 0, Cantidad: 0}];

Mostrar_informacion = (Peso_Mochila(Peso_Full, elementos));
console.log(Mostrar_elementos(Mostrar_informacion));