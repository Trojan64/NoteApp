console.log("Hej ( ͡° ͜ʖ ͡°)");
closeForm();
var JSONString = {
    "name":"Brittas bullar",
    "text":" brittas bullrecept för goda bullar"
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
    //hide specifik note
    document.getElementById("readNote").style.display = "none";
    //show All Notes
    document.getElementById("notes").style.display = "grid";
    document.getElementById("notes").innerHTML = "";
    //add new Note button in same div
    var div = document.createElement("div");
    div.setAttribute("onclick", "openForm()");
    var header = document.createElement("p");
    var node = document.createTextNode("Add New Note");
    header.appendChild(node);
    header.setAttribute("class", "NoteHead AddNotePos");
    div.appendChild(header);
    var element = document.getElementById("notes");
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
    console.log("Load note: " + id);
    //show readNotes
    document.getElementById("readNote").style.display = "block";
    document.getElementById("readNote").innerHTML = "";
    //Title
    var Title = document.createElement("p");
    var TitleNode = document.createTextNode(JSONArray[id].name);
    Title.appendChild(TitleNode);
    //Notes
    var Note = document.createElement("p");
    var NoteNode = document.createTextNode(JSONArray[id].text);
    Note.appendChild(NoteNode);
    //exit button
    var Exit = document.createElement("div");
    var ExitNode = document.createTextNode("X");
    Exit.appendChild(ExitNode);
    Exit.setAttribute("onclick", "loadNotes()");
    //add to readNote div
    var element = document.getElementById("readNote");
    element.appendChild(Title);
    element.appendChild(Note);
    element.appendChild(Exit);
    //hide the other divs
    document.getElementById("notes").style.display = "none";
}