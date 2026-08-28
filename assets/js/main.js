let nomeUsuario = prompt("Digite seu nome completo");

const dataAtual = new Date();

const diaDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const diaSemana = diaDaSemana[dataAtual.getDay()];

const dia = String(dataAtual.getDate()).padStart(2, '0');
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
const ano = dataAtual.getFullYear();

const hora = String(dataAtual.getHours()).padStart(2, '0');
const minuto = String(dataAtual.getMinutes()).padStart(2, '0');

const fuso = "(-03:00)";

const dataFormatada = `${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minuto} ${fuso}`;
const mensagem = `Olá, ${nomeUsuario}! Hoje é ${dataFormatada}`;

console.log(mensagem);

const subtitulo = document.querySelector(".boasvindas");
subtitulo.textContent = mensagem;