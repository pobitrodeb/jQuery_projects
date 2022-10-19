$(document).ready(function(){

	$('h2').click(function(){
		$('p').attr({
			'wfsdfsd':'asdsdf'
		});
	});


	$('h2').counterUp({
		delay: 50,
		time: 3000
	});


	$('.our-circle').circleProgress({
		value: 1,
		size: 220,
		fill: '#000'
	});
	$('.our-circle2').circleProgress({
		value: .5,
		size: 220,
		fill: 	{
      gradient: ["blue", "yellow"]
    }
	});
	$('.our-circle3').circleProgress({
		value: .8,
		size: 220,
		fill: {
      gradient: ["red", "pink","yellow"]
    }	
	});

	$('html').smoothScroll(1000);





});