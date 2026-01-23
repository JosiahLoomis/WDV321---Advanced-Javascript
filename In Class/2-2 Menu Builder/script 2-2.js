const foodTypeSelect = document.getElementById("foodType");
foodTypeSelect.addEventListener("change", (event) => {
    
    const updateDisplay = (selectedValue) => {
        document.getElementById("appetizers").classList.add("hidden");
        document.getElementById("main").classList.add("hidden");
        document.getElementById("desserts").classList.add("hidden");

        document.getElementById(selectedValue).classList.remove("hidden");
    }

    const selectedFood = event.currentTarget.value;
    updateDisplay(selectedFood);
});