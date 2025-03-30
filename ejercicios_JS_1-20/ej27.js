/*27. Hacer una función tieneLetra que reciba como parámetro de entrada
una cadena de texto y una letra y devuelva true si la letra esta
presente en la palabra y false si no lo esta. Utilizar para ello el
método indexOf.*/
function tieneLetra(palabra, letra) {
    return palabra.indexOf(letra) !== -1;
}

console.log(tieneLetra("hola", "h"));
console.log(tieneLetra("mundo", "z"));
console.log(tieneLetra("javascript", "a"));
console.log(tieneLetra("programación", "x"));