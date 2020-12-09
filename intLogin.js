function validacion(){
    var entradaTexto = document.querySelector("#entrada-texto");
    var entradaCont = document.querySelector("#entrada-cont");
    var msjError = document.querySelector(".msjError");
    if(entradaTexto.value.length <= 3 || entradaCont.value.length <= 3){
        msjError.style.display = "inline-block";
        entradaTexto.style.border = "1px solid #f74040";
        entradaCont.style.border = "1px solid #f74040";
        return false;
    }
    else{
        alert('Bienvenido');
        return true;
    }
}

var entradas = document.querySelectorAll(".inputs-campos");
var botonLogin = document.querySelector("#boton-login");
entradas.forEach(function(entrada) {
    entrada.addEventListener("input", function(){
        if(entrada.value.length > 3){
            botonLogin.disabled = false;
            botonLogin.className = "enabled";
        }
    })
});
