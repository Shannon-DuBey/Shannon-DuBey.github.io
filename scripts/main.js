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
	setTimeout(function(){
		$('#wrapper').removeClass('hidden');
		$('#wrapper').fadeIn(300,'linear');
		//$('#wrapper').slideDown();
	}, 6650);
	

	$('.menuItem').click(function() {
		toggleDiv('modal');
	});

	/* prevent script storage in the browser back/forward cache */
	window.onunload = function(){}; 
});



