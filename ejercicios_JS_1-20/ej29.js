/*29. Hacer una función crearPalabra que reciba como parámetro de entrada
una letra y un número y genere una nueva palabra que tenga la letra
introducida repetida tantas veces como indique el número.*/
function crearPalabra(letra, numero) {
    return letra.repeat(numero);
}

console.log(crearPalabra("a", 5));
console.log(crearPalabra("b", 3));
console.log(crearPalabra("c", 0));
console.log(crearPalabra("x", 7));