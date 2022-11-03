function contar() {
    let saida = document.getElementById('saida') //está buscando o dado de um elemento lá no 'index.html' e vai retornar algum tipo de valor -- Daniel de Andrade;

    saida.innerHTML += `<h2>Contando de 1 até 10</h2>`

    let cont = 1
    while (cont <= 10) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont ++ // Corresponde a cont = cont + 1
    }
    saida.innerHTML += ` &#x1F3C1;`
}