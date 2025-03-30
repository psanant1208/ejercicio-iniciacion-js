/*37. Escribe una función llamada indexOfIgnoreCase que reciba dos
cadenas de texto y devuelva la posición de la primera ocurrencia de la
segunda cadena de texto en la primera. La función no debería tener en
cuenta mayúsculas y minúsculas.
Por ejemplo:
indexOfIgnoreCase("bit","it");
y
indexOfIgnoreCase("bit","IT");
deberían devolver 1*/
function indexOfIgnoreCase(cadena1, cadena2) {
    return cadena1.toLowerCase().indexOf(cadena2.toLowerCase());
}

console.log(indexOfIgnoreCase("bit", "it"));
console.log(indexOfIgnoreCase("bit", "IT"));
console.log(indexOfIgnoreCase("Hola Mundo", "mundo"));
console.log(indexOfIgnoreCase("JavaScript", "SCRIPT"));