//8. Calcular el promedio de una serie de números predefinidos.
let numeros = [1, 2, 3, 4];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

let promedio = suma / numeros.length;

console.log("El promedio es"+promedio);