function contagem() { // Função para contar a variável  'num' e vai retornar um valor; -- Daniel de Andrade;
    let saida = document.getElementById('saida')
    let num = Number(document.getElementById('fnum').value)
    saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    let cont = 0
    while (cont <= num) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont ++
    }
    saida.innerHTML += ` &#x1F3C1;`
}