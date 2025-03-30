/*23. Hacer una función devuelveMasLarga2 que reciba como parámetro de
entrada tres cadenas de texto y devuelva la mayor. En caso de que al
menos dos cadenas tengan igual longitud, devolveremos el texto Hay al
menos dos cadenas iguales.*/
function devuelveMasLarga2(cadena1, cadena2, cadena3){
    let respuesta = ""


    if(cadena1.length > cadena2.length && cadena1.length > cadena3.length){
        respuesta = cadena1
    }
    else if(cadena2.length > cadena1.length && cadena2.length > cadena3.length){
        respuesta = cadena2
    }
    else if(cadena3.length > cadena1.length && cadena3.length > cadena2.length){
        respuesta = cadena3
    }
    else if(cadena1.length == cadena2.length || cadena1.length == cadena3.length || cadena2.length == cadena3.length){
        respuesta = "Hay al menos dos cadenas iguales"
    }

    return respuesta
}


console.log(devuelveMasLarga2("aaaaaaaaaaaaaaaaaaaaaaaaaaa", "mimi", "ethrdykjtj"));
console.log(devuelveMasLarga2("lel", "cotton candy ey ey oh", "ere"));
console.log(devuelveMasLarga2("hola como estamos", "kkkkkkkkkkkk", "ohal ocom etsmaos"));
console.log(devuelveMasLarga2("hola como estamos", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "d"));
console.log(devuelveMasLarga2("iiiiil", "gggggn", "fgjf"));