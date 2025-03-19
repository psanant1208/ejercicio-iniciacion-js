//20. Escribe una función llamada devuelveEnesimaLetra que reciba como
//parámetro de entrada una cadena de texto y un número y devuelva la
//letra que ocupe la posición indicada por el número.
function devuelveEnesimaLetra(cadena, num){
    posicion = 0;

    for (let i = cadena.length-1; i >= 0; i--) {
        if (/[a-zA-ZáéíóúüÁÉÍÓÚÜ]/.test(cadena.charAt(i))) {
            if (i=num){
                return cadena.charAt(i-1);
            }
        }
    }
}

console.log(devuelveEnesimaLetra("illo", 2));