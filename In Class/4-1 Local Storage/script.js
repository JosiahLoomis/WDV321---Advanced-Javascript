const nameBox = document.getElementById("nameBox");
const nameBtn = document.getElementById("nameBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

const updateWelcomeMessage = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    welcomeMessage.textContent = user.name || "random person";
}

nameBtn.addEventListener("click", () => {
    const user = {
        name: nameBox.value
    }

    nameBox.value = "";

    localStorage.setItem("user", JSON.stringify(user));
    updateWelcomeMessage();
});

updateWelcomeMessage();