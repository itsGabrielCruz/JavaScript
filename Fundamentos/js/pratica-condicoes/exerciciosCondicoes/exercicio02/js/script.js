function verificar() {
var data = new Date()
var anoAtual = data.getFullYear()
var fano = document.getElementById('nasc')
var res = document.querySelector('div#res')

if(fano.value.length == 0 || Number(fano.value) > anoAtual) {
    alert('OPS! Algo deu errado. Tente novamente.')
} else {
    var fsexo = document.getElementsByName('radsexo')
    var idade = anoAtual - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsexo[0].checked) {
        genero = 'um homem'
        if(idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'img/foto-bebe-m.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'img/foto-jovem-m.png')
        } else if (idade < 50) {
            // Aduto
            img.setAttribute('src', 'img/foto-adulto-m.png')
        } else {
            // idoso
            img.setAttribute('src', 'img/foto-idoso-m.png')
        }
    } else if(fsexo[1].checked) {
        genero = 'uma mulher'
        if(idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'img/foto-bebe-f.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'img/foto-jovem-f.png')
        } else if (idade < 50) {
            // Aduto
            img.setAttribute('src', 'img/foto-adulto-f.png')
        } else {
            // idoso
            img.setAttribute('src', 'img/foto-idoso-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Você é ${genero} com ${idade} anos de idade.<br /><br />`
    res.appendChild(img)

    }

}