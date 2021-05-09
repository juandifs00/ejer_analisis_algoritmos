const Lista = [0, 13, 0.58, 6.8, 894, 59, 284, 100, 999, -1.5, -250];

function bucketSort(Lista, NumBucket) {
  ValorMin = Lista[0],
  ValorMax = Lista[0]

  //Generar Numero mayor y Menor de la Lista
  Lista.forEach(function (currentVal) {
    if (currentVal < ValorMin) {
      ValorMin = currentVal;
    } else if (currentVal > ValorMax) {
      ValorMax = currentVal;
    }
  })

  //Generar el tamaño de cada cubeta
  let bucketCount = Math.floor((ValorMax - ValorMin) / NumBucket) + 1;

  //Generar la cubetas
  let allBuckets = new Array(NumBucket);
  
  //Se le asigna un array a cada Cubeta
  for (let i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }
  
  //Asigna del array el numero a su respectiva Cubeta
  Lista.forEach(function (currentVal) {
    allBuckets[Math.floor((currentVal - ValorMin) / bucketCount)].push(currentVal);
  });

  Lista.length = 0;

  //llama otra Funcion Para ordenar la Cubetas
  allBuckets.forEach(function(bucket) {
    OrdenarBucket(bucket);
  //Unifica los elementos de las Cubetas previamente Ordenados
    bucket.forEach(function (element) {
      Lista.push(element)
    });
  });

  return Lista;
}

//Ordenar Cubetas
function OrdenarBucket(Lista) {
  let length = Lista.length;
  let j;
  for(let i = 1; i < length; i++) {
     let temp = Lista[i];
     for(j = i - 1; j >= 0 && Lista[j] > temp; j--) {
        Lista[j+1] = Lista[j];
     }
     Lista[j+1] = temp;
  }
  return Lista;
}

console.time("Tiempo ejecución Bucket Sort");
console.log(bucketSort(Lista, 10));
console.timeEnd("Tiempo ejecución Bucket Sort");