let res = document.getElementById('res')

let vetor = [1, 2, 3, 4, 5]
let vetor2 = []

function calcularQuestao1() {
    for (i = 0; i < vetor.length; i++) {
        vetor2[i] = vetor[i] * 3
    }
    console.log('O resultado da multiplicação do Array: ')
    console.log(vetor2)

    res.innerHTML = "Resultado = [ " + vetor2 + " ]"

    res.style.fontSize = '2rem'
    res.style.transition = '5s'
}