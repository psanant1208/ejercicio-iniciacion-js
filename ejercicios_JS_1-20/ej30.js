/*30. Completar el ejercicio anterior haciendo que en la nueva palabra
generada las letras estén en mayúsculas.*/
function crearPalabra(letra, numero) {
    return letra.toUpperCase().repeat(numero);
}

console.log(crearPalabra("a", 5));
console.log(crearPalabra("b", 3));
console.log(crearPalabra("c", 0));
console.log(crearPalabra("x", 7));