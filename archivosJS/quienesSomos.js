const video = document.getElementById('videoPromo'); //se obtienen los elementos que se utilizaran
const contenedorVideo = document.getElementById('contenedorVideo');


$('#playPause').click(function () {//ESTA FUNCION ES LA QUE PERMITE PAUSAR O REPRODUCIR EL VIDEO
    if (video.paused) {
        video.play()
        $('#playPause').removeClass("fas fa-play")
        $('#playPause').addClass("fas fa-pause")
    } else {
        video.pause()
        $('#playPause').removeClass("fas fa-pause")
        $('#playPause').addClass("fas fa-play")
    }
})

$('#pantallaCompleta').click(function () {//ESTA FUNCION PERMITE QUE EL VIDEO TENGA LA PANTALLA COMPLETA DEL NAVEGADOR
    contenedorVideo.requestFullscreen();
})

$('#pantallaNormal').click(function () {//ESTA FUNCION PERMITE QUE EL VIDEO VUELVA A SU TAMANIO NORMAL EN EL NAVEGADOR
    document.exitFullscreen();
    video.style.width = '95%';
})

contenedorVideo.addEventListener('mouseover',function(){ //esta funcion permite esconder o mostrar los controles del video
    $('#controlesVideo').show(1000,function(){
        $('#controlesVideo').css('display','flex')
        setTimeout(function(){
            $('#controlesVideo').hide(1000);
        },4000)
    })
})

// if (bowser.name === 'Firefox' ) {
//     console.log('hay que cambiar la letra')
//     $('#estiloFirefox').attr('href','../css/tamanioFuenteFireFox.css')
// } else if(bowser.name === 'Chrome'){
//     console.log('No hace falta cambiar la letra')
// }

$(document).ready(function(){ //cuando cargue el documento
    
    if (bowser.name === 'Firefox' ) { //primero debe de ver que navegador esta utilizando el usuario para agregar una hoja de estilos y corregir algunas cosas
        $('#estiloFirefox').attr('href','../css/tamanioFuenteFireFox.css')
    } 
    
})