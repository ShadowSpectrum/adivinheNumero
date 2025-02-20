let listaNumeros = []
let numeroM = 30;
let numeroT = 0;
let numeroS = numeroAleatorio();
document.getElementById('reiniciar').setAttribute('Disabled', true);

console.log(numeroS)

function verificarChute()
{
    numeroT++;
    console.log(numeroS);
    let chute = document.querySelector(`input`).value;
    if (chute == numeroS)
    {
        let tenta = numeroT > 1 ? `Tentativas` : `Tentativa`;
        exibirTexto(`h1`, `Você Acertou!`);
        exibirTexto(`p`, `Você descobriu o número secreto após ${numeroT} ${tenta}!`);
        limpacampo();
        document.getElementById('reiniciar').removeAttribute('Disabled');
    }
    else
    {
        maiMen = chute > numeroS ? `Maior` : `Menor`;

        exibirTexto('h1', 'Humm...');
        exibirTexto('p', `O número ${chute} é ${maiMen} do que o número secreto.`);

        limpacampo();
    }
}

function exibirTexto(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial()
{
    exibirTexto(`h1`, `Jogo do Número Secreto`);
    exibirTexto(`p`, `Escolha um número entre 1 e ${numeroM}`);
}

function numeroAleatorio()
{
    while(true)
    {
        escolhido = parseInt(Math.random() * numeroM + 1)

        if (listaNumeros.includes(escolhido))
        {

        }
        else
        {
            listaNumeros.push(escolhido)
            return escolhido
        }
    }
    

}

function limpacampo()
{
    chute = document.querySelector('input');
    chute.value = ''
}

function novoJogo()
{
    let limiteLista = listaNumeros.length;
    console.log(listaNumeros);
    if(limiteLista >= (numeroM/2))
    {
        listaNumeros = []
        listaNumeros.push(numeroS)
    }
    numeroS = numeroAleatorio();
    numeroT = 0;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('Disabled', true);
}
