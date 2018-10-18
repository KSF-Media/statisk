
$(document).ready(function(){
	$('.gotonext').click(function(){
		$('html, body').animate({
			scrollTop: ($('.logo_sec').offset().top)+30
		},1000);
	})
	
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
	 	if (scroll >= 100) $(".gototop").fadeIn(300);
	  else $(".gototop").fadeOut(300);
	});
	$(".gototop").click(function () {
	   $("html, body").animate({scrollTop: 0}, 1000);
	});
						   

})

