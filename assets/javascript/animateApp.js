$(document).ready(function(){

$('.categories').hide();

$('#get-started').on('click', () => {
    $('.categories').show();
    $("html, body").animate({
        scrollTop: $(".categories").offset().top
    }, 800);
  });
})
