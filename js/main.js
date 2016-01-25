/************************************************/
/* Developed By:    Shannon DuBey				*/
/* version:         1.5							*/
/* release date:    01/16						*/
/************************************************/

function toggleDiv(divId) {
	$("#"+divId).toggle();
}

$(document).ready(function(){
	
	$('.menuItem').click(function() {
		toggleDiv('modal');
	});


	/* prevent script storage in the browser back/forward cache */
	window.onunload = function(){}; 
});
