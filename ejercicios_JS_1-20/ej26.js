/*26. Hacer una función generarNombre3 que reciba como parámetros de
entrada tres cadenas de texto. Si la longitud de alguna cadena es menor
que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena
tiene menos de 5 letras, devolver una nueva palabra utilizando las tres
últimas letras de cada palabra.*/
function generarNombre3(palabra1, palabra2, palabra3) {
    if (palabra1.length < 5 || palabra2.length < 5 || palabra3.length < 5) {
        return "error";
    }

    return palabra1.slice(-3) + palabra2.slice(-3) + palabra3.slice(-3);
}


console.log(generarNombre3("hola", "adios", "adios"));
console.log(generarNombre3("adios", "hola", "adios"));
console.log(generarNombre3("adios", "adios", "hola"));
console.log(generarNombre3("pablo", "sancho", "antunez"));