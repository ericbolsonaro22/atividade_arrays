let resposta = document.getElementById('resposta')

function somaIntVetor() {
    let vetor = []
    let soma = 0

    for (let i = 1; i <= 7; i++) {
        vetor.push(Number(document.getElementById(`num${i}`).value))
    }

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    resposta.innerHTML = soma

    resposta.style.fontSize = '2rem'
    resposta.style.transition = '5s'
}