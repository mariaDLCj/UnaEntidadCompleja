let boton = document.getElementById("crearJuguete");
let url = "http://127.0.0.1:8000/juguetes/";


// Función para validar el nombre
function validarNombre(nombre) {
    nombre = nombre.trim();
    // Nombre del juego puede incluir cualquier carácter pero máximo 20 de longitud según el enunciado
    if (nombre.length > 0 && nombre.length <= 20) {
        return true;
    } else {
        alert("Introduce un nombre con mínimo una letra y máximo 20");
        return false;
    }
}

// Función para validar el nombre
function validarUrl(url) {
    //Que no esté vacía
    if (url.length > 0) {
        return true;
    } else {
        alert("Introduce una fotografía");
        return false;
    }
}

async function crearJuego() {
    let nombreJuego = document.getElementById("juguete").value;
    let urlJuego = document.getElementById("urlJuego").value;

    if (!validarNombre(nombreJuego) || !validarUrl(urlJuego)) {
        return
    }

    //Lo separas por las dos barras para quedarte solo con la img.xx sino da error
    urlJuego = urlJuego.split("\\").pop();
    console.log(urlJuego);

    let datos = {
        nombre: nombreJuego,
        imagen: urlJuego,
    };

    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });

        // Verificar si la respuesta es correcta
        if (response.ok) {
            let result = await response.json();
            console.log("Usuario creado OK:", result);
        } else {
            let error = await response.json();
            console.error("Error al crear usuario:", error);
        }
    } catch (e) {
        console.error("Error: ", e);
    }
}

//CREAR FUNCIÓN MOSTRAR
boton.addEventListener('click', crearJuego);

let lista = document.getElementById("listaJuguetes");

// Obtengo los juguetes de la API y los muestro
async function cargarJuguetes() {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            let error = await response.json();
            console.error("Error al cargar juguete:", error);
        }
        let tabla = document.createElement("table");
        let filaEncabezado = document.createElement("tr");
        let tNombre = document.createElement("th");
        let tEdad = document.createElement("th");
        let tEliminar = document.createElement("th");
        tNombre.textContent = "Nombre";
        tEliminar.textContent = "Eliminar";
        tEdad.textContent = "Imagen";
        filaEncabezado.append(tNombre, tEdad, tEliminar);
        tabla.appendChild(filaEncabezado);
        tabla.setAttribute("class", "mt-3 table text-white text-center ");

        //Se obtiene la lista de los usaurios
        let juguetes = await response.json();

        juguetes.forEach(juguete => {
            let filaJuguete = document.createElement("tr");
            let datoNombre = document.createElement("td");
            let imgDato = document.createElement("td");
            let borrarElemento = document.createElement("buttom");
            let img = document.createElement("img");
            //Para mostrar la img correctamente tienes que añadir la ruta
            img.setAttribute("src", `../img/${juguete.imagen}`);
            img.setAttribute("class", "tamanio");
            borrarElemento.setAttribute("id", "borrarElemento");
            borrarElemento.setAttribute("class", "mt-5 btn boton");
            datoNombre.classList.add("p-3");
            imgDato.classList.add("p-3");
            borrarElemento.textContent = "X";
            borrarElemento.addEventListener('click', () => eliminarFuncion(juguete.id));
            datoNombre.textContent = juguete.nombre;
            imgDato.appendChild(img);

            filaJuguete.append(datoNombre, imgDato, borrarElemento);
            tabla.appendChild(filaJuguete);
        
        });
        lista.innerHTML = "";
        lista.appendChild(tabla);


    } catch (error) {
        console.error("Error al cargar juguetes:", error);
    }
}


//ELIMINAR JUGUETES
async function eliminarFuncion(jugueteId) {
    try {
        let response = await fetch(`${url}${jugueteId}`, {
            method: "DELETE",
        });

        // Verificar si la respuesta es correcta
        if (response.ok) {
            console.log(`Juguete con ID ${jugueteId} eliminado correctamente`);
        } else {
            let error = await response.json();
            console.error("Error al eliminar el juguete:", error);
        }
    } catch (e) {
        console.error("Error al intentar eliminar el juguete:", e);
    }
}

//Se llama para que se muestre la lista continuamente y se puedan ver
cargarJuguetes();
