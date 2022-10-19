$(document).ready(function() {
    $('.our_circle').circleProgress({
        value: 0.95,
        size: 120,
        fill: {
            gradient: ["red", " #23a9f2"]
        }
    });
    $('.our_circle2').circleProgress({
        value: 0.90,
        size: 120,
        fill: {
            gradient: ["red", "#4865a0"]
        }
    });
    $('.our_circle3').circleProgress({
        value: 0.85,
        size: 120,
        fill: {
            gradient: ["red", " red"]
        }

    });
});