let resposta = document.getElementById('resposta')

function inverter() {
    let vetor = []
    
    for (let i = 1; i <= 5; i++) {
        vetor.push(Number(document.getElementById(`num${i}`).value))
    }

    resposta.innerHTML = vetor.reverse()

    resposta.style.fontSize = '2rem'
    resposta.style.transition = '5s'
}