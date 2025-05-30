function AgregarTarea() {
    // Exraccion de objetos
    const input = document.getElementById("inpTexto");
    const texto = input.value.trim();
    const lista = document.getElementById("ulLista");
    // Validacion de que no ingrese texto vacio
    if (texto === "") {
        alert("No hay texto");
        input.value="";
    } else {
        // Crear elementos desde JS que son html
        const elementoLi = document.createElement("li");
        const contenidoTexto = document.createElement("span");
        contenidoTexto.textContent = texto;
        // Solo del boton
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar Actividad";
        btnEliminar.onclick = () => {
            lista.removeChild(elementoLi);
        };
        // Agregar elemento y contenido a la lista y li
        elementoLi.appendChild(contenidoTexto);
        elementoLi.appendChild(btnEliminar);
        lista.appendChild(elementoLi);
        // Blanquear input
        input.value = "";
    }

}