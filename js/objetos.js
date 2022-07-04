const carrito = []
const articulos = []

class Articulo {
    constructor (ID, nombre, stock, precio, img) {
        this.ID = ID
        this.nombre = nombre
        this.stock = stock
        this.precio = precio
        this.iva = 1.21
        this.pfinal = this.precio * this.iva
        this.valorIva = this.precio * 0.21
        this.img = img
        this.cantidad = 1
    }
}

function generadorArticulos() {
articulos.push ( 
        new Articulo(10, "Campera beige", 15, 9500, "../img/adultos1.jpg"),
        new Articulo(11, "Sweater verde", 5, 6000, "../img/adultos2.jpg"),
        new Articulo(12, "Bomber negra", 7, 8000, "../img/adultos3.jpg"),
        new Articulo(13, "Sweater negro", 21, 2500, "../img/adultos4.jpg"),
        new Articulo(14, "Remera negra ml", 4, 2000, "../img/adultos5.jpg")
)
}

generadorArticulos();