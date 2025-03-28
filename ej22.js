//22. Hacer una función devuelveMasLarga que reciba como parámetro de
//entrada dos cadenas de texto y devuelva la mayor. En caso de que ambas
//cadenas sean iguales, devolveremos la correspondiente al primer
//parámetro de la función.
function devuelveMasLarga(cadena1, cadena2){
    let cadenaMayor = ""
    cadena1=cadena1.trim()
    cadena1=cadena1.trim()

    if(cadena1.length > cadena2.length){
        cadenaMayor = cadena1
    }
    else if(cadena1.length < cadena2.length){
        cadenaMayor = cadena2
    }
    else if(cadena1.length == cadena2.length){
        cadenaMayor = cadena1
    }

    return cadenaMayor
}


console.log(devuelveMasLarga("aaaaaaaaaaaaaaaaaaaaaaaaaaa", "mimi"));
console.log(devuelveMasLarga("lel", "cotton candy ey ey oh"));
console.log(devuelveMasLarga("hola como estamos", "kkkkkkkkkkkk"));
console.log(devuelveMasLarga("hola como estamos", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"));
console.log(devuelveMasLarga("iiiiil", "gggggn"));