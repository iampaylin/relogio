function dia() {
    let calendario = document.getElementById('calendario')

    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()

    if (dia < 10) {
        dia = "0" + dia
    }

    if (mes < 10) {
        mes = "0" + mes
    }

    calendario.innerHTML = `${dia}/${mes}/${ano}`
}



function tempo(){
    let relogio = document.getElementById('rel')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    if (segundos < 10) {
        segundos = "0" + segundos
    }

    if (minutos < 10) {
        minutos = "0" + minutos
    }

    if (hora < 10) {
        hora = "0" + hora
    }

    // hora = (hora < 10) ? "0" + hora : hora;
    // minutos = (minutos < 10) ? "0" + minutos : minutos;
    // segundos = (segundos < 10) ? "0" + segundos : segundos;

    relogio.innerHTML = `${hora}:${minutos}:${segundos}`

    setTimeout(tempo, 1000);
}

let escuro = document.getElementById('dark')
let rosa = document.getElementById('pink')
let padrao = document.getElementById('normal')
let purpura = document.getElementById('purple')
let aquamarine = document.getElementById('aquamarine')
let secao = document.getElementById('secao')
// let minim = document.getElementById('minimalist')


function temaEscuro() {
    document.body.style.backgroundColor = '#000'
    document.body.style.transition = '500ms'
    document.body.style.backgroundImage = 'none'
    secao.style.backgroundColor = '#808080'
}

function temaPink() {
    document.body.style.backgroundColor = '#FF0084'
    document.body.style.transition = '500ms'
    document.body.style.backgroundImage = 'none'
    secao.style.backgroundColor = '#C75B7A'
}

function temaPadrao() {
    document.body.style.backgroundColor = '#3d3d3d'
    document.body.style.transition = '500ms'
    document.body.style.backgroundImage = 'none'
    secao.style.backgroundColor = 'rgb(179, 179, 247)'
}

function temaPurpura() {
    document.body.style.backgroundColor = '#800080'
    document.body.style.transition = '500ms'
    document.body.style.backgroundImage = 'none'
    secao.style.backgroundColor = '#9400D3'

}

function temaAquamarine() {
    document.body.style.backgroundColor = '#65A8C3'
    document.body.style.transition = '500ms'
    document.body.style.backgroundImage = 'none'
    secao.style.backgroundColor = '#054F77'
}

/* function temaMinimalista() {
    document.body.style.backgroundColor = '#800080'
    document.body.style.transition = '500ms'
} */





