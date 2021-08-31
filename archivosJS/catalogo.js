
$('#cerrar').click(function(){ //permite cerrar el modal
    document.getElementById('miModal').style.display = 'none'
    $('#resultadoCotizacion').hide();
})


$('.tarjeta').click(function(){//cuando se da click a cada uno de los divs que contiene las imagenes se obtiene el id del producto y se busca en el arreglo
    document.getElementById('miModal').style.display = 'block'
    let idProducto = $(this).attr('idproducto') //se obtiene el id del producto de esta manera se busca en el arreglo de objetos el producto y se carga en el modal
    let productoFiltrado = zapatos.filter(item => item.id === parseInt(idProducto))//se busca en el arreglo de objetos el producto para cargarlo en el modal

    document.getElementById('imgProducto').src = productoFiltrado[0].linkImg  //el modal obtiene los datos necesarios para poder cargarlos en cada uno de los productos
    document.getElementById('codigo').innerHTML = `Codigo #${idProducto}`
    document.getElementById('descripcion').innerHTML = productoFiltrado[0].descripcion
    document.getElementById('precio').innerHTML = `Precio ₡ ${productoFiltrado[0].precio}` 
    document.getElementById('tallas').innerHTML = `Tallas: ${productoFiltrado[0].tallas}`
    sessionStorage.setItem('precio',productoFiltrado[0].precio)//se guarda el precio de cada articulo en el sessionStorage para luego utilizarlo de una manera mas facil
})

$('#botonCotizar').click(function(){
    let cantidad = parseInt($('#cantidad').val());
    let precio = (parseInt(sessionStorage.getItem('precio')) * cantidad);

    let impuesto = precio * 0.13;
    precio = precio + impuesto;

    let descuento = ((parseInt($('#edad').val())) / 100) * precio; 
    
    let total = (precio - descuento)

    if (($('#cantidad').val() !== "" && $('#edad').val() !== "") && ($('#cantidad').val() > 0 && $('#edad').val() > 0 )) {  //se valida que los espacios tengan algo y sean numeros positivos, sino tienen nada entonces no se realiza la cotizacion
        $('#cantidadCotizacion').html(`Cantidad: ${cantidad}`)
        $('#descuentoCotizacion').html(`Descuento: ₡${Math.trunc(descuento)}`)
        $('#total').html(`Total: ₡${Math.trunc(total)}`)
        $('#resultadoCotizacion').show(1000);
    }
})

