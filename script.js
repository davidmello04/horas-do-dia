function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dia = window.document.getElementById('dia')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#6fbef7'
        dia.innerHTML = `Bom dia!`
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'img/fototarde.png'
        document.body.style.background = '#dc9d75'
        dia.innerHTML = `Boa tarde!`
    } else {
        //Boa noite
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#041f31'
        dia.innerHTML = `Boa noite!`
    }
}
