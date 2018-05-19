$(document).ready(function(){
//GLOBAL VARIABLES
//================================================================
var foodSearch = "indian";
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
    }).then(function(response){
    console.log(response);
    });
}

//EVENT HANDLERS
//================================================================
$("#submit").on("click", function(){
    event.preventDefault();
    var active = $(".active");
    console.log(active.length)
    for(var i = 0; i < active.length; i++)
    {
        var checked = active[i].value;
        healthLabels.push(checked)
        console.log(checked);
        console.log(healthLabels)
    }
    displayFoodResults();

})
})