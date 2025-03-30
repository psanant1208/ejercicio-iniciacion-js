/*35. Escribe una función llamada shortcut que tome dos cadenas de texto
y devuelva la inicial de cada una de las dos cadenas.
Por ejemplo, la llamada a la función:
shortcut('Amnesty', 'International');
Debería devolver «AI».*/
function shortcut(cadena1, cadena2) {
    return cadena1.charAt(0) + cadena2.charAt(0);
}

console.log(shortcut('Amnistía', 'Internacional'));
console.log(shortcut('Java', 'Script'));
console.log(shortcut('Inteligencia', 'Artificial'));
console.log(shortcut('Calor', 'Global'));
