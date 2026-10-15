// SWEET SLICE - JAVASCRIPT


function showRecipe(recipeName) {

    // Get all recipe sections
    const recipes = document.querySelectorAll(".recipe");


    // Hide all recipes
    recipes.forEach(function(recipe) {

        recipe.classList.remove("active");

    });


    // Show all recipes
    if (recipeName === "all") {

        recipes.forEach(function(recipe) {

            recipe.classList.add("active");

        });

    }


    // Show selected recipe
    else {

        const selectedRecipe =
            document.getElementById(recipeName);


        if (selectedRecipe) {

            selectedRecipe.classList.add("active");

        }

    }


    // Move page back to the top
    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// Display Chocolate Cake when webpage opens

document.addEventListener("DOMContentLoaded", function() {

    showRecipe("chocolate");

});