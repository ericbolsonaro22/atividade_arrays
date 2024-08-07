let resposta = document.getElementById('resposta')

function subVetor() {
    let sub = []

    for (let i = 0; i < 5; i++) {
        sub[i] = Number(document.getElementById(`num${i + 1}v1`).value) - Number(document.getElementById(`num${i + 1}v2`).value)
    }

    resposta.innerHTML = sub

    resposta.style.fontSize = '2rem'
    resposta.style.transition = '5s'
}