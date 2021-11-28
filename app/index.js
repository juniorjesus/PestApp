import BDperros from './BDperros.js'
import BDgatos from './BDgatos.js'

function mostrarMascotas(mascotas) {
    let columna1 = document.querySelector(".grid-mascotas")
    //let columna2 = document.querySelector(".columna2")
    //let mascotas = BDperros
    columna1.innerHTML = ''
    //columna2.innerHTML = ''
    mascotas.forEach(item => { //empleamos el metodo forEach para cada elemeto de nuestro array
        if (item.id < 10) {
            columna1.innerHTML += `
            <div class="col mascotas">
                <a href="detail.html" class="enlace-detalle-mascota">
                    <div class="card bg-dark text-white gradiente" id="mascota${item.id}" data-mascota=${item.id}>                
                        <img src="${item.imagen}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                                <h5 class="card-title body2Bold">${item.nombre}</h5>
                                <p class="card-text body2Regular">${item.raza}</p>
                        </div>
                    </div>
                </a>
            </div>`
        }
        /*else {
            columna2.innerHTML += `
            <a href="detail.html" class="enlace-detalle-mascota">
                <div class="card bg-dark text-white gradiente" id="mascota${item.id}" data-mascota=${item.id}>
                    <img src="${item.imagen}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${item.nombre}</h5>
                        <p class="card-text body2Regular">${item.raza}</p>
                    </div>
                </div>
            </a>`
        }*/
    });

}

function perro(event) {
    let mascotasperro = BDperros
    mostrarMascotas(mascotasperro)
    localStorage.setItem("tipoMascota", "perro")
    document.querySelector("#mascota0").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 0)
    })
    document.querySelector("#mascota1").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 1)
    })
    document.querySelector("#mascota2").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 2)
    })
    document.querySelector("#mascota3").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 3)
    })
    document.querySelector("#mascota4").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 4)
    })
    document.querySelector("#mascota5").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 5)
    })
    document.querySelector("#mascota6").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 6)
    })
    document.querySelector("#mascota7").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 7)
    })
    document.querySelector("#mascota8").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 8)
    })
    document.querySelector("#mascota9").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 9)
    })
}
function gato(event) {
    let mascotasgato = BDgatos
    mostrarMascotas(mascotasgato)
    localStorage.setItem("tipoMascota", "gato")
    document.querySelector("#mascota0").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 0)
    })
    document.querySelector("#mascota1").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 1)
    })
    document.querySelector("#mascota2").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 2)
    })
    document.querySelector("#mascota3").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 3)
    })
    document.querySelector("#mascota4").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 4)
    })
    document.querySelector("#mascota5").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 5)
    })
    document.querySelector("#mascota6").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 6)
    })
    document.querySelector("#mascota7").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 7)
    })
    document.querySelector("#mascota8").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 8)
    })
    document.querySelector("#mascota9").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 9)
    })
}
document.querySelector(".btn-perro").onclick = perro;
document.querySelector(".btn-gato").onclick = gato;

window.addEventListener('load', e => {
    let tipo_mascota = localStorage.getItem("tipoMascota")
    if (tipo_mascota == "perro") {
        perro()
        
    } else {
        gato()
    }
    
})




/*

const images = [
    { img: 'https://i.ibb.co/b5QCFhW/leonidasesteban-com.png', time: 900 },
    { img: 'https://i.ibb.co/gZfsJ74/leonidasesteban-com-leo.png', time: 500 },

];

const img = document.querySelector('img');
let index = 0;

function showNextImage() {
  const image = images[index++];

  if (!image) return;
  
  img.src = image.img;
  setTimeout(showNextImage, image.time);
};

showNextImage();*/