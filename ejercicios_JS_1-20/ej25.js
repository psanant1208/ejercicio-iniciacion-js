/*25. Hacer una función generarNombre2 que reciba como parámetros de
entrada tres cadenas de texto. Si la longitud de alguna cadena es menor
que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena
tiene menos de 5 letras, devolver una nueva palabra utilizando la
última letra de cada palabra.*/
function generarNombre2(palabra1, palabra2, palabra3) {
    if (palabra1.length < 5 || palabra2.length < 5 || palabra3.length < 5) {
        return "error";
    }

    return palabra1.charAt(palabra1.length - 1) + 
           palabra2.charAt(palabra2.length - 1) + 
           palabra3.charAt(palabra3.length - 1);
}


console.log(generarNombre2("hola", "adios", "adios"));
console.log(generarNombre2("adios", "hola", "adios"));
console.log(generarNombre2("adios", "adios", "hola"));
console.log(generarNombre2("pablo", "sancho", "antunez"));