function mostrarSelecao() {
    marcadoCifra = document.getElementById("radiocifra");
    selecaoPassos = document.getElementById("selecaopassos");
    selecaoPassos.style.display = marcadoCifra.checked ? "block" : "none";
}

function range() {
    escolha = document.getElementById("escolha");
    qtd = document.getElementById("qtd").value;
    escolha.innerHTML = qtd
}
range()
document.addEventListener("change", range);

botao = document.querySelector("#btn")
botao.onclick = function () {
    if (radiobase64.checked) {
        marcadoCriptografar = document.getElementById("radioCriptografar");
        marcadoDescriptografar = document.getElementById("radioDescriptografar");

        if (marcadoCriptografar.checked) {
            mensagem = document.form1.caixaEntrada.value
            codigo = btoa(mensagem)
            document.form1.caixaSaida.value = codigo
            document.getElementById("textoSaida").style.display = "block";
        }
        if (marcadoDescriptografar.checked) {
            codigo = document.form1.caixaEntrada.value
            mensagem = atob(codigo)
            document.form1.caixaSaida.value = mensagem
            document.getElementById("textoSaida").style.display = "block";
        }
    }
    if (radiocifra.checked) {
        marcadoCriptografar = document.getElementById("radioCriptografar");
        marcadoDescriptografar = document.getElementById("radioDescriptografar");
        
        if (marcadoCriptografar.checked) {
            mensagem = document.form1.caixaEntrada.value
            codigo = btoa(mensagem)
            document.form1.caixaSaida.value = codigo
            document.getElementById("textoSaida").style.display = "block";
        }
        if (marcadoDescriptografar.checked) {
            codigo = document.form1.caixaEntrada.value
            mensagem = atob(codigo)
            document.form1.caixaSaida.value = mensagem
            document.getElementById("textoSaida").style.display = "block";
        }
    }
}