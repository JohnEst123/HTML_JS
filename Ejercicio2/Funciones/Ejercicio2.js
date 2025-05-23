let contador = 0;
const FuncionContar = () => {
    contador += 1;
    var objetoSpaResultado =
        document.getElementById("spaResultado").textContent = "Cantidad de Clicks: " + contador;
};

function FuncionResetear() {
    contador = 0;
    var objetoSpaResultado =
        document.getElementById("spaResultado").textContent = "Cantidad de Clicks: " + contador;
}