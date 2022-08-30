/*
document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        // Get the delta between the mouse position and center point.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });

});
*/

document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview .handle'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        // Get the delta between the mouse position and center point.
        //delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        //topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });

});


// get video element id
var vidClip = document.getElementById("myVideo");
var vidR = document.getElementById("vidR");
var vidL = document.getElementById("vidL");

// play video event
function playVid() {
    vidR.play();
    vidL.play();
    $("#btn-play").hide()
    $("#btn-pause").show()
}

// pause video event
function pauseVid() {
  vidR.pause();
  vidL.pause();
  $("#btn-play").show()
  $("#btn-pause").hide()
}

$(document).ready(function(){
    //video.removeAttribute("controls")
    $("#btn-pause").hide()
})

$('input[id=sourceL]').keyup(function() {
    let txtVal = $(this).val()
    $("#vidL").attr("src",txtVal)

});

$('input[id=sourceR]').keyup(function() {
    let txtVal = $(this).val()
    $("#vidR").attr("src",txtVal)

});
