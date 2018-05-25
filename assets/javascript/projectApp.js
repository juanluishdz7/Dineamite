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
    // //calories
// var calories = currentHit.calories;
// calories = Math.floor(calories);
// $("#calories").text("Number of calories: " + calories);

// //protein
// var protein = currentHit.totalDaily.PROCNT.quantity;
// protein = Math.floor(protein);
// $("#protein").text("Protein: " + protein + " grams");

// //fiber
// var fiber = currentHit.totalDaily.FIBTG.quantity;
// fiber = Math.floor(fiber);
// $("#fiber").text("Fiber: " + fiber + " grams");

//  //sugars
//  var sugars = currentHit.totalNutrients.SUGAR.quantity;
//  sugars = Math.floor(sugars);
//  $("#sugar").text("Sugars: " + sugars + " grams");

// // saturatedFat
// var saturatedFat = currentHit.totalNutrients.FASAT.quantity;
// saturatedFat = Math.floor(saturatedFat)
// $("#saturatedFat").text("Saturated Fat: " + saturatedFat + " grams");

// // Fat
// var Fat = currentHit.totalNutrients.FAT.quantity;
// Fat = Math.floor(Fat)
// $("#Fat").text("Fat: " + Fat + " grams");

// // monounsaturatedFat
// var monounsaturatedFat = currentHit.totalNutrients.FAMS.quantity;
// monounsaturatedFat = Math.floor(monounsaturatedFat)
// $("#monounsaturatedFat").text("monounsaturatedFat: " + monounsaturatedFat + " grams");

// // polyunsaturatedFat
// var polyunsaturatedFat = currentHit.totalNutrients.FAPU.quantity;
// polyunsaturatedFat = Math.floor(polyunsaturatedFat)
// $("#polyunsaturatedFat").text("polyunsaturatedFat: " + polyunsaturatedFat + " grams");

// //  transFat
//  var transFat = currentHit.totalNutrients.FATRN.quantity;
// transFat = Math.floor(transFat)
// $("#transFat").text("transFat: " + transFat + " grams");

// // carbs
// var Carbs = currentHit.totalDaily.CHOCDF.quantity;
// Carbs = Math.floor(Carbs)
// $("#Carbs").text("Carbs: " + Carbs + " grams");

// //ingredients
// var ingredients = currentHit.recipe.ingredients;
//  for(i = 0; i < ingredients.length; i++) {
//    $("#ingredients").append("<div>" + ingredients[i].text + "</div>");
//    console.log(ingredients[0].text);
//  }

// //number of Ingredients
// // var numIngredients = currentHit.recipe.totalDaily.CHOCDF.quantity;
// // Carbs = Math.floor(Carbs)
// // $("#Carbs").text("Carbs: " + Carbs + " grams");

// //image
// var recipeImage = currentHit.image;
// $("#recipe").append("<img src=" + recipeImage + ">");
// });
}
displayProjectInfo();
