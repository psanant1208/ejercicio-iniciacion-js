//7. Verificar si un número dado es primo.
/* 1. Que el número se introduzca por consola.
 2. Introducir el resto en una función.
 3. Que te devuelva si ese número es primo o no.
*/
num = 4;
resultado = "Es primo";
for(let i=num-1; i>1; i--){
    if(num%i==0){
        resultado = "No es primo";
    }
}
console.log(resultado)