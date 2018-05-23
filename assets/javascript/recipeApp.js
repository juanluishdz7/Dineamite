$(document).ready(function()
{
    //GLOBAL VARIABLES
    //===================================================
    var imageResponse = localStorage.getItem("response");
    var stringResponse = JSON.parse(imageResponse);
    console.log(stringResponse);
    //Run for loop across 8 hits in ajax call
    for (i = 0; i < 8; i++)
    {
        //Change header on page to ajax response
        var recipeName = stringResponse.hits[i].recipe.label;
        $("#header" + [i]).text(recipeName)
        //Change image on page to ajax response
        var recipeImage = stringResponse.hits[i].recipe.image;
        $("#image" + [i]).attr("src", recipeImage);
        console.log (recipeImage);
    };
});

