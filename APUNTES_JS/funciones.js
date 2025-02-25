/*Escribe una función que tome un array de números 
y devuelva la suma de todos los elementos del array.*/

function sumarElementos(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
// Prueba la función
const numeros1 = [3, 7, 2, 5, 10, 8];
console.log(sumarElementos(numeros1)); // Salida: 35

//INVERTIR UN ARRAY
function invertirArray(arr) {
    return arr.slice().reverse();
}
// Prueba la función
const palabras = ['uno', 'dos', 'tres', 'cuatro'];
console.log(invertirArray(palabras)); // Salida: ['cuatro', 'tres', 'dos', 'uno']

//ELIMINAR DUPLICADOS 
function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}
// Prueba la función
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];
console.log(eliminarDuplicados(numerosDuplicados)); // Salida: [1, 2, 3, 4, 5]

//ORDENAR UN ARRAY
function ordenarArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}
// Prueba la función
const numerosDesordenados = [3, 7, 2, 5, 10, 8];
console.log(ordenarArray(numerosDesordenados)); // Salida: [2, 3, 5, 7, 8, 10]


// Encontrar la MEDIA
function encontrarMedia(arr) {
    const suma = arr.reduce((total, num) => total + num, 0);
    return suma / arr.length;
}
// Prueba la función
const numeros = [3, 7, 2, 5, 10, 8];
console.log(encontrarMedia(numeros)); // Salida: 5.833333333333333

//SPLIT 
let str = "Hola Mundo";
str.split(separator, limit);

const texto = "Hola mundo, cómo estás?";
const palabras2 = texto.split(' ');
console.log(palabras2); // Salida: ['Hola', 'mundo,', 'cómo', 'estás?']

const texto2 = "Uno Dos Tres Cuatro";
const palabras3 = texto2.split(' ', 2);
console.log(palabras3); // Salida: ['Uno', 'Dos']