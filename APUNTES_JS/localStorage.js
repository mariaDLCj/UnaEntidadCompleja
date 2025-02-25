//GUARDAR DATOS EN EL LOCALSTORAGE
// Guardar un valor
localStorage.setItem('nombre', 'Juan');

// Guardar un objeto convirtiéndolo a JSON
let usuario = { nombre: 'Ana', edad: 25 };
localStorage.setItem('usuario', JSON.stringify(usuario));

//RECUPERRAR DATOS LOCALSTORAGE
// Recuperar un valor
let nombre = localStorage.getItem('nombre');
console.log(nombre); // Salida: Juan

// Recuperar un objeto y convertirlo de JSON a un objeto JavaScript
let usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioGuardado); // Salida: { nombre: 'Ana', edad: 25 }

//ELIMINAR DATOS LOCALSTORAGE
// Eliminar un valor
localStorage.removeItem('nombre');

// Verificar que el valor ha sido eliminado
console.log(localStorage.getItem('nombre')); // Salida: null

//LIMPIAR TODOS LOS DATOS
// Limpiar todos los valores almacenados
localStorage.clear();

// Verificar que todos los datos han sido eliminados
console.log(localStorage.length); // Salida: 0


