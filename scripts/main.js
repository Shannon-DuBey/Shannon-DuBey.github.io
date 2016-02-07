/************************************************/
/* Developed By:    Shannon DuBey				*/
/* version:         1.5							*/
/* release date:    01/16						*/
/************************************************/

/* letter fade */
$(function() {
	$('#letter-container h2 a').lettering();
});

function toggleDiv(divId) {
	$("#"+divId).toggle();
};

$(document).ready(function(){
	
	/* check for IE and append to HTML */
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);
	
	/* page load delay  */
	if ($(window).width() > 700) {
		setTimeout(function(){
			$('#wrapper').removeClass('hidden');
			$('#wrapper').fadeIn(300,'linear');
		}, 6650);
	} else {
 		$('#wrapper').removeClass('hidden');
		$('#wrapper').fadeIn(300,'linear');
	}
	
	/* fill in email address */
	$('#mailAddress').html('techieshane');
	$('#mailDomain').html('yahoo');

	$('.menuItem').click(function(underConst) {
		$('#construction').addClass('hidden');
		toggleDiv('modal');
	});
	$('.constMenuItem').click(function() {
		$('#construction').removeClass('hidden');
		toggleDiv('modal');
	});

	/* prevent script storage in the browser back/forward cache */
	window.onunload = function(){}; 
});



