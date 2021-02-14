let valores = [3, 5, 2, 4, 6, 1, 8]
valores.sort()

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let ache = valores.indexOf(5)
console.log(valores)
console.log(`Este valor está na posição ${ache}`)