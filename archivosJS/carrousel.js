
function rotarImagenes(){ //esta funcion permite cambiar de imagenes al carrusel
    
    let imagenes = $('.card') //se obtienen todos los elementos del index con la clase .card (divs)
      
    for (let i = 0; i < imagenes.length; i++) {//se recorre la lista de elementos html o sea los divs

        let index=Math.floor((Math.random()*zapatos.length));//genera el numero aleatorio en cada iteracion del for

        imagenes[i].children.item(0).children.item(0).src = zapatos[index].linkImg //asigna la direccion url de la imagen
        imagenes[i].children.item(1).children.item(0).innerHTML = zapatos[index].descripcion //asigna la descripcion para cada zapato
        imagenes[i].children.item(0).setAttribute('categoria',zapatos[index].categoria) //asigna a cada elemento html su categoria
    }
}


$(document).ready(function(){ //cuando el index esta cargado completamente llama a la funcion de rotar las imagenes y con un set interval la llama cada 10 segundos
    rotarImagenes();

    setInterval(() => {//rota las imagenes cada 10 segundos
        rotarImagenes();
    }, 10000);
})

$('.enlace').click(function(){ //toma todas los elementos con clase enlace (etiquetas a) y al dar click va a la pagina del catalogo pero tambien carga en el session storage la categoria de cada zapato esto para que cuando toque el zapato recomendado lo lleve al catalogo de los zapatos respectivos
    let categoria = $(this).attr('categoria') //obtiene el id el cual es el nombre de la categoria que desea cargar
    sessionStorage.setItem('categoria',categoria)
})

