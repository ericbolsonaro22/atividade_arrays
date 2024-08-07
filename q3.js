let resposta = document.getElementById('resposta')

function soma7() {
    let vetor1 = [1, 2, 3, 4, 5]
    let soma = []

    for (let i = 0; i < vetor1.length; i++) {
        soma[i] = vetor1[i] + 7
    }

    resposta.innerHTML = soma

    resposta.style.fontSize = '2rem'
    resposta.style.transition = '5s'
}