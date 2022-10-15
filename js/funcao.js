crip = []
letras = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z", "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"]

function mostrarSelecao() {
    marcadoCifra = document.getElementById("radiocifra");
    selecaoPassos = document.getElementById("selecaopassos");
    selecaoPassos.style.display = marcadoCifra.checked ? "block" : "none";
}

function atualizarBotao() {
    marcadoCriptografar = document.getElementById("radioCriptografar");
    marcadoDescriptografar = document.getElementById("radioDescriptografar");
    botao = document.getElementById("btn");

    if (marcadoCriptografar.checked) {
        botao.innerHTML = "Codificar Mensagem!"
        botao.style.display = "block"
    }
    if (marcadoDescriptografar.checked) {
        botao.innerHTML = "Descodificar Mensagem!"
        botao.style.display = "block"
    }
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
        chave = document.getElementById("qtd").value

        if (marcadoCriptografar.checked) {
            mensagem = document.form1.caixaEntrada.value  
            x = parseInt(chave) * 2      
            for (i = 0; i < mensagem.length; i++) {
                if (mensagem[i] != " ") {
                    for (j = 52; j < letras.length; j++) {
                        if (mensagem[i] == letras[j]) {
                            crip[i] = letras[(j + x) % letras.length]
                            break
                        }
                    }
                }
                else {
                    crip[i] = " "
                }
            }
            document.form1.caixaSaida.value = crip.join("")
            document.getElementById("textoSaida").style.display = "block";
        }
        if (marcadoDescriptografar.checked) {
            codigo = document.form1.caixaEntrada.value
            x = parseInt(chave) * 2
            for (i = 0; i < mensagem.length; i++) {
                if (mensagem[i] != " ") {
                    for (j = 52; j < letras.length; j++) {
                        if (mensagem[i] == letras[j]) {
                            crip[i] = letras[(j - x) % letras.length]
                            break
                        }
                    }
                }
                else {
                    crip[i] = " "
                }
            }
            document.form1.caixaSaida.value = crip.join("")
            document.getElementById("textoSaida").style.display = "block";
        }
    }
}