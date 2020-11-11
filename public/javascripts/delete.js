function deleteNote(id) {     //Delete Note

    if (confirm("Are you sure you want to delete this note?")) {
        if(id!=0) {     //cant delete tutorial
            JSONArray.splice(id, 1);
            for (var i = 0; i < JSONArray.length; i++) {    //Fixar nya id
                JSONArray[i].id = i;
            }
        }
    }
    saveSNote();
    loadNotes();
}