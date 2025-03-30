/*24. Hacer una función generarNombre que reciba como parámetros de
entrada tres cadenas de texto. Si la longitud de alguna cadena es menor
que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena
tiene menos de 5 letras, devolver una nueva palabra utilizando las tres
primeras letras de cada palabra.*/
function generarNombre(palabra1, palabra2, palabra3) {
    if (palabra1.length < 5 || palabra2.length < 5 || palabra3.length < 5) {
        return "error";
    }

    return palabra1.substring(0, 3) + palabra2.substring(0, 3) + palabra3.substring(0, 3);
}


console.log(generarNombre("hola", "adios", "adios"));
console.log(generarNombre("adios", "hola", "adios"));
console.log(generarNombre("adios", "adios", "hola"));
console.log(generarNombre("pablo", "sancho", "antunez"));