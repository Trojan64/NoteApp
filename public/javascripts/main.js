console.log("Hej ( ͡° ͜ʖ ͡°)");
closeForm();
var JSONString = {
    "name":"Brittas bullar",
    "text":" brittas bullrecept för goda bullar",
    "id":"0"
                    };
var JSONArray = [];
JSONArray.push(JSONString);
loadNotes();
function openForm() {
    document.getElementById("newNote").style.display = "block";
    document.getElementById("notes").innerHTML = "";
}
  
function closeForm() {
    document.getElementById("newNote").style.display = "none";
}

function loadNotes(){
    //variables
    var element = document.getElementById("notes"); //note element
    var div = document.createElement("div");
    var header = document.createElement("p");
    var node = document.createTextNode("Add New Note");
    var img = document.createElement("img");
    //hide specifik note
    document.getElementById("readNote").style.display = "none";
    //show All Notes
    element.style.display = "grid";
    element.innerHTML = "";
    //add new Note button in 'Notes' div
    img.setAttribute("src", "/images/plusbtnV2.png");
    img.setAttribute("class", "addBtn");
    div.setAttribute("onclick", "openForm()");
    header.appendChild(node);
    header.setAttribute("class", "NoteHead AddNotePos");
    div.appendChild(header);
    div.appendChild(img);
    div.setAttribute("class", "addBtnDiv");
    element.appendChild(div);
    //all the notes
    for (var i = 0; i < JSONArray.length; i++) {
        div = document.createElement("div");
        header = document.createElement("p");
        node = document.createTextNode(JSONArray[i].name);
        header.appendChild(node);
        header.setAttribute("class", "NoteHead");
        //lägg in i diven
        div.appendChild(header);
        div.setAttribute("onclick", "loadSpecificNote(" + i + ")");
        element = document.getElementById("notes");
        element.appendChild(div);
    }
}

function loadSpecificNote(id) {
    //variables
    var element = document.getElementById("readNote");  //Readnote element
    var Title = document.getElementById("Titel");
    var Note = document.getElementById("Notering");
    var Save = document.getElementById("Save");
    var globalId = JSONArray[id].id;
    console.log("Load note: " + id);

    //show readNotes
    element.style.display = "block";
    //Get Values
    Title.value = JSONArray[id].name;
    Note.value = JSONArray[id].text;
    Save.setAttribute("onclick", "editNote(" + globalId + "), loadNotes()");
    document.getElementById("notes").style.display = "none";
}

function editNote(id) {
    console.log("saved nr: " + id);
    JSONArray[id].name = document.getElementById("Titel").value;
    JSONArray[id].text = document.getElementById("Notering").value;
}