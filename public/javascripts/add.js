function addNote() {
    var Title = document.getElementById("title").value;
    var text = document.getElementById("text").value;
    var JSONString = {
        "name": Title,
        "text": text
    };
    JSONArray.push(JSONString);
    closeForm();
    loadNotes();
}