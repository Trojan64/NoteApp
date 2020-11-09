function addNote() {
    var Title = document.getElementById("title");
    var text = document.getElementById("text");
    var id = JSONArray.length;
    if (Title != "") {
        var JSONString = {
            "name": Title.value,
            "text": text.value,
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
    Title.value = "";
    text.value = "";
    closeForm();
    saveSNote();
    loadNotes();
}