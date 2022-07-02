// This value controls number of images displayed in gallery
var imgNo = 40

$(document).ready(function () {
    var bCheckEnabled = true;
    var bFinishCheck = false;
    var num = imgNo + 1;
    var img;
    var i = 2;

    var myInterval = setInterval(loadImage, 1);
    
    lightbox.option({
      'alwaysShowNavOnTouchDevices': true
    })

    function loadImage() {

        if (bCheckEnabled && i < num) {

            bCheckEnabled = false;

            img = new Image();
            img.onload = fExists;
            img.onerror = fDoesntExist;
            img.src = './assets/img/gallery/' + i + '.jpg';
        }

    }

    function fExists() {
        $(".lightbox-content").append('<a href="' + img.src + '" data-lightbox="gallery"></a>');
        i++;
        bCheckEnabled = true;
    }

    function fDoesntExist() {
        bFinishCheck = true;
    }
})
