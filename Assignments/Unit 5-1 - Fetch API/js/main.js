//add additional imports here (functions from ui.js)

// Create a click event handler on the "Show Countries" button to fetch the data.
// This will NOT call the Fetch API directly, instead it will call a function defined in api.js
// Overview of what the click handler will need to do (this will be a series of function calls):
//   - Show a loading status
//   - Fetch the data
//   - Clear the loading status
//   - Render results
//   - Include Error handling - i.e. try/catch errors

import { showLoading, showError, clearLoading, renderData } from "./ui.js";
import { fetchData } from "./api.js";

document.getElementById("search-button").addEventListener("click", async () => {
    showLoading();
    
    try {
        const result = await fetchData();
        clearLoading();
        renderData(result);

    } catch (error) {
        clearLoading();
        showError("Unable to retrieve countries from Countries Service.");
    }
});