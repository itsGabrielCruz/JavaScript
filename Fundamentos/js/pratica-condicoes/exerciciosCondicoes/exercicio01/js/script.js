var nome = window.prompt('Como você se chama?')

function carregar() {
var titulo = document.getElementsByTagName('h1')[0]
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

    if(hora >= 0 && hora < 12) {
        // BOM DIA
        titulo.innerHTML = `Bom dia, ${nome} :)`
        msg.innerHTML = `São exatamente ${hora} horas e ${minuto} minutos`
        img.src = 'img/manha.png'
        document.body.style.background = '#cbcdcc'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        titulo.innerHTML = `Boa tarde, ${nome} :)`
        msg.innerHTML = `São exatamente ${hora} horas e ${minuto} minutos`
        img.src = 'img/tarde.png'
        document.body.style.background = '#e5c9a1'
    } else {
        // BOA NOITE
        titulo.innerHTML = `Boa noite, ${nome} :)`
        msg.innerHTML = `São exatamente ${hora} horas e ${minuto} minutos`
        img.src = 'img/noite.png'
        document.body.style.background = '#24191d'
    }

}

function realTime() {
    var intervald = window.setInterval(() => {realTime()
        
    },1000);
    
    var botao = document.getElementById('realTime')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    botao.innerHTML = `${hora}:${minuto}:${segundo}`
    
}


