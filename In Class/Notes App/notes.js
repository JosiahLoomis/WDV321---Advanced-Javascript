document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("noteInput");
    const addNoteBtn = document.getElementById("addNoteBtn");
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    addNoteBtn.addEventListener("click", () => {
        notes.push({
            noteText: noteInput.value,
            updatedAt: new Date(),
            createdAt: new Date()
        });

        localStorage.setItem("notes", JSON.stringify(notes));

        renderNotes(notes);
        noteInput.value = "";
    });

    const deleteNote = (index) => {
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes(notes);
    }

    const editNote = (index, newNote) => {
        notes[index].noteText = newNote;
        notes[index].updatedAt = new Date();

        localStorage.setItem("notes", JSON.stringify(notes));
    }

    const renderNotes = () => {
        const notesDiv = document.getElementById("notes");
        notesDiv.innerHTML = "";

        notes.forEach((note, index) => {
            const div = document.createElement("div");
            const button = document.createElement("button");
            const text = document.createElement("input");

            button.textContent = "Delete";
            button.addEventListener("click", () => deleteNote(index));

            text.type = "text";
            text.value = note.noteText;
            text.addEventListener("input", () => editNote(index, text.value));

            div.appendChild(text);
            div.appendChild(button);
            notesDiv.appendChild(div);
        });
    }
    
    renderNotes(JSON.parse(localStorage.getItem("notes")) || []);
});