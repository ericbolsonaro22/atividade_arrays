let resposta2 = document.getElementById('resposta2')

function somaP() {
    let vetor1 = [1, 2, 3, 4, 5]
    let soma = []

    for (let i = 0; i < vetor1.length; i++) {
        soma[i] = vetor1[i] + Number(document.getElementById(`num${i+1}`).value)
    }

    resposta2.innerHTML = soma

    resposta2.style.fontSize = '2rem'
    resposta2.style.transition = '5s'
}