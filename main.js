// $.stellar();

// $('nav').onePageNav();

// when user clicks menu, toggle the nav ul
$('#menu').click(function() {
	$('nav ul').slideToggle();
});

const nav = $('nav ul');

$(window).resize(function(){
   var width = $(window).width();
   if(width > 768 && nav.is(':hidden')) {
       nav.removeAttr('style');
   }
});