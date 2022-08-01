import{pintarResumenCompra} from './conroladorPintarResumen.js'

//accedemos a la variable local del carrito
let carrito=JSON.parse(localStorage.getItem('carrito'))

//comparo o pregunto si el carrito esta vacio
if(carrito==null){
    pintarResumenCompra('../../assets/img/carrovacio.jpg','Carrito Vacio',true,false,null,false,null)

}else{
    //el carrito esta lleno
    
    //recorro el carrito de compras
    carrito.forEach(function(producto){
       
        pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad)

    })

}