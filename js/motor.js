let estadoLicuadora = 'apagada';
let licuadora = document.getElementById('blender')
let sonidoLicuadora = document.getElementById('blender-sound')
let botonLicuadora = document.getElementById('blender-button-sound')

function controlarLicuadora() {
    if (estadoLicuadora == 'apagada') {
        estadoLicuadora = 'encendido'
        hacerRuido()
        licuadora.classList.add('active')
    } else {
        estadoLicuadora = 'apagada'
        hacerRuido()
        licuadora.classList.remove('active')
    }
}

function hacerRuido() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play()
        sonidoLicuadora.play()
    } else {
        botonLicuadora.play()
        sonidoLicuadora.pause()
        sonidoLicuadora.currentTime = 0
    }
}