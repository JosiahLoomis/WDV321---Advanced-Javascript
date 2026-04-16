let gameLibrary = [];

//Checks if form is valid
const validateForm = () => {
    const gameName = document.getElementById("gameName").value.trim();
    const gameType = document.getElementById("gameType").value;
    const gamePlayers = document.getElementById("gamePlayers").value;
    const difficulty = document.querySelector('input[name="difficulty"]:checked');
    const options = document.querySelectorAll('input[name="gameOptions"]:checked');

    // 1. Game Name
    if (gameName === "" || gameName.length > 50) {
        alert("Game Name is required and must be under 50 characters.");
        return false;
    }

    // 2. Game Type
    if (gameType === "") {
        alert("Please select a game type.");
        return false;
    }

    // 3. Number of Players
    const playersNum = Number(gamePlayers);

    if (
        gamePlayers === "" ||
        isNaN(playersNum) ||
        playersNum < 1 ||
        playersNum > 20 ||
        !Number.isInteger(playersNum)
    ) {
        alert("Number of players must be a whole number between 1 and 20.");
        return false;
    }

    // 4. Difficulty
    if (!difficulty) {
        alert("Please select a difficulty.");
        return false;
    }

    // 5 & 6. Game Options rule (Fast Play vs Long Game)
    let selectedOptions = Array.from(options).map(opt => opt.value);

    if (
        selectedOptions.includes("Fast Play") &&
        selectedOptions.includes("Long Game")
    ) {
        alert("Fast Play and Long Game cannot both be selected.");
        return false;
    }

    return true;
}

//Add game to library
document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    //Check if form is valid
    if (!validateForm()) {
        return;
    }

    const gameName = document.getElementById("gameName").value.trim();
    const gameType = document.getElementById("gameType").value;
    const gamePlayers = Number(document.getElementById("gamePlayers").value);
    const difficulty = document.querySelector('input[name="difficulty"]:checked').value;

    const options = Array.from(
        document.querySelectorAll('input[name="gameOptions"]:checked')
    ).map(opt => opt.value);

    //Create game object with data from form
    const game = {
        name: gameName,
        type: gameType,
        players: gamePlayers,
        difficulty: difficulty,
        options: options
    }

    console.log(game);

    gameLibrary.push(game);
    console.log(gameLibrary);
});

//Display game library
document.getElementById("display").addEventListener("click", () => {
    //Clear library section
    const container = document.querySelector(".displayGameLibrary");
    container.innerHTML = "<h3>Game Library</h3>";

    //Load and display data from gameLibrary
    gameLibrary.forEach(game => {
        const gameHTML = `
            <div class="gameCard">
                <p><strong>Name:</strong> ${game.name}</p>
                <p><strong>Type:</strong> ${gameTypes[gameTypeAbb.indexOf(game.type)]}</p>
                <p><strong>Players:</strong> ${game.players}</p>
                <p><strong>Difficulty:</strong> ${game.difficulty}</p>
                <p><strong>Options:</strong> ${game.options.join(", ")}</p>
            </div>
        `;

        container.innerHTML += gameHTML;
    });
});

//Resets the gameLibrary
document.getElementById("startOver").addEventListener("click", () => {
    //Clear library section
    const container = document.querySelector(".displayGameLibrary");
    container.innerHTML = "<h3>Game Library</h3>";

    //Clears the gameLibrary
    gameLibrary = [];
});