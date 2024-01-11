// funçaõ para pequisar CEP                           -    OK
// função para limpar o formulário                    -    OK
// função para preencher o fomulário                  -    OK
// validação se o cep contém apenas números           -    OK
// validar se o CEP tem o comprimento de 8 caracteres -    OK

// limpar
function limparCampos() {
    document.getElementById('endereco').value = "";
    document.getElementById('numero').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

// preencher
function preencherForm(endereco) {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

// validar se são 8 caracteres
const cepValido = (cep) => cep.length == 8  && eNumero(cep)

// Validação
function eNumero (numero) {
    return /^[0-9]+$/.test(numero);  // regex
}

// consumo da API
// primeira forma: com função
// async function name(params) {    

// }

// segunda forma: variável com arrow function
const consumoApi = async () => {

    // chamar a função para limpar o formulário
    limparCampos()

    const cep = document.getElementById('cep').value

    const url = `https://viacep.com.br/ws/${cep}/json/`

    // realiza o comsumo da API
    if (cepValido(cep)) {

        // retorno do viaCEP
        const dados = await fetch(url)  // await =>aguardar os dados da API
        console.log(dados);

        const endereco = await dados.json();  // utilizar os dados que estão sendo guardados na variável DADOS e exibir na tela
        console.log(endereco);

        // hasOwmProperty => retorna um boleano indicando se o objeto possui valores (propiedades)
        endereco.hasOwnProperty("erro") ? document.getElementById("endereco").value = "O CEP não foi encontrado" : preencherForm(endereco);
    } 
    else {
        document.getElementById('endereco').value = "Cep Incorreto!!"
}
}

const teste = document.getElementById('cep').addEventListener('focusout', consumoApi)