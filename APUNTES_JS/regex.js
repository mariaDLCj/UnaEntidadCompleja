// Solo letras con espacio y la primera en mayuscula
let regexNombre = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;

let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let regexDNI = /^[089][0-9]{7}[A-Z]$/;

let regexTelefono = /^([67])[0-9]{8}$/;
// Ejemplos válidos: +34123456789, 123456789
let regexFechaBarra = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
// Ejemplos válidos: 01/01/2023, 31/12/2023
let regexFechaGuinBarra = /^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;
let regexFechaGuion = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
let regexIP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
// Ejemplos válidos: 192.168.0.1, 255.255.255.255
let regexTarjetaCredito = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
// Ejemplos válidos: 4111111111111111 (Visa), 5500000000000004 (MasterCard)
let regexCodigoPostal = /^[0-9]{5}$/;
// Ejemplos válidos: 12345, 12345-6789
let regexNombreUsuario = /^[a-zA-Z0-9_]{3,16}$/;
// Ejemplos válidos: usuario123, user_name, Usuario_01

let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// Ejemplos válidos: Passw0rd!, Contraseña123$, Segura@123

let dni = '09223556G';

if (regexDNI.test(dni)) {
    console.log('DNI válido:', dni);
} else {
    console.log('DNI no válido');
}