/*31. Hacer una función addGuiones que reciba como parámetro de entrada
una cadena texto y devuelva una nueva cadena que tendrá un guión medio
detrás de cada letra. Utilizar para ello un bucle for.*/
function addGuiones(texto) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        resultado += texto[i] + "-";
    }
    return resultado;
}

console.log(addGuiones("hola"));
console.log(addGuiones("mundo"));
console.log(addGuiones("javascript"));
console.log(addGuiones("programación"));