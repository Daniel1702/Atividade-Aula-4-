function tabuada() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML = `<h2>Tabuada de ${n}</h2>`
    let c = 1
    while (c <= 10) {
        saida.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
        c ++
    }
}

// enquanto a variável 'c' for menor ou igual a '10' o trecho 8-10  vai se repetir no código -- Daniel de Andrade;