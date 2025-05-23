//Funcion Comprobar impar y par
function ComprobarParImpar() {
    var objetoInpNumero = parseInt(document.getElementById("inpNumero").value);
    var objetoSpaResultadoNumero = document.getElementById("spaResultadoNumero");

    if (isNaN(objetoInpNumero)) {
        objetoSpaResultadoNumero.textContent = "Ingresa Numero oeeee";
    } else {
        if (objetoInpNumero % 2 == 0) {
            objetoSpaResultadoNumero.textContent = "El numero es: " + objetoInpNumero + " Par";
        } else {
            objetoSpaResultadoNumero.textContent = "El numero es: " + objetoInpNumero + " Impar";
        }
    }
}
// Funcion Saludar
function FuncionSaludar() {
    var objetoInpNombre = document.getElementById("inpNombre").value;
    var objetoSpaResultado = document.getElementById("spaResultado");
    objetoSpaResultado.textContent = "Mi nombre es: " + objetoInpNombre;
}