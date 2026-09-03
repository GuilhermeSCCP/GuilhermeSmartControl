const areaBotoes = document.querySelectorAll(".botao_info");

areaBotoes.forEach((areaBotao) => {
    const botao = document.createElement('button');
    botao.classList.add("botaoInfo");
    botao.type = "button";
    botao.innerText = "Info";

    areaBotao.appendChild(botao);
})

const botaoMonitoracao = document.querySelector('.botao_monitoracao')

botaoMonitoracao.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);

    botaoMonitoracao.querySelector('.info-text').classList.toggle('info-text-active');
})

const botaoControle = document.querySelector('.botao_controle')

botaoControle.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);

    botaoControle.querySelector('.info-text').classList.toggle('info-text-active');
})