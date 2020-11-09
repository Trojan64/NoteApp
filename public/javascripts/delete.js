function deleteNote(id) {     //Delete Note
    JSONArray.splice(id, 1);
    saveSNote();
    loadNotes();
}