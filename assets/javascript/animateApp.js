$(document).ready(function(){

    $('.categories').hide();
    
    $('#get-started').on('click', () => {
        $('.categories').show();
        $('.cuisineDisplay').hide();
        $('.cuisineSubmit').hide();
        $("html, body").animate({
            scrollTop: $(".categories").offset().top
        }, 800);
      });
    })
    
    $('#dietSelect').on('click', () => {
        event.preventDefault()
        $('.categories').hide();
        $('.cuisineDisplay').show();
        $('.dietSubmit').hide();
        alert("this gone");
    });
