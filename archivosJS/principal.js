/* ARREGLO DE OBJETOS DE CADA UNO DE LOS PRODUCTOS*/

const zapatos = [
    {
        id: 1,
        linkImg: 'https://www.payless.cr/20786-thickbox_default/men_s_carlin_dress_shoes.jpg',
        precio: 24600,
        descripcion: 'Zapatos Carlin para hombres',
        categoria: 'hombresFormales',
        tallas:'38,39,40,41,42,43'
    },

    {
        id: 2,
        linkImg: 'https://www.payless.cr/21513-thickbox_default/men_s_zeke_dress_shoes.jpg',
        precio: 24600,
        descripcion: 'Zapatos Zeke para hombres',
        categoria: 'hombresFormales',
        tallas:'38,39,40,41,42,43'
    },

    {
        id: 3,
        linkImg: 'https://www.payless.cr/20513-thickbox_default/men_s_alec_dress_shoes.jpg',
        precio: 17900,
        descripcion: 'Zapatos Alec para hombres',
        categoria: 'hombresFormales',
        tallas:'40,41,42,43'
    },

    {
        id: 4,
        linkImg: 'https://www.payless.cr/20529-thickbox_default/men_s_simon_oxford_dress_shoes.jpg',
        precio: 24600,
        descripcion: 'Zapatos Oxford Simon para hombres',
        categoria: 'hombresFormales',
        tallas:'38,39,40,41,42'
    },

    {
        id: 5,
        linkImg: 'https://www.payless.cr/22873-thickbox_default/men_s_allen_captoe_ox.jpg',
        precio: 24600,
        descripcion: 'Zapatos Allen para hombres',
        categoria: 'hombresFormales',
        tallas:'38,39,40,41,42,43'
    },

    {
        id: 6,
        linkImg: 'https://www.payless.cr/26753-thickbox_default/men_s_emileo_sport_casuals.jpg',
        precio: 27000,
        descripcion: 'Zapatos Emileo sport para hombres',
        categoria: 'hombresDeportivos',
        tallas:'40,41,42,43'
    },

    {
        id: 7,
        linkImg: 'https://www.payless.cr/27909-thickbox_default/men_s_drive_high_tops.jpg',
        precio: 29000,
        descripcion: 'Tenis Drive para hombres',
        categoria: 'hombresDeportivos',
        tallas:'38,39,40,43'
    },

    {
        id: 8,
        linkImg: 'https://www.payless.cr/27483-thickbox_default/men_s_solace_gel_sneakers.jpg',
        precio: 27600,
        descripcion: 'Tenis Solace gel para hombres',
        categoria: 'hombresDeportivos',
        tallas:'38,39,40,41,42'
    },

    {
        id: 9,
        linkImg: 'https://www.payless.cr/26925-thickbox_default/men_s_clutch_sneakers.jpg',
        precio: 25600,
        descripcion: 'Tenis Clutch Decisif para hombres',
        categoria: 'hombresDeportivos',
        tallas:'38,39,40'
    },

    {
        id: 10,
        linkImg: 'https://www.payless.cr/24547-thickbox_default/men_s_concur_runner.jpg',
        precio: 24200,
        descripcion: 'Zapatos deportivos Concur para hombres',
        categoria: 'hombresDeportivos',
        tallas:'38,39,41,42,43'
    },

    {
        id: 11,
        linkImg: 'https://www.payless.cr/24500-thickbox_default/women_s_marci_gore_wedges_booties.jpg',
        precio: 25000,
        descripcion: 'Botines Marci Gore para mujer',
        categoria: 'mujeresFormales',
        tallas:'35,36,37,38,39'
    },

    {
        id: 12,
        linkImg: 'https://www.payless.cr/24305-thickbox_default/women_s_stacey_boots.jpg',
        precio: 25000,
        descripcion: 'Botines Stacey para mujer',
        categoria: 'mujeresFormales',
        tallas:'37,38,39'
    },

    {
        id: 13,
        linkImg: 'https://www.payless.cr/27529-thickbox_default/women_s_rafe_boots.jpg',
        precio: 25000,
        descripcion: 'Botines Rafe para mujer',
        categoria: 'mujeresFormales',
        tallas:'35,36,37'
    },

    {
        id: 14,
        linkImg: 'https://www.payless.cr/22092-thickbox_default/women_s_cami_flats.jpg',
        precio: 12000,
        descripcion: 'Zapatos planos Cami para mujer',
        categoria: 'mujeresFormales',
        tallas:'35,36,37,38,39'
    },

    {
        id: 15,
        linkImg: 'https://www.payless.cr/23002-thickbox_default/women_s_janis_low_heel_pumps.jpg',
        precio: 12200,
        descripcion: 'Zapatos Pumps Janis para mujer',
        categoria: 'mujeresFormales',
        tallas:'35,36,37,38,39'
    },


    {
        id: 16,
        linkImg: 'https://www.payless.cr/26901-thickbox_default/women_s_vertek_sneakers.jpg',
        precio: 21000,
        descripcion: 'Tenis Vertek para mujer',
        categoria: 'mujeresDeportivas',
        tallas:'35,36,37,38,39'
    },

    {
        id: 17,
        linkImg: 'https://www.payless.cr/27828-thickbox_default/tenis-gusto-xt-ii-p-para-mujer.jpg',
        precio: 20800,
        descripcion: 'Tenis Gusto XT II-P para mujer',
        categoria: 'mujeresDeportivas',
        tallas:'35,36,37,38,39'
    },

    {
        id: 18,
        linkImg: 'https://www.payless.cr/27248-thickbox_default/women_s_sierra_ii_sneakers.jpg',
        precio: 21000,
        descripcion: 'Zapatos deportivos Sierra II para mujer',
        categoria: 'mujeresDeportivas',
        tallas:'35'
    },

    {
        id: 19,
        linkImg: 'https://www.payless.cr/27317-thickbox_default/women_s_concur_runner.jpg',
        precio: 22400,
        descripcion: 'Tenis Concur para mujer',
        categoria: 'mujeresDeportivas',
        tallas:'35,38,39'
    },

    {
        id: 20,
        linkImg: 'https://www.payless.cr/26529-thickbox_default/women_s_pique_sneakers.jpg',
        precio: 17200,
        descripcion: 'Tenis Pique para mujer',
        categoria: 'mujeresDeportivas',
        tallas:'35,36,37,38,39'
    },

    {
        id: 21,
        linkImg: 'https://www.payless.cr/20594-thickbox_default/boy_s_toddler_grant_strap_dress_shoes.jpg',
        precio: 13000,
        descripcion: 'Zapatos de vestir con tira Grant para niños pequeños',
        categoria: 'ninosFormales',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 22,
        linkImg: 'https://www.payless.cr/20141-thickbox_default/boy_s_grant_dress_shoes.jpg',
        precio: 13000,
        descripcion: 'Zapatos Grant para niños',
        categoria: 'ninosFormales',
        tallas:'20,21,22,23,24,25'
    },

    {
        id: 23,
        linkImg: 'https://www.payless.cr/25577-thickbox_default/boy_s_toddler_teddy_ox.jpg',
        precio: 11400,
        descripcion: 'Zapatos Teddy Ox para niños pequeños',
        categoria: 'ninosFormales',
        tallas:'17,18,19,20,21,22'
    },

    {
        id: 24,
        linkImg: 'https://www.payless.cr/20805-thickbox_default/boy_s_toddler_teddy_ox.jpg',
        precio: 11400,
        descripcion: 'Zapatos Teddy Ox para niños pequeños',
        categoria: 'ninosFormales',
        tallas:'17,18,19,20,22,23,24,25'
    },

    {
        id: 25,
        linkImg: 'https://www.payless.cr/28195-thickbox_default/boy_s_gusto_xt_ps_runners.jpg',
        precio: 17200,
        descripcion: 'Tenis Gusto XT PS para niños',
        categoria: 'ninosDeportivos',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 26,
        linkImg: 'https://www.payless.cr/26790-thickbox_default/boy_s_toddler_lion_hi-tops.jpg',
        precio: 16800,
        descripcion: 'Tenis Leon para niños pequeños',
        categoria: 'ninosDeportivos',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 27,
        linkImg: 'https://www.payless.cr/26583-thickbox_default/boy_s_rally_court.jpg',
        precio: 17200,
        descripcion: 'Zapatos deportivos Rally para niños',
        categoria: 'ninosDeportivos',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 28,
        linkImg: 'https://www.payless.cr/25889-thickbox_default/boy_s_probe_sneakers.jpg',
        precio: 20600,
        descripcion: 'Tenis Probe para niños',
        categoria: 'ninosDeportivos',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 29,
        linkImg: 'https://www.payless.cr/20609-thickbox_default/girl_s_ari_ii.jpg',
        precio: 14000,
        descripcion: 'Zapatos Ari II para niñas',
        categoria: 'ninasFormales',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 30,
        linkImg: 'https://www.payless.cr/20731-thickbox_default/girl_s_ari_mary_jane.jpg',
        precio: 14000,
        descripcion: 'Zapatos de correa Ari para niñas',
        categoria: 'ninasFormales',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 31,
        linkImg: 'https://www.payless.cr/24037-thickbox_default/girl_s_sweetheart_dress_shoes.jpg',
        precio: 13400,
        descripcion: 'Zapatos Sweetheart para niñas',
        categoria: 'ninasFormales',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 32,
        linkImg: 'https://www.payless.cr/21594-thickbox_default/girl_s_cici.jpg',
        precio: 14000,
        descripcion: 'Zapatos Cici para niñas',
        categoria: 'ninasFormales',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 33,
        linkImg: 'https://www.payless.cr/23510-thickbox_default/girl_s_toddler_princess_heels.jpg',
        precio: 11900,
        descripcion: 'Zapatos Princess de tacón para niñas pequeñas',
        categoria: 'ninasFormales',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 34,
        linkImg: 'https://www.payless.cr/26619-thickbox_default/girl_s_probe_sneakers.jpg',
        precio: 20600,
        descripcion: 'Tenis Probe para niñas',
        categoria: 'ninasDeportivas',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 35,
        linkImg: 'https://www.payless.cr/26993-thickbox_default/girl_s_toddler_gusto_xt_ii_sneakers.jpg',
        precio: 15200,
        descripcion: 'Tenis Gusto XT II para niñas pequeñas',
        categoria: 'ninasDeportivas',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 36,
        linkImg: 'https://www.payless.cr/26741-thickbox_default/girl_s_gusto_ps_sneakers.jpg',
        precio: 17200,
        descripcion: 'Tenis Gusto PS para niñas',
        categoria: 'ninasDeportivas',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 37,
        linkImg: 'https://www.payless.cr/24878-thickbox_default/girl_s_toddler_gusto_xt_ii.jpg',
        precio: 17200,
        descripcion: 'Tenis Gusto XT II para niñas pequeñas',
        categoria: 'ninasDeportivas',
        tallas:'17,18,19,20,21,22,23,24,25'
    },

    {
        id: 38,
        linkImg: 'https://www.payless.cr/21721-thickbox_default/girl_s_sizzle.jpg',
        precio: 11000,
        descripcion: 'Tenis Sizzle para niñas',
        categoria: 'ninasDeportivas',
        tallas:'17,18,19,20,21,22,23,24,25'
    },
    {
        id: 39,
        linkImg: 'https://www.payless.cr/24589-thickbox_default/boy_s_gusto_btm.jpg',
        precio: 17200,
        descripcion: 'Tenis Gusto BTM para niños',
        categoria: 'ninosDeportivos',
        tallas:'17,18,19,20,21,22,23,24,25'
    },
    {
        id: 40,
        linkImg: 'https://www.payless.cr/21886-thickbox_default/boy_s_bts_strap_dress_shoes.jpg',
        precio: 11200,
        descripcion: 'Zapatos BTS Velcro de niños',
        categoria: 'ninosFormales',
        tallas:'17,18,19,20,23,24,25'
    },
    {
        id: 41,
        linkImg: 'https://www.payless.cr/23744-large_default/men_s_payton_sport_chukka_boots.jpg',
        precio: 27000,
        descripcion: 'Botas Payton Sport Chukka para hombres',
        categoria: 'hombresFormales',
        tallas:'38,39,40,41,42,43'
    },
    {
        id: 42,
        linkImg: 'https://www.payless.cr/19151-thickbox_default/men_s_zion_boots.jpg',
        precio: 27000,
        descripcion: 'Botas Zion para hombres',
        categoria: 'hombresFormales',
        tallas:'38,39,40,41,42,43'
    },
    {
        id: 43,
        linkImg: 'https://www.payless.cr/19147-thickbox_default/men_s_derrick_boots.jpg',
        precio: 19900,
        descripcion: 'Botas Derrick para hombres',
        categoria: 'hombresFormales',
        tallas:'40,41,42,43'
    },
    {
        id: 44,
        linkImg: 'https://www.payless.cr/24126-thickbox_default/men_s_rieder_casuals.jpg',
        precio: 19600,
        descripcion: 'Zapatos Rieder para hombres',
        categoria: 'hombresDeportivos',
        tallas:'38,39,40,41,42,43'
    },
    {
        id: 64,
        linkImg: 'https://www.payless.cr/17541-thickbox_default/men_s_prime_sneakers.jpg',
        precio: 20600,
        descripcion: 'Tenis Prime para hombres',
        categoria: 'hombresDeportivos',
        tallas:'38,39,40,41'
    },
    {
        id: 45,
        linkImg: 'https://www.payless.cr/20401-thickbox_default/men_s_gusto_ii-p_runner.jpg',
        precio: 22800,
        descripcion: 'Tenis Gusto II-P para hombres',
        categoria: 'hombresDeportivos',
        tallas:'38,39,40,41,42,44'
    },
    {
        id: 46,
        linkImg: 'https://www.payless.cr/23794-thickbox_default/women_s_pu_puck_boots.jpg',
        precio: 25000,
        descripcion: 'Botines PU Puck para mujer',
        categoria: 'mujeresFormales',
        tallas:'38,39,40,41,42,43'
    },
    {
        id: 47,
        linkImg: 'https://www.payless.cr/25749-thickbox_default/women_s_hayden_boots.jpg',
        precio: 32200,
        descripcion: 'Botas Hayden para mujer',
        categoria: 'mujeresFormales',
        tallas:'35,36,37,38,39'
    },
    {
        id: 48,
        linkImg: 'https://www.payless.cr/24165-thickbox_default/women_s_stewart_buckle_boots.jpg',
        precio: 21800,
        descripcion: 'Botines Stewart buckle para mujer',
        categoria: 'mujeresFormales',
        tallas:'35,36,37,38,39'
    },
    {
        id: 49,
        linkImg: 'https://www.payless.cr/24484-thickbox_default/women_s_concur_runner.jpg',
        precio: 22400,
        descripcion: 'Tenis Concur para mujer',
        categoria: 'mujeresDeportivas',
        tallas:'35,36,37,38,39'
    },
    {
        id: 50,
        linkImg: 'https://www.payless.cr/19174-thickbox_default/women_s_ramp_sport.jpg',
        precio: 21000,
        descripcion: 'Tenis Ramp Sport para mujer',
        categoria: 'mujeresDeportivas',
        tallas:'35,36,37,38'
    },
    {
        id: 51,
        linkImg: 'https://www.payless.cr/23899-thickbox_default/women_s_lyle_dad_sneakers.jpg',
        precio: 19900,
        descripcion: 'Tenis Lyle Dad para mujer',
        categoria: 'mujeresDeportivas',
        tallas:'35,36,39'
    },
    {
        id: 52,
        linkImg: 'https://www.payless.cr/26919-thickbox_default/boy_s_charlie_chukka_boots.jpg',
        precio: 19400,
        descripcion: 'Botines Charlie chukka para niños',
        categoria: 'ninosFormales',
        tallas:'35,36,37,38,39'
    },
    {
        id: 53,
        linkImg: 'https://www.payless.cr/21639-thickbox_default/boy_s_toddler_daegan_boots.jpg',
        precio: 13400,
        descripcion: 'Botas Daegan para niños pequeños',
        categoria: 'ninosFormales',
        tallas:'17,18,19,20,21,22'
    },
    {
        id: 54,
        linkImg: 'https://www.payless.cr/26625-thickbox_default/boy_s_toddler_dino_casuals.jpg',
        precio: 16200,
        descripcion: 'Zapatos Dino para niños pequeños',
        categoria: 'ninosFormales',
        tallas:'17,18,19,20,21,22,23,24,25'
    },
    {
        id: 55,
        linkImg: 'https://www.payless.cr/19934-thickbox_default/boy_s_noah_triple_strap.jpg',
        precio: 14600,
        descripcion: 'Tenis Noah Strap Triple para niños',
        categoria: 'ninosDeportivos',
        tallas:'17,18,19,20,21,22,23,24,25'
    },
    {
        id: 56,
        linkImg: 'https://www.payless.cr/19890-thickbox_default/boy_s_hudson_sport_casuals.jpg',
        precio: 14900,
        descripcion: 'Tenis Hudson Sport para niños',
        categoria: 'ninosDeportivos',
        tallas:'17,18,19,20,21,22,23,24,25'
    },
    {
        id: 57,
        linkImg: 'https://www.payless.cr/23555-thickbox_default/boy_s_jurassic_world_run.jpg',
        precio: 20200,
        descripcion: 'Tenis Jurassic World Run para niños',
        categoria: 'ninosDeportivos',
        tallas:'17,18,19,20,21,22,23,24,25'
    },
    {
        id: 58,
        linkImg: 'https://www.payless.cr/20484-thickbox_default/girl_s_alex_mary_jane.jpg',
        precio: 11200,
        descripcion: 'Zapatos planos Alex Mary Jane para niñas',
        categoria: 'ninasFormales',
        tallas:'17,18,19,20,21,22,23'
    },
    {
        id: 59,
        linkImg: 'https://www.payless.cr/26450-thickbox_default/girl_s_chacha_flats.jpg',
        precio: 10600,
        descripcion: 'Zapatos Chacha para niñas',
        categoria: 'ninasFormales',
        tallas:'17,18,19,20,21,22,23,24,25'
    },
    {
        id: 60,
        linkImg: 'https://www.payless.cr/19988-thickbox_default/girl_s_fae_stringtie_flats.jpg',
        precio: 11000,
        descripcion: 'Zapatos planos Fae para niñas',
        categoria: 'ninasFormales',
        tallas:'17,18,19,20,21,22,23,24,25'
    },
    {
        id: 61,
        linkImg: 'https://www.payless.cr/24571-thickbox_default/girl_s_ice_cream_casuals.jpg',
        precio: 14900,
        descripcion: 'Zapatos Ice Cream para niñas',
        categoria: 'ninasDeportivas',
        tallas:'17,18,19,20,21,22,23,24,25'
    },
    {
        id: 62,
        linkImg: 'https://www.payless.cr/24213-thickbox_default/girl_s_posey_star_double_strap.jpg',
        precio: 14900,
        descripcion: 'Tenis Posey para niñas',
        categoria: 'ninasDeportivas',
        tallas:'17,18,19,20,21,22,23,24,25'
    },
    {
        id: 63,
        linkImg: 'https://www.payless.cr/26353-thickbox_default/girl_s_tillie_strap_casuals.jpg',
        precio: 17600,
        descripcion: 'Zapatos Tillie para niñas',
        categoria: 'ninasDeportivas',
        tallas:'17,18,19,20,21,22,23,24,25'
    }
]


function cargarCatalogo(categoria = 'hombresFormales'){ //esta funcion es la que se encargará de cargar en las tarjetas las imagenes y descripcion de los productos sino se le pasa una categoria el carga por defecto 'hombresFormales'
    let zapatosFiltrados = zapatos.filter(item => item.categoria === categoria)
    let tarjetas = document.getElementsByClassName('tarjeta') //se obtienen todos los divs que contienen a cada uno de los productos que se muestran en el catalogo
    
    for (let i = 0; i < tarjetas.length; i++) {//se utiliza un for porque tarjetas es una lista de elementos html que no posee ningun metodo de recorrido como los arrays u objetos
        tarjetas[i].childNodes[1].src = zapatosFiltrados[i].linkImg
        tarjetas[i].childNodes[3].childNodes[1].firstChild.innerHTML = zapatosFiltrados[i].descripcion
        tarjetas[i].childNodes[3].childNodes[3].innerHTML = `₡ ${zapatosFiltrados[i].precio}`
        tarjetas[i].setAttribute('idProducto',`${zapatosFiltrados[i].id}`)
        //en este for en cada iteracion se le asigna la imagen de cada uno de los productos que fueron seleccionados mediante la categoria
    }
}


$('.subOpcion').click(function(){ //funcion para cada una de las opciones del nav desde donde la persona puede escoger el tipo de zapato que quiere visualizar
        let categoria = $(this).attr('id') //obtiene el id el cual es el nombre de la categoria que desea cargar
        sessionStorage.setItem('categoria',categoria)//la categoria se guarda en el session storage para que cuando se cargue la pagina catalogo este obtenga lo que esta en el session storage y lo cargue
})


$(document).ready(function(){ //si el session storage esta vacio entonces cargue por defecto en el catálogo la categoria hombres formales, sino entonces cargue la categoria que tenga el session storage
    if (sessionStorage.length === 0) {
        cargarCatalogo()
    } else {
        cargarCatalogo(sessionStorage.getItem('categoria'))
    }
})








