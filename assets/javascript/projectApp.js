//GLOBAL VARIABLES
//===================================================
var response = localStorage.getItem("response");
var stringResponse = JSON.parse(response);
var hit = localStorage.getItem("hit");
var currentHit = stringResponse.hits[hit].recipe;
console.log(currentHit)
//FUNCTIONS
//===================================================
function displayProjectInfo()
{
    $("#recipeName").text(currentHit.label);
    $("#recipeImg").attr("src", currentHit.image);
    for(var i = 0; i < currentHit.ingredientLines.length; i++)
    {
        $("#ingredients").append("<li>" + currentHit.ingredientLines[i] + "</li>")
    }
    // $("#ingredients").text(currentHit.ingredientLines);
}
displayProjectInfo();
