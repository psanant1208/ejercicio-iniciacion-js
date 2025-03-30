/*32. Hacer una función contadorDeLetras que reciba como parámetro de
entrada una cadena de texto y una letra y devuelva el número de veces
que esa letra está presente en la palabra. Utilizar para ello un bucle
for.*/
function contadorDeLetras(texto, letra) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }
    return contador;
}

console.log(contadorDeLetras("hola", "o"));
console.log(contadorDeLetras("mundo", "o"));
console.log(contadorDeLetras("javascript", "a"));
console.log(contadorDeLetras("programación", "o"));