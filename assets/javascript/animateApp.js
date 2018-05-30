$(document).ready(function(){

    $('.categories').hide();
    $('.cuisineDisplay').hide();
    $('#dietSelect').hide();
    $('#submit').hide();
    
    $('#get-started').on('click', () => {
        $('.categories').show();
        $('#dietSelect').show();
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
        $('#submit').show();

        // $('.dietSubmit').hide();
        // alert("this gone");
    });
