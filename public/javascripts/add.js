function addNote() {
    var Title = document.getElementById("title");
    var text = document.getElementById("text");
    var id = JSONArray.length;
    var month = new Date().getMonth() + 1;
    if (Title.value != "") {
        var JSONString = {
            "name": Title.value,
            "text": text.value,
            "id": id,
            "created": new Date().getFullYear() + "-" + month + "-" + new Date().getDate(),
            "edited": new Date().getFullYear() + "-" + month + "-" + new Date().getDate(),
            "favorite": isFavorite,
            "secret_code": Date.now()
        };
    }
    else {
        var JSONString = {
            "name": "[UNNAMNED]",
            "text": "",
            "id": id,
            "created": new Date().getFullYear() + "-" + month + "-" + new Date().getDate(),
            "edited": new Date().getFullYear() + "-" + month + "-" + new Date().getDate(),
            "favorite": isFavorite,
            "secret_code": Date.now()
        };
    }
    JSONArray.push(JSONString);
    Title.value = "";
    text.value = "";
    closeForm();
    saveSNote();
    loadNotes();
}
