
$(function() {
	console.log('main2.js file running');
	$("#letter-container h2 a").lettering();
});
/* end Intro Letters */

$(document).ready(function() {
	

	/* check for IE and append to HTML */
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);
	
	/* page load delay */
	setTimeout(function(){
		$("#pageWrap").removeClass("hidden").addClass("visible");
	}, 6550);
	
	$('#lapTop').on('click', function() {
	    $(this).toggleClass('open');
	});
});

function toggleDiv(divClass) {
	$("."+divClass).toggle();
};