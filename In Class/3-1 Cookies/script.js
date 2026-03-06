import * as utils from "./helperFunctions.js"

document.getElementById("darkModeBtn").addEventListener("click", () => {
    utils.setCookie("theme", "dark", 7);
    updateTheme();
});


document.getElementById("lightModeBtn").addEventListener("click", () => {
    utils.setCookie("theme", "light", 7);
    updateTheme();
});

const updateTheme = () => {
    const theme = utils.getCookie("theme");
    document.body.classList.remove("dark-mode", "light-mode");
    
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }
};

updateTheme();