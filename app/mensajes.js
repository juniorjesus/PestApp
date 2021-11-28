import mensajesBD from './mensajesBD.js'

function mostrarMensajes() {

    let enlaceMensajes = document.querySelector(".enlace-ver-mensaje")
    let mensajes = mensajesBD

    enlaceMensajes.innerHTML = ''

    mensajes.forEach(item => {

        var ultimo_recibido = mensajes[mensajes.length - 1].hora_recibido
        var index = ultimo_recibido.length - 1

        enlaceMensajes.innerHTML += `
            <div class="mensaje row mb-4" id="contacto${item.id}">
                <div class="col-2">
                    <div class="col-4 img-usuario">
                        <img id="imagen-contacto" src="${item.imagen}">
                    </div>
                </div>
                <div class="col-9">
                    <div class="row">
                        <div class="col-10 nombre-usuario">
                            <p class="body1Bold usuario">${item.usuario}</p>
                        </div>
                        <div class="col-2 hora-mensaje">
                            <p class="caption hora">${item.hora_recibido[index]}</p>
                        </div>
                    </div>
                    <div class="col cuerpo-mensaje">
                        <p class="body2Regular contenido-mensaje">${item.recibido[index].substring(0, 55)}...</p>
                    </div>
                </div>
                <div class="col-1">
                    <img class="ver-mensaje" src="https://i.ibb.co/Mg94z18/Property-1-chevron-right.png" alt="">
                </div>
            </div>`
    })
}
window.addEventListener('load', e => {
    document.querySelector("#contacto0").addEventListener('click', function () {
        localStorage.setItem("contactoId", 0)
    })
    document.querySelector("#contacto1").addEventListener('click', function () {
        localStorage.setItem("contactoId", 1)
    })
    document.querySelector("#contacto2").addEventListener('click', function () {
        localStorage.setItem("contactoId", 2)
    })
    document.querySelector("#contacto3").addEventListener('click', function () {
        localStorage.setItem("contactoId", 3)
    })
    document.querySelector("#contacto4").addEventListener('click', function () {
        localStorage.setItem("contactoId", 4)
    })
    document.querySelector("#contacto5").addEventListener('click', function () {
        localStorage.setItem("contactoId", 5)
    })
    document.querySelector("#contacto6").addEventListener('click', function () {
        localStorage.setItem("contactoId", 6)
    })
    document.querySelector("#contacto7").addEventListener('click', function () {
        localStorage.setItem("contactoId", 7)
    })
})

mostrarMensajes()