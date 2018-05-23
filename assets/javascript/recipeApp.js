$(document).ready(function(){

    var imageResponse = localStorage.getItem("response");
    var stringResponse = JSON.parse(imageResponse);
    console.log(stringResponse);
    for (i = 0; i < 8; i++) {
        var recipeImage = stringResponse.hits[i].recipe.image;
        $("#image" + [i]).attr("src", recipeImage);
        console.log (recipeImage);
        };
});

