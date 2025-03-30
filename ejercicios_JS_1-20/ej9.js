//9. Buscar el número mayor en un array dado.
let numeros = [1, 2, 3, 4];
let mayor = numeros[0];

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i]>mayor){
        mayor=numeros[i];
    };
}

console.log("El mayor es "+mayor);