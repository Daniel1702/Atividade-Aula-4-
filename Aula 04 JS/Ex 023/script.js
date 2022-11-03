function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Números pares de 1 até 10</h2>`
    let cont = 2
    while (cont <= 10) { // Estrutura de Repetição-- Daniel de Andrade;
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont += 2 // Corresponde a cont = cont + 2
    }
    saida.innerHTML += ` &#x1F3C1;`
}