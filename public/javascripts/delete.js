function deleteNote(id) {     //Delete Note

    if (confirm("Are you sure you want to delete this note?")) {
        if(id!=0) {     //cant delete tutorial
            JSONArray.splice(id, 1);
            updateId();
        }
    }
    saveSNote();
    loadNotes();
}