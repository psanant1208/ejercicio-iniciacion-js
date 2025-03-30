/*38. Escribe una función llamada firstWord que reciba como parámetro de
entrada una cadena de texto y devuelva la primera palabra de esa
cadena. La primera palabra de la cadena serán todos los caracteres que
hay hasta el primer espacio.
Por ejemplo:
firstWord("see and stop");
Debería devolver «see».*/
function firstWord(texto) {
    return texto.split(" ")[0];
}

console.log(firstWord("see and stop"));
console.log(firstWord("Hola mundo"));
console.log(firstWord("JavaScript es genial"));
console.log(firstWord("  Programación en Java  "));