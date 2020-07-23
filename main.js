var el ='o';
function minhaFuncao(codigo) {
    el = codigo;
    console.log(el);
    

    if(el == 40){
        var v = document.getElementsByTagName("audio")[0];
        v.play();
        el='o';
    }
    if(el == 'o'){
        var v = document.getElementsByTagName("audio")[0];
        v.pause();
    }
}

document.addEventListener('keydown', function(e) {
    e = e || window.event;
    var code = e.which || e.keyCode;

    el = code;
    console.log(el);
    
    if(el == 40 || el == 38){
        var v = document.getElementsByTagName("audio")[0];
        v.play();
    }
    
});

document.addEventListener('keyup', function(e) {
        var v = document.getElementsByTagName("audio")[0];
        v.pause();
    });

document.getElementById('som').addEventListener('click', function(e){
    document.getElementById('som').style.display = 'none';
    document.getElementById('sem').style.display = 'block';

    var mediaElement = document.getElementById("demo");
    mediaElement.setAttribute('src',''); 

});

document.getElementById('sem').addEventListener('click', function(e){
    document.getElementById('sem').style.display = 'none';
    document.getElementById('som').style.display = 'block';

    var mediaElement = document.getElementById("demo");
    mediaElement.setAttribute('src','audio.ogg'); 

});
