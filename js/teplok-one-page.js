/** PORTFOLIO GRID SELECTOR **/
$(function(){
	$('#portfolio-grid').mixitup({
	effects: ['fade','scale','grayscale']
	});
});


/** VEGAS SLIDEHSOW **/
	
$(document).ready(function() {
	
	/** TOOLTIP **/
	$('.tooltips').tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body"
	})
	
	/** SMOOTH SCROLL SELECTOR **/
	$('ul.scroll-nav a').smoothScroll({
		easing: 'swing',
		speed: 500
	});
	$('#back-top a').smoothScroll({
		easing: 'swing',
		speed: 500
	});
	
	/** PARALLAX **/
	$('#quote').parallax("50%", 0.05);
	$('#pricing-table').parallax("50%", 0.01);
	

	/** BACK TO TOP **/
	$("#back-top").hide();
	
	/** BACk TO TOP FADE IN **/
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
	});
	
	/** SCROLL SECTION FADE IN **/
	var controller = $.superscrollorama();
	controller.addTween('#features .container', TweenMax.from( $('#features .container'), 1.5, {css:{opacity:0}, ease:Quad.easeOut}));
	controller.addTween('#services .container', TweenMax.from( $('#services .container'), 1.5, {css:{opacity:0}, ease:Quad.easeOut}));
	controller.addTween('#portfolio .container', TweenMax.from( $('#portfolio .container'), 1.5, {css:{opacity:0}, ease:Quad.easeOut}));
	controller.addTween('#pricing-table .container', TweenMax.from( $('#pricing-table .container'), 1.5, {css:{opacity:0}, ease:Quad.easeOut}));
	controller.addTween('#quote .container', TweenMax.from( $('#quote .container'), 1.5, {css:{opacity:0}, ease:Quad.easeOut}));
	controller.addTween('#blog .container', TweenMax.from( $('#blog .container'), 1.5, {css:{opacity:0}, ease:Quad.easeOut}));
	controller.addTween('#team .container', TweenMax.from( $('#team .container'), 1.5, {css:{opacity:0}, ease:Quad.easeOut}));
	
});