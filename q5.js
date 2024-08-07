let resposta = document.getElementById('resposta')

function somaVetor() {
    let soma = []

    for (let i = 0; i < 5; i++) {
        soma[i] = Number(document.getElementById(`num${i + 1}v1`).value) + Number(document.getElementById(`num${i + 1}v2`).value)
    }

    resposta.innerHTML = soma

    resposta.style.fontSize = '2rem'
    resposta.style.transition = '5s'
}