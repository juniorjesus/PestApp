import BDperros from './BDperros.js'
import BDgatos from './BDgatos.js'

let id = localStorage.getItem("mascotaId");
mostrarDetalle(id)

function mostrarDetalle(id) {
    let imagenDetalle = document.querySelector(".imagen_mascota")
    let nombreMascota = document.querySelector(".nombre-mascota")
    let iconoFavorito = document.querySelector(".iconoFavorito")
    let personalidades = document.querySelector(".personalidades")
    let historiaMascota = document.querySelector(".historia-mascota")
    let nombreContacto = document.querySelector(".nombre-contacto")
    let razaMascota = document.querySelector(".raza-mascota")
    let lugarMascota = document.querySelector(".lugar-mascota")
    let imgContacto = document.querySelector(".img-usuario")

    let tipo_mascota = localStorage.getItem("tipoMascota") // establecemos estilos personalizados de la pagina tomando el elemento del localStorage
    if (tipo_mascota == "perro") {
        var mascotaId = BDperros[id]
    } else {
        var mascotaId = BDgatos[id]
    }
    iconoFavorito.innerHTML = ''

    var mfavorito = []
    var existe
    mfavorito = JSON.parse(localStorage.getItem("mascotaFavorita"))

    if (localStorage.getItem('mascotaFavorita')) {
        existe = mfavorito.filter((item2) => item2.nombre == mascotaId.nombre)
        console.log(existe)
        if (existe.length > 0) {
            let iconoFavorito = document.querySelector(".iconoFavorito")
            iconoFavorito.innerHTML = ''
            iconoFavorito.innerHTML += `
            <a class='flotante-favorito' href='#' ><img src="https://i.ibb.co/rQJsTnW/Property-1-Guardado.png" onClick="favorito()"/></a>
        `
        } else {
            let iconoFavorito = document.querySelector(".iconoFavorito")
            iconoFavorito.innerHTML = ''
            iconoFavorito.innerHTML += `
            <a class='flotante-favorito' href='favoritos.html' ><img src="https://i.ibb.co/ZYG3xZ2/Property-1-No-guardado.png" onClick="favorito()"/></a>`
        }
    } else {
        let iconoFavorito = document.querySelector(".iconoFavorito")
        iconoFavorito.innerHTML = ''
        iconoFavorito.innerHTML += `
        <a class='flotante-favorito' href='favoritos.html' ><img src="https://i.ibb.co/ZYG3xZ2/Property-1-No-guardado.png" onClick="favorito()"/></a>`
    }

   /* imgContacto.innerHTML = ''
    imagenDetalle.innerHTML = ''
    nombreMascota.innerHTML = ''
    personalidades.innerHTML = ''
    historiaMascota.innerHTML = ''
    nombreContacto.innerHTML = ''
    lugarMascota.innerHTML = ''
    razaMascota.innerHTML = '' */

    imagenDetalle.innerHTML += `
        <img class="img-detalle-mascota" src="${mascotaId.imagen}">
    `
    nombreMascota.innerHTML += `
    <p class="Headline1 nombre-detalle-mascota">${mascotaId.nombre}
        <img src="${mascotaId.genero}">
    </p>
    `
    razaMascota.innerHTML += `
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-2">
                        <img class="iconos" src="https://i.ibb.co/2sxTfjG/Component-1.png">
                    </div>
                    <div class="col-10">
                        <p class="body2Regular texto-detalle-mascota">${mascotaId.raza}</p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-2">
                        <img class="iconos" src="https://i.ibb.co/xH0ktzq/edad.png">
                    </div>
                    <div class="col-10">
                        <p class="body2Regular texto-detalle-mascota">${mascotaId.edad}</p>
                    </div>
                </div>
            </div>
        </div>
    `

    lugarMascota.innerHTML += `
        <div class="row">
            <div class="col-1">
                <img class="iconos" src="https://i.ibb.co/gDRjWMT/Property-1-map-pin.png">
            </div>
            <div class="col-8">
                <p class="body2Regular texto-detalle-mascota-ubicacion">${mascotaId.ubicacion}</p>
            </div>
        </div>
    `

    for (let i = 0; i < 3; i++) {
        if (mascotaId.personalidad[i] == "Cariñoso") {
            personalidades.innerHTML += `
            <div class="col cards carinoso me-2">
                <div class="col">
                    <img class= "imagen-personalidad ps-2" src="https://i.ibb.co/NLbYcZt/Property-1-Cari-oso.png">
                </div>
                <div class="col">
                    <p class="body1Regular">Caaariñoso</p>
                </div>
            </div>`
        } else if (mascotaId.personalidad[i] == "Inquieto") {
            personalidades.innerHTML += `
            <div class="col cards inquieto me-2">
                <div class="col">
                    <img class= "imagen-personalidad" src="https://i.ibb.co/6bHcbNy/Property-1-Inquieto.png">
                </div>
                <div class="col">
                    <p class="body1Regular ms-2">Inquieto</p>
                </div>
            </div>`
        } else if (mascotaId.personalidad[i] == "Juguetón") {
            personalidades.innerHTML += `
            <div class="col cards jugueton  me-2">
                <div class="col">
                    <img class= "imagen-personalidad" src="https://i.ibb.co/c6XBB4j/Property-1-Jugueton.png">
                </div>
                <div class="col">
                    <p class="body1Regular ms-1">Juguetón</p>
                </div>
            </div>`
        } else if (mascotaId.personalidad[i] == "Tierno") {
            personalidades.innerHTML += `
            <div class="col cards tierno me-2">
                <div class="col">
                    <img class= "imagen-personalidad" src="https://i.ibb.co/bF79Kx2/Property-1-Tierno.png">
                </div>
                <div class="col">
                    <p class="body1Regular ms-1">Tierno</p>
                </div>
            </div>`
        }
        else if (mascotaId.personalidad[i] == "Curioso") {
            personalidades.innerHTML += `
            <div class="col cards curioso me-2">
                <div class="col">
                    <img class= "imagen-personalidad" src="https://i.ibb.co/R9QXW3K/curioso.png">
                </div>
                <div class="col">
                    <p class="body1Regular ms-1">Curioso</p>
                </div>
            </div>`
        }
        else if (mascotaId.personalidad[i] == "Perezoso") {
            personalidades.innerHTML += `
            <div class="col cards perezoso me-2">
                <div class="col">
                    <img class= "imagen-personalidad" src="https://i.ibb.co/D9mHYsX/perezoso.png">
                </div>
                <div class="col">
                    <p class="body1Regular ms-1">Perezoso</p>
                </div>
            </div>`
        }
        else if (mascotaId.personalidad[i] == "Tranquilo") {
            personalidades.innerHTML += `
            <div class="col cards tranquilo me-2">
                <div class="col">
                    <img class= "imagen-personalidad" src="https://i.ibb.co/wr2jF07/tranquilo.png">
                </div>
                <div class="col">
                    <p class="body1Regular ms-1">Tranquilo</p>
                </div>
            </div>`
        }
        else if (mascotaId.personalidad[i] == "Aventurero") {
            personalidades.innerHTML += `
            <div class="col cards aventurero me-2">
                <div class="col">
                    <img class= "imagen-personalidad" src="https://i.ibb.co/VwbhhjM/aventurero.png">
                </div>
                <div class="col">
                    <p class="body1Regular ms-1">Aventurero</p>
                </div>
            </div>`
        }
        else if (mascotaId.personalidad[i] == "Paciente") {
            personalidades.innerHTML += `
            <div class="col cards paciente me-2">
                <div class="col">
                    <img class= "imagen-personalidad" src="https://i.ibb.co/bXzBHFm/paciente.png">
                </div>
                <div class="col">
                    <p class="body1Regular ms-1">Paciente</p>
                </div>
            </div>`
        }
    }
    historiaMascota.innerHTML += `
    <div class="row">
        <div class="col-12 Headline2">
            <p class="Headline2">Historia de ${mascotaId.nombre}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <p class="body1Regular">${mascotaId.historia}</p>
        </div>
    </div>
    `

    nombreContacto.innerHTML += `
    <p class="body2Bold">${mascotaId.usuario}</p>
    `
    imgContacto.innerHTML += `
    <img id="imagen-contacto" src="${mascotaId.imgusuario}">
    `
}
function contacto(event) {
    let id = localStorage.getItem("mascotaId");
    var mascotaId = BDperros[id]

    localStorage.setItem("nombreContacto",mascotaId.usuario)
}
document.querySelector(".btn-contactar").onclick = contacto;

function favorito(event) {
    let tipo_mascota = localStorage.getItem("tipoMascota")
    if (tipo_mascota == "perro") {
        var mascotaId2 = []
        if (localStorage.getItem('mascotaFavorita')) {
            var existe
            mascotaId2 = JSON.parse(localStorage.getItem("mascotaFavorita"))
            existe = mascotaId2.filter((item2) => item2.nombre == BDperros[id].nombre)

            if (existe.length > 0) {
                //console.log("Existe")
                let iconoFavorito = document.querySelector(".iconoFavorito")
                iconoFavorito.innerHTML = ''
                iconoFavorito.innerHTML += `
                <a class='flotante-favorito' href='#' ><img src="https://i.ibb.co/ZYG3xZ2/Property-1-No-guardado.png" onClick="favorito()"/></a>
                `
                const index = mascotaId2.findIndex(item => item.nombre === existe[0].nombre)
                mascotaId2.splice(index, 1)
                localStorage.setItem("mascotaFavorita", JSON.stringify(mascotaId2))

                window.location.reload();

            } else {
                let iconoFavorito = document.querySelector(".iconoFavorito")
                iconoFavorito.innerHTML = ''
                iconoFavorito.innerHTML += `
                <a class='flotante-favorito' href='#' ><img src="https://i.ibb.co/rQJsTnW/Property-1-Guardado.png" onClick="favorito()"/></a>
                `
                mascotaId2.push(BDperros[id])
                localStorage.setItem("mascotaFavorita", JSON.stringify(mascotaId2))

                window.location.reload();
            }
        } else {
            let iconoFavorito = document.querySelector(".iconoFavorito")
            iconoFavorito.innerHTML = ''
            iconoFavorito.innerHTML += `
            <a class='flotante-favorito' href='#' ><img src="https://i.ibb.co/rQJsTnW/Property-1-Guardado.png" onClick="favorito()"/></a>
            `
            mascotaId2.push(BDperros[id])
            localStorage.setItem("mascotaFavorita", JSON.stringify(mascotaId2))

            window.location.reload();
        }

    } else {
        var mascotaId2 = []
        if (localStorage.getItem('mascotaFavorita')) {
            var existe
            mascotaId2 = JSON.parse(localStorage.getItem("mascotaFavorita"))

            existe = mascotaId2.filter((item2) => item2.nombre == BDgatos[id].nombre)
            if (existe.length > 0) {
                //console.log("Existe")
                const index = mascotaId2.findIndex(item => item.nombre === existe[0].nombre)
                mascotaId2.splice(index, 1)
                localStorage.setItem("mascotaFavorita", JSON.stringify(mascotaId2))
                let iconoFavorito = document.querySelector(".iconoFavorito")
                iconoFavorito.innerHTML = ''
                iconoFavorito.innerHTML += `
                <a class='flotante-favorito' href='#' ><img src="https://i.ibb.co/ZYG3xZ2/Property-1-No-guardado.png" onClick="favorito()"/></a>
                `
                window.location.reload();
            } else {
                mascotaId2.push(BDgatos[id])
                localStorage.setItem("mascotaFavorita", JSON.stringify(mascotaId2))
                let iconoFavorito = document.querySelector(".iconoFavorito")
                iconoFavorito.innerHTML = ''
                iconoFavorito.innerHTML += `
                <a class='flotante-favorito' href='#' ><img src="https://i.ibb.co/rQJsTnW/Property-1-Guardado.png" onClick="favorito()"/></a>
                `
                window.location.reload();
            }
        } else {
            let iconoFavorito = document.querySelector(".iconoFavorito")
            iconoFavorito.innerHTML = ''
            iconoFavorito.innerHTML += `
            <a class='flotante-favorito' href='#' ><img src="https://i.ibb.co/rQJsTnW/Property-1-Guardado.png" onClick="favorito()"/></a>
            `
            mascotaId2.push(BDgatos[id])
            localStorage.setItem("mascotaFavorita", JSON.stringify(mascotaId2))
            window.location.reload();
        }
    }
}

document.querySelector(".flotante-favorito").onclick = favorito;
