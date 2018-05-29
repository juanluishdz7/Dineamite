$(document).ready(function(){
    //GLOBAL VARIABLES
    //================================================================
    var foodSearch = "";
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
        if(foodSearch === "")
        {
            event.preventDefault();
            alert("Select a cuisine")
        }
        else
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
        }
    })
    
    $(".cuisines").on("click", function()
    {
        foodSearch = $(this).attr("value");
        $("#foodSearch").text(foodSearch)
    })
    })