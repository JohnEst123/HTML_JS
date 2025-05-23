const FuncionCalcular = () => {
    var objetoinpNumero1 = parseInt(document.getElementById("inpNumero1").value);
    var objetoinpNumero2 = parseInt(document.getElementById("inpNumero2").value);
    var objetoinpNumero3 = parseInt(document.getElementById("inpNumero3").value);
    var objetoinpNumero4 = parseInt(document.getElementById("inpNumero4").value);
    var objetoinpResultado = document.getElementById("inpResultado");
    objetoinpResultado.value = ((objetoinpNumero1 + objetoinpNumero2) - (objetoinpNumero3 + objetoinpNumero4));
};