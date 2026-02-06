const inputLineSection = document.getElementById("studentSection");
const template = document.getElementById("studentTemplate");

// The amount of student sections
let studentCount = 0;

// Adds a new student section
const addStudent = () => {
    studentCount++;

    const clone = template.content.cloneNode(true);
    const inputs = clone.querySelectorAll("input");

    inputs[0].id = "studentName" + studentCount;
    inputs[0].name = "studentName" + studentCount;

    inputs[1].id = "studentID" + studentCount;
    inputs[1].name = "studentID" + studentCount;

    const labels = clone.querySelectorAll("label");
    labels[0].htmlFor = "studentName" + studentCount;
    labels[1].htmlFor = "studentID" + studentCount;

    inputLineSection.appendChild(clone);
}

// Add the inital student section
addStudent();

// Tells the add button to add a new student section when pressed
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addStudent);