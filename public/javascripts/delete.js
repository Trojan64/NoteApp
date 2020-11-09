function deleteNote(id) {     //Delete Note
    JSONArray.splice(id, 1);
    for (var i = 0; i < JSONArray.length; i++) {    //Fixar nya id
        JSONArray[i].id = i;
    }
    saveSNote();
    loadNotes();
}