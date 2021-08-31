const video = document.getElementById('videoPromo'); //se obtienen los elementos que se utilizaran
const contenedorVideo = document.getElementById('contenedorVideo');


$('#playPause').click(function () {
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

$('#pantallaCompleta').click(function () {
    contenedorVideo.requestFullscreen();
})

$('#pantallaNormal').click(function () {
    document.exitFullscreen();
    video.style.width = '95%';
})

contenedorVideo.addEventListener('mouseover',function(){ //esta funcion permite esconder o mostrar los controles del video
    console.log('que rico')
    $('#controlesVideo').show(1000,function(){
        $('#controlesVideo').css('display','flex')
        setTimeout(function(){
            $('#controlesVideo').hide(1000);
        },4000)
    })
})