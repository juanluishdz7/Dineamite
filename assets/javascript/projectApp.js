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
    //Change recipe name
    $("#recipeName").text(currentHit.label);
    //Change recipe image
    $("#recipeImg").attr("src", currentHit.image);
    //Add ingredients list
    for(var i = 0; i < currentHit.ingredientLines.length; i++)
    {
        $("#ingredients").append("<li>" + currentHit.ingredientLines[i] + "</li>")
    }
}
displayProjectInfo();
