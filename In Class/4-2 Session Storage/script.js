const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentInput = document.getElementById("comment");

form.addEventListener("input", () => {
    const formData = {
        Name:   nameInput.value,
        Email:  emailInput.value,
        Comment:    commentInput.value
    }

    sessionStorage.setItem("formData", JSON.stringify(formData));
});

const loadData = () => {
    const formData = JSON.parse(sessionStorage.getItem("formData"));
    if (!formData)
        return;

    nameInput.value = formData.Name;
    emailInput.value = formData.Email;
    commentInput.value = formData.Comment;
}

loadData();