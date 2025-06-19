let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemDeInicio(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

mensagemDeInicio()

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

let numeroSecreto = gerarNumeroAleatorio();

function limparCampo(){
    chute = document.querySelector('input').value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    mensagemDeInicio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa" ;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'PARABENS!');
        exibirTextoNaTela('p', `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        if (chute < numeroSecreto){
            exibirTextoNaTela(`p`,`O numero secreto e maior que ${chute}`);
        } else {
            if (chute > numeroSecreto){
                exibirTextoNaTela(`p`, `O numero secreto e menor que ${chute}`);
            }
        }
        tentativas++
        limparCampo();
    }
}