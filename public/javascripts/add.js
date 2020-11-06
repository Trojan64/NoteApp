function addNote() {
    var Title = document.getElementById("title").value;
    var text = document.getElementById("text").value;
    var id = JSONArray.length();
    var JSONString = {
        "name": Title,
        "text": text,
        "id": id
    };
    JSONArray.push(JSONString);
    closeForm();
    loadNotes();
}