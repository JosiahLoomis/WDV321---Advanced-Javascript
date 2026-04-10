// JavaScript Document
/*
  This file will:

  - Create a Javascript array containing a list of javascript objects, with each record including another array
  - Convert the Javascript object into a JSON string
  - Store the JSON string into local storage

  Goal: Provide an example of how to create an array of javascript objects
  Goal: Provide an example of how to consume a JSON string in JS

  Use the following data for this:

    student_id = 332443
    student_gpa = 3.6 
    student_courses = ["WDV101","WDV131","WDV105"]

    student_id = 545467
    student_gpa = 2.7
    student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205"]

    student_id = 128574
    student_gpa = 3.4
    student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205","WDV341"]

    student_id = 750056
    student_gpa = 1.85
    student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205"]
*/

// Checks for students in local storage if empty adds the default students
if (!localStorage.getItem("students")) {
  console.log("no students in local storage loading defaults");

  const students = [
    {
      student_id: 332443,
      student_gpa: 3.6,
      student_courses: ["WDV101","WDV131","WDV105"]
    },
    {
      student_id: 545467,
      student_gpa: 2.7,
      student_courses: ["WDV101","WDV131","WDV105","WDV221","WDV205"]
    },
    {
      student_id: 750056,
      student_gpa: 3.4,
      student_courses: ["WDV101","WDV131","WDV105","WDV221","WDV205","WDV341"]
    },
    {
      student_id: 750056,
      student_gpa: 1.85,
      student_courses: ["WDV101","WDV131","WDV105","WDV221","WDV205"]
    }
  ]

  localStorage.setItem("students", JSON.stringify(students)); 
}

// Updates the display to show the students in local storage
const updateDisplay = () => {
  const retrievedStudents = JSON.parse(localStorage.getItem("students"));

  const studentTemplate = document.getElementById("studentTemplate");
  const studentDisplay = document.getElementById("studentDisplay");
  
  studentDisplay.innerHTML = '';

  if (retrievedStudents) {
    retrievedStudents.forEach((student) => {
      const clone = studentTemplate.content.cloneNode(true);
      clone.querySelector('#studentId').textContent = student.student_id;
      clone.querySelector('#studentGpa').textContent = student.student_gpa;

      const coursesList = clone.querySelector('#coursesList');
      student.student_courses.forEach((course) => {
        const li = document.createElement("li");
        li.textContent = course;
        coursesList.appendChild(li);
      });

      studentDisplay.appendChild(clone);
    });
  }
}

updateDisplay();

//Adds new student when the form is submitted
const studentForm = document.getElementById('studentForm');
studentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const studentId = parseInt(document.getElementById('newStudentId').value);
  const studentGpa = parseFloat(document.getElementById('newStudentGpa').value);
  const coursesInput = document.getElementById('newStudentCourses').value;
  
  const studentCourses = coursesInput.split(',').map(course => course.trim());
  
  const newStudent = {
    student_id: studentId,
    student_gpa: studentGpa,
    student_courses: studentCourses
  };
  
  const existingStudents = JSON.parse(localStorage.getItem("students")) || [];
  
  existingStudents.push(newStudent);

  localStorage.setItem("students", JSON.stringify(existingStudents));
  
  updateDisplay();
  
  studentForm.reset();
});