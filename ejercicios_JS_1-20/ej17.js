//17. Escribe una función llamada longitud que reciba como parámetro de
//entrada una cadena de texto y devuelva el número de letras que tiene.
//Por ejemplo la siguiente llamada a la función:
//longitud("Ana"); Debería devolver 3.
function longitud(cadena){
    let letras = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (/[a-zA-ZáéíóúüÁÉÍÓÚÜ]/.test(cadena.charAt(i))) {
            letras++;
        }
    }

    return letras;
}

console.log(longitud("illo illo"));