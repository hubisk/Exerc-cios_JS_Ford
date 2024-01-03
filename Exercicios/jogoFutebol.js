// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.

//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo

//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol

const time1 = "coritiba"
const time2 = "vasco"

const golsTime1 = 1
const golsTime2 = 3

    console.log(`${time1} ${golsTime1} X ${time2} ${golsTime2}`);

if (golsTime1 < golsTime2) {
    console.log(`O ${time2} ganha do ${time1} de ${golsTime2} a ${golsTime1}`);
}
else if (golsTime1 == golsTime2) {
    console.log(`Os times ${time1} e ${time2} empatam por ${golsTime1} a ${golsTime2}.`);
}
else {
    console.log(`O ${time1} ganha do ${time2} de ${golsTime1} a ${golsTime2}`);
}

