$('#botonEnviar').click(function(){//ESTA FUNCION ES LA QUE OBTENDRA LOS VALORES QUE HAY EN EL FORMULARIO Y LOS GUARDARA EN EL SESSION STORAGE TAMBIEN VALIDARA QUE NO HAYA NADA VACIO

    if ($('#nombreCompleto').val()!== '' && $('#correoElectronico').val() !== '' && $('#numeroTelefono').val() !== '' && $('#espacioPregunta').val() !== '') {
        sessionStorage.setItem('nombreUsuario',$('#nombreCompleto').val())
        sessionStorage.setItem('email',$('#correoElectronico').val())
        sessionStorage.setItem('telefono',$('#numeroTelefono').val())
        sessionStorage.setItem('pregunta',$('#espacioPregunta').val())
    
        $('#nombre').html(`Nombre: ${sessionStorage.getItem('nombreUsuario')}`)
        $('#correoE').html(`Correo Eléctronico: ${sessionStorage.getItem('email')}`)
        $('#telefono').html(`Teléfono: ${sessionStorage.getItem('telefono')}`)
        $('#pregunta').html(`Pregunta: <br> ${sessionStorage.getItem('pregunta')}`)
    
        $('#contenedorModal').css('display','block')
    }else{
        $('#advertencia').html('*No puedes enviar nada vacío, debes completar los espacios correspondientes')
        $('#advertencia').show(1000,function(){
            setTimeout(function(){
                $('#advertencia').hide(1000)
            },4000)
        })
    }

})


$('#confirmacion').click(function(){ //EL BOTON DE CONFIRMACION DE EL "ENVIO DEL FORMULARIO" BORRARA LAS VARIABLES QUE SE HAYAN CREADO EN EL SESSION STORAGE
    sessionStorage.removeItem('nombreUsuario')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('telefono')
    sessionStorage.removeItem('pregunta')
    $('#contenedorModal').hide(1000)
})

$('#negacion').click(function(){ //LA FUNCION NEGACION PERMITIRA EDITAR LA INFORMACION QUE PAREZCA INCORRECTA EN EL FORMULARIO

    $('#nombreCompleto').val(sessionStorage.getItem('nombreUsuario'))
    $('#correoElectronico').val(sessionStorage.getItem('email'))
    $('#numeroTelefono').val(sessionStorage.getItem('telefono'))
    $('#espacioPregunta').val(sessionStorage.getItem('pregunta'))
    $('#contenedorModal').hide(1000)
})