        // JavaScript for the search functionality
        document.getElementById('recipeSearch').addEventListener('input', function () {
            // Get the value entered in the search bar
            const searchValue = this.value.toLowerCase();

            // Get all recipe sections
            const recipeSections = document.querySelectorAll('.recipe');

            // Loop through each recipe section and hide/show based on the search value
            recipeSections.forEach(section => {
                const recipeTitle = section.querySelector('h2').innerText.toLowerCase();

                // Check if the search value is present in the recipe title
                if (recipeTitle.includes(searchValue)) {
                    section.style.display = 'block';  // Show the section
                } else {
                    section.style.display = 'none';   // Hide the section
                }
            });
        });
