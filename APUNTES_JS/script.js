document.addEventListener("DOMContentLoaded", () => {
    const contador1 = document.getElementById("contador");
    const p = document.createElement("p");
    p.id = "tiempo";
    contador1.appendChild(p);
    let numeros = 0;

    const cuenta10 = () => {
        if (numeros < 10) {
            numeros++;
            p.textContent = numeros;

            if (numeros === 5) {
                p.style.backgroundColor = "yellow";
            } else if (numeros === 8) {
                p.style.backgroundColor = "red";
            }
        } else {
            clearInterval(interval);
        }
    }

    let interval = setInterval(cuenta10, 1000);
});


document.addEventListener("DOMContentLoaded", () => {
    const contador1 = document.getElementById("contadorDivisible");
    const p = document.createElement("p");
    p.id = "tiempo";
    contador1.appendChild(p);
    let numeros = 0;

    const cuenta20 = () => {
        if (numeros <= 20) {
            p.textContent = numeros;

            if (numeros % 3 === 0 && numeros % 5 === 0) {
                p.style.color = "purple";
            } else if (numeros % 3 === 0) {
                p.style.color = "blue";
            } else if (numeros % 5 === 0) {
                p.style.color = "green";
            }
            numeros++;
        } else {
            clearInterval(interval);
        }
    }

    let interval = setInterval(cuenta20, 1000);
});

//Ejercicio 3 arrays
let personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'MENOR', edad: 17 },
    { nombre: 'MENOR', edad: 3 },
    { nombre: 'Maria', edad: 20 },
    { nombre: 'Carlos', edad: 22 },
    { nombre: 'Laura', edad: 19 },
    { nombre: 'MENOR', edad: 9 },
    { nombre: 'MENOR', edad: 5 },
    { nombre: 'Jose', edad: 40 },
    { nombre: 'Rosa', edad: 18 },
    { nombre: 'Miguel', edad: 24 },
    { nombre: 'Lucia', edad: 21 },
    { nombre: 'David', edad: 28 },
    { nombre: 'Paula', edad: 27 },
    { nombre: 'Andrés', edad: 23 },
    { nombre: 'Pablo', edad: 30 },
    { nombre: 'Sandra', edad: 31 },
    { nombre: 'Diego', edad: 19 },
    { nombre: 'Natalia', edad: 26 },
    { nombre: 'Martín', edad: 33 },
    { nombre: 'Isabel', edad: 32 },
    { nombre: 'Tomás', edad: 36 },
    { nombre: 'Sara', edad: 25 },
    { nombre: 'Marta', edad: 37 },
    { nombre: 'Alberto', edad: 34 },
    { nombre: 'Raul', edad: 22 },
    { nombre: 'Ana', edad: 19 },
    { nombre: 'Carmen', edad: 24 },
    { nombre: 'Fernando', edad: 38 },
    { nombre: 'Esteban', edad: 40 },
    { nombre: 'Sofía', edad: 21 },
    { nombre: 'Marcos', edad: 29 },
    { nombre: 'Clara', edad: 20 },
    { nombre: 'Antonio', edad: 28 },
    { nombre: 'Vera', edad: 30 },
    { nombre: 'Eduardo', edad: 25 },
    { nombre: 'Gonzalo', edad: 39 },
    { nombre: 'Antonio', edad: 23 },
    { nombre: 'Julia', edad: 22 },
    { nombre: 'Rafael', edad: 34 },
    { nombre: 'Victor', edad: 26 },
    { nombre: 'Emilia', edad: 31 },
    { nombre: 'Ines', edad: 27 },
    { nombre: 'Javier', edad: 32 },
    { nombre: 'Miriam', edad: 23 },
    { nombre: 'Gema', edad: 24 },
    { nombre: 'Santiago', edad: 33 },
    { nombre: 'Alba', edad: 25 },
    { nombre: 'Olga', edad: 29 },
    { nombre: 'Jorge', edad: 27 },
    { nombre: 'Belen', edad: 28 }
];
let index = 0;
let showCount = 0;
const maxTime = 0; //60000 =  1 minuto
const intervalTime = 5000; // 5 segundos

document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("personas18");
    const boton = document.createElement("button");
    boton.textContent = "Mostrar personas mayores de 18";
    document.body.appendChild(boton);

    boton.addEventListener('click', () => {
        let personasMayoresDe18 = personas.filter(persona => persona.edad >= 18);
        let lista = document.createElement('ul');

        for (let i = 0; i < 4 && index < personasMayoresDe18.length; i++) {
            let item = document.createElement('li');
            item.textContent = `${personasMayoresDe18[index].nombre}, Edad: ${personasMayoresDe18[index].edad}`;
            lista.appendChild(item);
            index++;
        }

        div.appendChild(lista);
        showCount++;
    });

    let interval = setInterval(() => {
        if (showCount >= maxTime / intervalTime) {
            clearInterval(interval);
            return;
        }

        let personasMayoresDe18 = personas.filter(persona => persona.edad >= 18);
        let lista = document.createElement('ul');

        for (let i = 0; i < 4 && index < personasMayoresDe18.length; i++) {
            let item = document.createElement('li');
            item.textContent = `${personasMayoresDe18[index].nombre}, Edad: ${personasMayoresDe18[index].edad}`;
            lista.appendChild(item);
            index++;
        }

        div.appendChild(lista);
        showCount++;
    }, intervalTime);

    setTimeout(() => clearInterval(interval), maxTime); // Detiene el intervalo después de 1 minuto
});


document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("tecla");

    document.addEventListener("keydown", (event) => {
        const teclaPresionada = event.key;
        const p = document.createElement("p");
        p.textContent = `Tecla presionada: ${teclaPresionada}`;
        div.appendChild(p);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("numeroInput");
    const contadorDiv = document.getElementById("temporizador");
    let intervalo;

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            let minutosInicio = parseInt(input.value);

            if (isNaN(minutosInicio) || minutosInicio <= 0) {
                alert("Por favor, introduce un número válido de minutos mayor a 0.");
                return;
            }

            let segundosRestantes = minutosInicio * 60;
            mostrarTiempo(segundosRestantes); // Muestra el tiempo inicial en la pantalla

            if (intervalo) {
                clearInterval(intervalo);
            }

            intervalo = setInterval(() => {
                segundosRestantes--;
                mostrarTiempo(segundosRestantes);  // Actualiza la pantalla con el tiempo restante
                console.log(`Tiempo restante: ${Math.floor(segundosRestantes / 60)} minutos y ${segundosRestantes % 60} segundos`);  // Muestra en consola

                if (segundosRestantes < 0) {
                    clearInterval(intervalo);
                    contadorDiv.textContent = "¡Tiempo agotado!";
                    console.log("¡Tiempo agotado!");  // Mensaje de tiempo agotado en consola
                }
            }, 1000);
        }
    });

    function mostrarTiempo(segundos) {
        let minutos = Math.floor(segundos / 60);
        let segundosRestantes = segundos % 60;
        contadorDiv.textContent = `Tiempo restante: ${minutos} minutos y ${segundosRestantes} segundos`;
    }
});

// Establece la fecha del evento (puedes cambiarla a tu fecha deseada)
const fechaEvento = new Date("2025-01-30T00:00:00");

function actualizarContador() {
    const ahora = new Date();
    const tiempoRestante = fechaEvento - ahora;

    // Si el evento ya ocurrió, muestra un mensaje
    if (tiempoRestante <= 0) {
        document.getElementById('tiempoRestante').textContent = "¡El evento ha ocurrido!";
        return;
    }

    // Calcula días, horas, minutos y segundos restantes
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    // Actualiza el contador en el HTML
    document.getElementById('tiempoRestante').textContent = `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);
