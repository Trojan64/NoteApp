function addNote() {
    var Title = document.getElementById("title").value;
    var text = document.getElementById("text").value;
    var id = JSONArray.length;
    if (Title != "") {
        var JSONString = {
            "name": Title,
            "text": text,
            "id": id
        };
    }
    else {
        var JSONString = {
            "name": "[UNNAMNED]",
            "text": text,
            "id": id
        };
    }
    JSONArray.push(JSONString);
    closeForm();
    saveSNote();
    loadNotes();
}