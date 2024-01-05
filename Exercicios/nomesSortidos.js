// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

const listaNomes = ["antonio", "maria", "josé", "andré","paula", "sandro", "regina", "fernando", "lucia", "bruno"]

console.log(listaNomes);

let busca = ['maria']

const buscaNomes = listaNomes.forEach((listaNomes) => {
    if (busca == listaNomes) {
        console.log("Achei!");
    }
    else {
        console.log("Não achei!");
    }
});

// let resultado;

// const buscaNomes = listaNomes.forEach((listaNomes) => {
//     for (let index = 0; index < listaNomes.length; index++) {
//         if (listaNomes[index].includes(busca)) {
//             resultado.push(listaNomes[index])
//             console.log("Achei!");
//         }
//         else {
//             console.log("Não achei!");
            
//         }        
//     }
// });