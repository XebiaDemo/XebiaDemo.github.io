$('#price').click(function(){
  $('#features').toggle("slow");
  $('#backupfeature').toggle();
});

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#faq_accordion').on('hidden.bs.collapse', toggleChevron);
$('#faq_accordion').on('shown.bs.collapse', toggleChevron);

$(document).ready(function(){

  $('#broke').css({ opacity: 1});
  $('.spaceShip').css({ opacity: 1});
  $('.manShocked').css({ opacity: 1});

  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).scroll(function () {
      $('.manCycling').each(function (i) {
          if (isScrolledIntoView(this)) {
            $(this).addClass("manCyclingAnimate");
          }
      });
      $('.handwithPhone').each(function (i) {
          if (isScrolledIntoView(this)) {
            $(this).addClass("handwithPhoneAnimate");
          }
      });
      $('.man2').each(function (i) {
          if (isScrolledIntoView(this)) {
            $(this).addClass("man2Animate");
          }
      });
      $('.man_wow').each(function (i) {
          if (isScrolledIntoView(this)) {
              $(this).addClass("slideRight");
          }
      });
    }); 
}); 