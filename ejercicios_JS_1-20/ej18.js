//18. Escribe una función llamada devuelvePrimeraLetra que reciba como
//parámetro de entrada una cadena de texto y devuelva la primera letra.
function devuelvePrimeraLetra(cadena){
    
    for (let i = 0; i < cadena.length; i++) {
        if (/[a-zA-ZáéíóúüÁÉÍÓÚÜ]/.test(cadena.charAt(i))) {
            return cadena.charAt(i);
        }
    }
}

console.log(devuelvePrimeraLetra("illo"));