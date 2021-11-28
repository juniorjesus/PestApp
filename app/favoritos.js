import BDperros from "./BDperros.js"
import BDgatos from "./BDgatos.js"

let mascota_favorita = []
mascota_favorita = JSON.parse(localStorage.getItem("mascotaFavorita"))
mostrarFavoritos(mascota_favorita)

function mostrarFavoritos(fav) {
    let columna1 = document.querySelector(".grid-mascotas")
    //let columna2 = document.querySelector(".columna2")
    //var mascotasPerro = BDperros[id]
    //var mascotasGato = BDgatos[id]
    columna1.innerHTML = ''
    //columna2.innerHTML = ''
    var contador = 0
    fav.forEach(item => {
        columna1.innerHTML += `
            <div class="col mascotas">
                <a href="detail.html" class="enlace-detalle-mascota">
                    <div class="card bg-dark text-white gradiente" id="mascota${contador}" data-mascota=${item.id}>                
                        <img src="${item.imagen}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                                <h5 class="card-title body2Bold">${item.nombre}</h5>
                                <p class="card-text body2Regular">${item.raza}</p>
                        </div>
                    </div>
                </a>
            </div>`
        contador++

    });
}

window.addEventListener('load', e => {
    let mascota_favorita = []
    mascota_favorita = JSON.parse(localStorage.getItem("mascotaFavorita"))

    for (let i = 0; i < mascota_favorita.length; i++) {
        const element = mascota_favorita[i];
        document.querySelector(`#mascota${i}`).addEventListener('click', function () {
            if (element.categoria == "perro") {
                localStorage.setItem("tipoMascota", "perro")
            } else {
                localStorage.setItem("tipoMascota", "gato")
            }
            localStorage.setItem("mascotaId", element.id)
        })

    }
})