import $ from "jquery";

window.addEventListener('load', resize);
window.addEventListener('resize', resize);


document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
    // e.stopPropagation();
});



var ratio = 2.04606061;
var singleRatio = 1.0230303;

window.addEventListener('load', function(e) {
    var size = resize();
    $('.magazine-2').turn('size', size.width, size.height);
});

window.addEventListener('resize', function(e) {
    var size = resize();
    $('.magazine-2').turn('size', size.width, size.height);
});

function resize() {
    $('.magazine-2').width = '1688';
    $('.magazine-2').height = '825';

    var width = document.body.clientWidth;
    var height = Math.round(width / ratio);
    var singleHeight = Math.round(width / singleRatio);

    var padded = Math.round(document.body.clientHeight * 0.9);



    // if (width <= 762) {

    //     // $('.magazine-2').turn('display', 'single');
    //     height = singleHeight;
    //     $('.page img').css('height', 'auto');
    // }

    // if the height is too big for the window, constrain it
    // if (height > padded) {
    //     height = padded;
    //     width = Math.round(height * ratio);
    //     $('magazine-2').css('margin-top', '2.25% auto');
    // }



    $('.page').width = width + 'px';
    $('.page').height = height + 'px';

    return {
        width: width,
        height: height
    };
};