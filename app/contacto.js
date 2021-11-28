import BDperros from './BDperros.js'
import BDgatos from './BDgatos.js'

let id = localStorage.getItem("mascotaId");
mostrarDetalle(id)

function mostrarDetalle(id) {
    let contacto = document.querySelector(".imagen-contacto")

    let tipo_mascota = localStorage.getItem("tipoMascota")
    if (tipo_mascota == "perro") {
        var mascotaId = BDperros[id]
    } else {
        var mascotaId = BDgatos[id]
    }

    contacto.innerHTML = ''  /*Reenplazamos el contenido con una cadena  vacia */

    contacto.innerHTML += `
    <img src="${mascotaId.imgusuario}">
    <div class="col mt-1">
        <p class="body1Bold">${mascotaId.usuario}</p>
    </div>
    <a class='flotante-atras' href='detail.html' ><img src="https://i.ibb.co/gwWm0MX/back.png"/></a>
    `

}