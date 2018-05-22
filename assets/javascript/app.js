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
    var queryURL = "https://api.edamam.com/search?q=" + foodSearch + "&app_id=4e2a44cc&app_key=786e4aca26fd298261a3f901cdbe7dcf&health=" + healthLabels;
    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "jsonp"
    }).then(function(response){
    console.log(response);
    });
}

//EVENT HANDLERS
//================================================================
$("#submit").on("click", function(){
    event.preventDefault();
    var active = $(".active");
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