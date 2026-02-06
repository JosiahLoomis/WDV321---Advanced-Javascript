const startingPeople = [
  { name: "Alice Johnson", title: "Web Developer" },
  { name: "Bob Smith", title: "UX Designer" },
  { name: "Charlie Kim", title: "Project Manager" }
];

const people = [];

const profiles = document.getElementById("profiles");
const template = document.getElementById("profileTemplate");

const addPerson = (person) => {
    people.push(person);
    const clone = template.content.cloneNode(true);
    clone.querySelector(".name").textContent = person.name;
    clone.querySelector(".title").textContent = person.title;
    profiles.appendChild(clone)
}

startingPeople.forEach((person) => {
    addPerson(person);
});

//==================== Form ====================
const nameInput = document.getElementById("nameInput");
const titleInput = document.getElementById("titleInput");
const form = document.getElementById("personForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newPerson = {
        name: nameInput.value,
        title: titleInput.value
    };

    addPerson(newPerson);

    form.reset();
});