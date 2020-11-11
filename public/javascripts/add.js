function addNote() {
    var Title = document.getElementById("title");
    var text = document.getElementById("text");
    var id = JSONArray.length;
    if (Title.value != "") {
        var JSONString = {
            "name": Title.value,
            "text": text.value,
            "id": id,
            "favorite": isFavorite
        };
    }
    else {
        var JSONString = {
            "name": "[UNNAMNED]",
            "text": "",
            "id": id,
            "favorite": isFavorite
        };
    }
    JSONArray.push(JSONString);
    Title.value = "";
    text.value = "";
    closeForm();
    saveSNote();
    loadNotes();
}