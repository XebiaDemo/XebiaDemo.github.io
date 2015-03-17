$(function(){
	$('.reg').click(function(){
		$('.register-container').fadeIn(),
		$('.login-container').hide(),
		$('.reg').css("background","#1ABC9C"),
		$('.log').css("background","rgba(225,225,225,0)");
	});
	$('.log').click(function(){
		$('.login-container').fadeIn(),
		$('.register-container').hide();
		$('.log').css("background","#1ABC9C"),
		$('.reg').css("background","rgba(225,225,225,0)");
	});
});

$('.alert').delay(2000).fadeIn(300);

$('.fa-times-circle').click(function(){
   $(this).parent('.alert').fadeOut(300);
});

$('.switch').click(function(){
   $(this).children('i').toggleClass('fa-pencil');
   $('.login').animate({height: "toggle", opacity: "toggle"}, "slow");
   $('.register').animate({height: "toggle", opacity: "toggle"}, "slow");
});