const newCarro = JSON.parse(localStorage.getItem("carroNuevo"))

function cargarProductosNuevo() {

    const contenedor = document.getElementById("container")
    contenedor.innerHTML=""

    for (const produ of newCarro) {
        const div = document.createElement("div")
        div.className = "card"
        div.id = "Art" + produ.ID
        //ACA TENES QUE HACER QUE TE MUESTRE LA PROPIEDAD "CANTIDAD" DE CADA OBJETO DEL ARRAY, ASI SABE CUANTOS VA A COMPRAR
        div.innerHTML= `<img class="card-img-top" src="${produ.img}" alt="Card image cap">
                        <div class="card-body" id="carrArt${produ.ID}">
                            <h5 class="card-title">${produ.nombre}</h5>
                            <p class="card-text">Cantidad: ${produ.cantidad} - $${produ.precio * produ.cantidad}</p>
                        </div>`
        contenedor.append(div)

        const a = document.createElement("a")
        a.className = "btn btn-primary"
        a.innerText = "Quitar del carrito"
        a.addEventListener("click", () => {
            quitarDelCarrito(produ)
        })

        const bodyCard  = document.getElementById(`carrArt${produ.ID}`)
        bodyCard.append(a)
    }
}

function quitarDelCarrito(arti) {
    quitado("Eliminado del carro");
    const productoAquitar = document.getElementById(`Art${arti.ID}`)
    productoAquitar.remove();

    let indice = newCarro.indexOf(arti);
    newCarro.splice(indice, 1);

    localStorage.setItem("carroNuevo", JSON.stringify(newCarro))
}
function quitado(msg) {
    Swal.fire({
        icon:"info",
        toast: true,
        title: msg,
        position: "bottom",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

cargarProductosNuevo();