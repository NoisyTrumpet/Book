import $ from "jquery";

window.addEventListener('load', resize);
window.addEventListener('resize', resize);


document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
    // e.stopPropagation();
});

export function prev() {
    $('.prev').click(function() {
        $('.magazine').turn('previous')
    })
}

export function next() {
    $('.next').click(function() {
        $('.magazine').turn('next')
    })
}


var ratio = 3.53;
var singleRatio = 1.77;

window.addEventListener('load', function(e) {
    var size = resize();
    $('.magazine').turn('size', size.width, size.height);
});

window.addEventListener('resize', function(e) {
    var size = resize();
    $('.magazine').turn('size', size.width, size.height);
});

function resize() {
    $('.magazine').width = '762';
    $('.magazine').height = '431';

    var width = document.body.clientWidth;
    var height = Math.round(width / ratio);
    var singleHeight = Math.round(width / singleRatio);

    var padded = Math.round(document.body.clientHeight * 0.9);



    if (width <= 762) {

        $('.magazine').turn('display', 'single');
        height = singleHeight;
        $('.page img').css('height', 'auto');
    }


    console.log(singleHeight)

    // if the height is too big for the window, constrain it
    if (height > padded) {
        height = padded;
        width = Math.round(height * ratio);
        $('magazine').css('margin-top', '22.25% auto');
    }



    $('.page').width = width + 'px';
    $('.page').height = height + 'px';

    return {
        width: width,
        height: height
    };
};