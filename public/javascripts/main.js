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
    document.getElementById("addForm").style.display = "none";
    document.getElementById("notes").innerHTML = "";
}
  
function closeForm() {
    document.getElementById("newNote").style.display = "none";
    document.getElementById("addForm").style.display = "block";
}

function loadNotes(){
    document.getElementById("notes").innerHTML = "";
    for (var i = 0; i < JSONArray.length; i++) {
        var div = document.createElement("div");
        var header = document.createElement("p");
        var node = document.createTextNode(JSONArray[i].name);
        header.appendChild(node);
        header.setAttribute("class", "NoteHead");
        //p tag
        var p = document.createElement("p");
        var pNode = document.createTextNode(JSONArray[i].text);
        p.appendChild(pNode);
        //lägg in i diven
        div.appendChild(header);
        div.appendChild(p);
        div.setAttribute("onclick", "loadSpecificNote(" + i + ")");
        var element = document.getElementById("notes");
        element.appendChild(div);
    }
}

function loadSpecificNote(id) {
    console.log("Load note: " + id);
    //Title
    var Title = document.createElement("p");
    var TitleNode = document.createTextNode(JSONArray[id].name);
    Title.appendChild(TitleNode);
    //Notes
    var Note = document.createElement("p");
    var NoteNode = document.createTextNode(JSONArray[id].text);
    Note.appendChild(NoteNode);
    //add to readNote div
    var element = document.getElementById("readNote");
    element.appendChild(Title);
    element.appendChild(Note);
    //hide the other divs
    document.getElementById("notes").style.display = "none";
    document.getElementById("addForm").style.display = "none";
}