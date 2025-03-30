/*33. Realizar la evolución del ejercicio anterior sin tener en cuenta si
la letra pasada como parámetro está en mayúsculas o minúsculas Hacer
una función contadorDeLetras2 que reciba como parámetro de entrada dos
cadenas de texto y una letra y devuelva la cadena de texto en la que
dicha letra está más presente. Utilizar para ello un bucle for. No
tener en cuenta si la letra pasada como parámetro está en mayúsculas o
minúsculas.*/
function contadorDeLetras(texto, letra) {
    let contador = 0;
    letra = letra.toLowerCase();
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === letra) {
            contador++;
        }
    }
    return contador;
}

function contadorDeLetras2(texto1, texto2, letra) {
    let count1 = contadorDeLetras(texto1, letra);
    let count2 = contadorDeLetras(texto2, letra);
    
    if (count1 > count2) {
        return texto1;
    } else if (count2 > count1) {
        return texto2;
    } else {
        return "Ambas cadenas tienen la misma cantidad de letras.";
    }
}

console.log(contadorDeLetras2("hola", "mundo", "o"));
console.log(contadorDeLetras2("javascript", "programación", "a"));
console.log(contadorDeLetras2("hola", "adios", "o"));
console.log(contadorDeLetras2("python", "java", "a"));