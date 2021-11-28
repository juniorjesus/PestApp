import mensajesBD from './mensajesBD.js'

let id = localStorage.getItem("contactoId")
let nombreC = localStorage.getItem("nombreContacto")
var bandera = false
mostrarMensajes(id)
function mostrarMensajes(id) {
    let datosContacto = document.querySelector(".contacto")
    let contenidoMensaje = document.querySelector(".contenido-mensaje")
    var mensajes = mensajesBD
    mensajes.forEach(item => {
        if (nombreC == item.usuario) {
            var id2 = item.id
            var mensajes2 = mensajesBD[id2]
            console.log(id2)
            datosContacto.innerHTML = ''
            contenidoMensaje.innerHTML = ''

            datosContacto.innerHTML += `
            <div class="row header-contacto">
                <div class="col mt-3 imagen-contacto mb-3">
                    <img src="${mensajes2.imagen}">
                    <div class="col mt-1">
                        <p class="body1Bold">${mensajes2.usuario}</p>
                    </div>
                    <a class='flotante-atras' href='mensajes.html'><img src="https://i.ibb.co/gwWm0MX/back.png" /></a>  
                </div>
            </div>
            `
            for (let i = 0; i < mensajes2.enviado.length; i++) {
                contenidoMensaje.innerHTML += `
            <p class="body2Regular hora-enviado">${mensajes2.hora_enviado[i]}</p>
            <div class="mensaje-enviado row">
                <p class="cuerpo-mensaje">${mensajes2.enviado[i]}</p>
            </div>
            <p class="body2Regular hora-recibido">${mensajes2.hora_recibido[i]}</p>
            <div class="mensaje-recibido row">
                <p class="cuerpo-mensaje">${mensajes2.recibido[i]}</p>
            </div>
        `
            }
        }
        else {
            var mensajes3 = mensajesBD[id]
            //console.log(mensajes3)
            datosContacto.innerHTML = ''
            contenidoMensaje.innerHTML = ''

            datosContacto.innerHTML += `
        <div class="row header-contacto">
            <div class="col mt-3 imagen-contacto mb-3">
                <img src="${mensajes3.imagen}">
                <div class="col mt-1">
                    <p class="body1Bold">${mensajes3.usuario}</p>
                </div>
                <a class='flotante-atras' href='mensajes.html'><img src="https://i.ibb.co/gwWm0MX/back.png" /></a>  
            </div>
        </div>
        `
            for (let i = 0; i < mensajes3.enviado.length; i++) {
                contenidoMensaje.innerHTML += `
        <p class="body2Regular hora-enviado">${mensajes3.hora_enviado[i]}</p>
        <div class="mensaje-enviado row">
            <p class="cuerpo-mensaje">${mensajes3.enviado[i]}</p>
        </div>
        <p class="body2Regular hora-recibido">${mensajes3.hora_recibido[i]}</p>
        <div class="mensaje-recibido row">
            <p class="cuerpo-mensaje">${mensajes3.recibido[i]}</p>
        </div>
        `
            }
        }
    });
    /*
    if (bandera) {
        var mensajes3 = mensajesBD[id]
        //console.log(mensajes3)
        datosContacto.innerHTML = ''
        contenidoMensaje.innerHTML = ''

        datosContacto.innerHTML += `
        <div class="row">
            <div class="col mt-3 imagen-contacto mb-3">
                <img src="${mensajes3.imagen}">
                <div class="col mt-1">
                    <p class="body1Bold">${mensajes3.usuario}</p>
                </div>
                <a class='flotante-atras' href='mensajes.html'><img src="https://i.ibb.co/gwWm0MX/back.png" /></a>  
            </div>
        </div>
        `
        for (let i = 0; i < mensajes3.enviado.length; i++) {
            contenidoMensaje.innerHTML += `
        <p class="body2Regular hora-enviado">${mensajes3.hora_enviado[i]}</p>
        <div class="mensaje-enviado row">
            <p class="cuerpo-mensaje">${mensajes3.enviado[i]}</p>
        </div>
        <p class="body2Regular hora-recibido">${mensajes3.hora_recibido[i]}</p>
        <div class="mensaje-recibido row">
            <p class="cuerpo-mensaje">${mensajes3.recibido[i]}</p>
        </div>
        `
        }
    }*/
}

/*var hoy = new Date()
var hora = hoy.getHours() + ':' + hoy.getMinutes()
console.log(hora)*/