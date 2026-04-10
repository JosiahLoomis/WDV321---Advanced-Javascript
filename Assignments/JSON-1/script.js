// JavaScript Document
/*
  This file will:
  - Create a Javascript object
  - Convert the Javascript object into a JSON object
  - Store the JSON object into local storage

  Goal: Provide an example of how to create JSON objects in Javascript
  Goal: Provide an example of how to consume JSON objects in Javascript

  Use the following data for your JSON object

    student_id = 332443
    student_gpa = 3.6
    student_courses = ["WDV101","WDV131","WDV105"]

*/

//Creats JavaScipt object
const student = {
  student_id: 332443,
  student_gpa: 3.6,
  student_courses: ["WDV101","WDV131","WDV105"]
}

//Saves it to local storage
localStorage.setItem("student", JSON.stringify(student));

//Retrieves it from local storage
const retrievedStudent = JSON.parse(localStorage.getItem("student"));

//Loads the page with the information from local storage
if (retrievedStudent) {
  const studentId = document.getElementById("studentId");
  const studentGpa = document.getElementById("studentGpa");
  const coursesList = document.getElementById("coursesList");

  studentId.textContent = retrievedStudent.student_id;
  studentGpa.textContent = retrievedStudent.student_gpa;

  retrievedStudent.student_courses.forEach((course) => {
    const li = document.createElement("li");
    li.textContent = course;
    coursesList.appendChild(li);
  });
}
