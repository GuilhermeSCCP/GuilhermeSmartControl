const campoBusca = document.querySelector(".caixa_pesquisa");

const dadosTabela = document.querySelectorAll('tbody tr')

campoBusca.addEventListener("input", function() {
    const textoBusca = campoBusca.value.toLowerCase();

    dadosTabela.forEach(function(linha) {
        const textoLinhas = linha.textContent.toLowerCase();

        if (textoLinhas.includes(textoBusca)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });
});