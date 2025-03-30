/*28. Realizar la evaluación del ejercicio anterior sin tener en cuenta
si la letra pasada como parámetro está en mayúsculas o minúsculas*/
function tieneLetra(palabra, letra) {
    return palabra.toLowerCase().indexOf(letra.toLowerCase()) !== -1;
}

console.log(tieneLetra("hola", "H"));
console.log(tieneLetra("mundo", "z"));
console.log(tieneLetra("javascript", "A"));
console.log(tieneLetra("programación", "X"));