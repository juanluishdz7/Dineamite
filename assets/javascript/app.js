$(document).ready(function(){
//GLOBAL VARIABLES
//================================================================
var foodSearch = "";
var healthLabels = [];
//FUNCTIONS
//================================================================
//EDEMAM AJAX CALL
//----------------------------------------------------------------
function displayFoodResults()
{
    var queryURL = "https://api.edamam.com/search?q=" + foodSearch + "&app_id=b06e5d63&app_key=0545c2932c4566a17980ea67576b8879&healthLabels=" + healthLabels;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    console.log(response);
    });
}

//EVENT HANDLERS
//================================================================
$("#submit").on("click", function(){
    event.preventDefault();
    
})
})