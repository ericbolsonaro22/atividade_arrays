let resposta2 = document.getElementById('resposta2')

function produtoP() {
    let escalar = Number(document.getElementById('escalar').value)
    let vetor1 = [1, 2, 3, 4, 5]
    let produto = []

    resposta2.innerHTML = ''

    for (let i = 0; i < vetor1.length; i++) {
        produto[i] = vetor1[i] * escalar
    }

    resposta2.innerHTML += produto

    resposta2.style.fontSize = '2rem'
    resposta2.style.transition = '5s'
}
