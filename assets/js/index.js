$(document).ready(function() {

  var $root = $('html, body');

  $('.nav-item-link').click(function(){
    $(".nav-item-link").removeClass("active-nav-item");
    $(this).addClass("active-nav-item");

    // Smooth scrolling when clicking an anchor links
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });
});