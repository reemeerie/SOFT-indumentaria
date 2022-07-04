function cargarProductos() {

    const adultitos = document.getElementById("adultitos")

    for (const articulo of articulos) {
        const div = document.createElement("div")
        div.className = "card"
        div.id = "Art" + articulo.ID
        div.innerHTML= `<img class="card-img-top" src="${articulo.img}" alt="Card image cap">
                        <div class="card-body" id="bodyArt${articulo.ID}">
                            <h5 class="card-title">${articulo.nombre}</h5>
                        </div>`
        adultitos.append(div)

        const a = document.createElement("a")
        a.className = "btn btn-primary"
        a.innerText = "Agregar al carrito"
        a.addEventListener("click", () => {
            agregarAlcarrito(articulo)
        })

        const bodyCard  = document.getElementById(`bodyArt${articulo.ID}`)
        bodyCard.append(a)
    }
}

function agregarAlcarrito(art) {

    alertita("Agregado al carro");

    const newCarro = JSON.parse(localStorage.getItem("carroNuevo"))
    if (newCarro) {
        let existencia = newCarro.find((prod)=> art.ID === prod.ID)

        if (existencia) {
            existencia.cantidad += 1
            localStorage.setItem("carroNuevo", JSON.stringify(newCarro))
        } else {
            newCarro.push(art)
            localStorage.setItem("carroNuevo", JSON.stringify(newCarro))
        }
    } else {
        carrito.push(art)
        localStorage.setItem("carroNuevo", JSON.stringify(carrito))
    }

    /* carrito.push(art) */

    /* const container = document.createElement("div") 
    container.className="card"
    container.id = "CarroArt" + art.ID
    container.innerHTML= `<img class="card-img-top" src="${art.img}" alt="Card image cap">
                          <div class="card-body" id="bodyCarro${art.ID}">
                            <h5 class="card-title">${art.nombre}</h5>
                          </div>`
    carro.append(container) */

    /* const remover = document.createElement("a")
        remover.className = "btn btn-primary"
        remover.innerText = "Quitar del carrito"
        remover.addEventListener("click", () => {
            quitarDelCarro(art)
        })
    
    const bodyCarroCard  = document.getElementById(`bodyCarro${art.ID}`)
        bodyCarroCard.append(remover) */

    /* localStorage.setItem("carroNuevo", JSON.stringify(carrito)) */
}

function alertita(msg) {
    Swal.fire({
        icon:"success",
        toast: true,
        title: msg,
        position: "bottom",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,

    })
}
cargarProductos();














/* function quitarDelCarro(arti) {
    const productoAquitar = document.getElementById(`CarroArt${arti.ID}`)
    productoAquitar.remove();
} */

//generar un console.table(articulos) para ver los articulos y buscar 

/* function buscoPorNombre() {
    let nombreBuscado = prompt("Ingrese el nombre del articulo que desea buscar").toUpperCase()
    let resultado = articulos.filter((articulo)=> articulo.nombre.includes(nombreBuscado));
    console.table(resultado)
} */