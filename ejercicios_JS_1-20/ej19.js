//19. Escribe una función llamada devuelveUltimaLetra que reciba como
//parámetro de entrada una cadena de texto y devuelva la última letra.
function devuelveUltimaLetra(cadena){
    
    for (let i = cadena.length-1; i >= 0; i--) {
        if (/[a-zA-ZáéíóúüÁÉÍÓÚÜ]/.test(cadena.charAt(i))) {
            return cadena.charAt(i);
        }
    }
}

console.log(devuelveUltimaLetra("illo"));