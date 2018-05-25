$(document).ready(function(){
//GLOBAL VARIABLES
//================================================================
var foodSearch = "indian";
var healthLabels = "";
//FUNCTIONS
//================================================================
//EDEMAM AJAX CALL
//----------------------------------------------------------------
function displayFoodResults()
{
    var queryURL = "https://api.edamam.com/search?q=" + foodSearch + "&app_id=4e2a44cc&app_key=786e4aca26fd298261a3f901cdbe7dcf" + healthLabels;
    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "jsonp"
    }).then(function(response){
    console.log(response);
    var localResponse = JSON.stringify(response);
    localStorage.setItem("response", localResponse);
    window.location.href = "./recipes.html"
    });
}
//EVENT HANDLERS
//================================================================
$("#submit").on("click", function()
{
    event.preventDefault();
    var active = $(".active");
    for(var i = 0; i < active.length; i++)
    {
        var checked = active[i].value;
        healthLabels = healthLabels + "&health=" + checked;
        console.log(checked);
        console.log(healthLabels)
    }
    displayFoodResults();
})
})

// //calories
// var calories = response.hits[0].recipe.calories;
// calories = Math.floor(calories);
// $("#calories").text("Number of calories: " + calories);

// //protein
// var protein = response.hits[0].recipe.totalDaily.PROCNT.quantity;
// protein = Math.floor(protein);
// $("#protein").text("Protein: " + protein + " grams");

// //fiber
// var fiber = response.hits[0].recipe.totalDaily.FIBTG.quantity;
// fiber = Math.floor(fiber);
// $("#fiber").text("Fiber: " + fiber + " grams");

//  //sugars
//  var sugars = response.hits[0].recipe.totalNutrients.SUGAR.quantity;
//  sugars = Math.floor(sugars);
//  $("#sugar").text("Sugars: " + sugars + " grams");

// // saturatedFat
// var saturatedFat = response.hits[0].recipe.totalNutrients.FASAT.quantity;
// saturatedFat = Math.floor(saturatedFat)
// $("#saturatedFat").text("Saturated Fat: " + saturatedFat + " grams");

// // Fat
// var Fat = response.hits[0].recipe.totalNutrients.FAT.quantity;
// Fat = Math.floor(Fat)
// $("#Fat").text("Fat: " + Fat + " grams");

// // monounsaturatedFat
// var monounsaturatedFat = response.hits[0].recipe.totalNutrients.FAMS.quantity;
// monounsaturatedFat = Math.floor(monounsaturatedFat)
// $("#monounsaturatedFat").text("monounsaturatedFat: " + monounsaturatedFat + " grams");

// // polyunsaturatedFat
// var polyunsaturatedFat = response.hits[0].recipe.totalNutrients.FAPU.quantity;
// polyunsaturatedFat = Math.floor(polyunsaturatedFat)
// $("#polyunsaturatedFat").text("polyunsaturatedFat: " + polyunsaturatedFat + " grams");

// //  transFat
//  var transFat = response.hits[0].recipe.totalNutrients.FATRN.quantity;
// transFat = Math.floor(transFat)
// $("#transFat").text("transFat: " + transFat + " grams");

// // carbs
// var Carbs = response.hits[0].recipe.totalDaily.CHOCDF.quantity;
// Carbs = Math.floor(Carbs)
// $("#Carbs").text("Carbs: " + Carbs + " grams");

// //ingredients
// var ingredients = response.hits[0].recipe.ingredients;
//  for(i = 0; i < ingredients.length; i++) {
//    $("#ingredients").append("<div>" + ingredients[i].text + "</div>");
//    console.log(ingredients[0].text);
//  }

// //number of Ingredients
// // var numIngredients = response.hits[0].recipe.totalDaily.CHOCDF.quantity;
// // Carbs = Math.floor(Carbs)
// // $("#Carbs").text("Carbs: " + Carbs + " grams");

// //image
// var recipeImage = response.hits[0].recipe.image;
// $("#recipe").append("<img src=" + recipeImage + ">");
// });