// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acumulador = 0;
    for (var i= 1; i <= 10;i ++ ){
      acumulador=acumulador + i 
    }
      return acumulador
    
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var resultado=[];
  var indice = 0;
  while(indice<array.length){
    if (array[indice] %2===0){
      resultado.push(array[indice]);
    }
       indice ++;
  }
     return resultado;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  
  return array.map(function(numero){
        return numero ** 2
  });
    
  }
  

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var resultado=array.reduce(function(acc ,numero){
       return  acc + numero
  });
  return resultado
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var numeroAstring= num + "";
  return numeroAstring.length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
