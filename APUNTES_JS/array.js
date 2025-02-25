const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});

//SSUMARLOS

const numbers2 = [1, 2, 3, 4, 5];
let sum = 0;

numbers2.forEach((number) => {
    sum += number;
});

console.log('Suma:', sum); // Salida: Suma: 15

// RECOORER ARRAY DE OBJETOS
const students = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 23 },
    { name: 'Charlie', age: 24 }
];

students.forEach((student) => {
    console.log(`${student.name} tiene ${student.age} años.`);
});

//MODIFICAR UN ARRAY A MAYUS

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index, array) => {
    array[index] = fruit.toUpperCase();
});

console.log(fruits); // Salida: ['APPLE', 'BANANA', 'CHERRY']

//AÑADIR AL FINAL
function añadirAlFinal(arr, elemento) {
    arr.push(elemento);
    return arr;
}

// Ejemplo
let numeros2 = [1, 2, 3];
console.log(añadirAlFinal(numeros2, 4)); // Salida: [1, 2, 3, 4]

//ELIMINAR EL ULTIMO ELEMENTO DEL ARRAY 
function eliminarUltimo(arr) {
    arr.pop();
    return arr;
}

// Ejemplo
let numeros = [1, 2, 3, 4];
console.log(eliminarUltimo(numeros)); // Salida: [1, 2, 3]

//AÑLADIR AL INICIO DEL ARRAY 
function añadirAlInicio(arr, elemento) {
    arr.unshift(elemento);
    return arr;
}

// Ejemplo
let numeros3 = [1, 2, 3];
console.log(añadirAlInicio(numeros3, 0)); // Salida: [0, 1, 2, 3]

//ELIMINAR EL PRIMER ELEMENTO DEL ARRAY
function eliminarPrimero(arr) {
    arr.shift();
    return arr;
}

// Ejemplo
let numeros4 = [0, 1, 2, 3];
console.log(eliminarPrimero(numeros4)); // Salida: [1, 2, 3]

//ORDENAR ASCENDENTE
function ordenarAscendente(arr) {
    return arr.sort((a, b) => a - b);
}

// Ejemplo
let numeros5 = [3, 1, 4, 1, 5, 9];
console.log(ordenarAscendente(numeros5)); // Salida: [1, 1, 3, 4, 5, 9]

//ORDENAR DESCENDENTE
function ordenarDescendente(arr) {
    return arr.sort((a, b) => b - a);
}

// Ejemplo
let numeros6 = [3, 1, 4, 1, 5, 9];
console.log(ordenarDescendente(numeros6)); // Salida: [9, 5, 4, 3, 1, 1]

//SI INCLUYE UN VALOR
function encontrarElemento(arr, elemento) {
    return arr.includes(elemento);
}

// Ejemplo
let frutas = ['manzana', 'banana', 'cereza'];
console.log(encontrarElemento(frutas, 'banana')); // Salida: true
console.log(encontrarElemento(frutas, 'kiwi')); // Salida: false

//NUEMRO ALEATORIO MATHRANDOM
let numeroAleatorio = Math.random();
console.log(numeroAleatorio); // Salida: un número aleatorio entre 0 y 1

//NUMERO ALEATORIO ENTRE X E Y 
function obtenerNumeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

// Prueba la función
let numeroAleatorio2 = obtenerNumeroAleatorio(1, 10);
console.log(numeroAleatorio2); // Salida: un número aleatorio entre 1 y 10

//SELECCION ALEATORIA DE UN ARRAY 
let colores = ['rojo', 'verde', 'azul', 'amarillo', 'morado'];

function obtenerElementoAleatorio(arr) {
    let indiceAleatorio = Math.floor(Math.random() * arr.length);
    return arr[indiceAleatorio];
}

// Prueba la función
let colorAleatorio = obtenerElementoAleatorio(colores);
console.log(colorAleatorio); // Salida: un color aleatorio del array





