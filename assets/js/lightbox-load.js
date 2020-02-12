$(document).ready(function () {
    var bCheckEnabled = true;
    var bFinishCheck = false;
    var num = 58; // number of images
    var img;
    var i = 2;

    var myInterval = setInterval(loadImage, 1);

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
