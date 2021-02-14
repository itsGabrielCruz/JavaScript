function contar() {
    let inicio = document.getElementById('txti') 
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('OPS! Preencha todos os campos!')
    } else {
        res.innerHTML = `Contando... <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} → `
            }
        } else {
            // Contagem
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} → `
            }
        }

        res.innerHTML += `\u{1F3C1}`
        
    }
}