//3. Calcular el factorial de un número dado.
num = 4;
factorial = 1;

for(let i = num; i > 0; i--){
    factorial = factorial * i;
}

console.log("El factorial de "+num+" es "+factorial)