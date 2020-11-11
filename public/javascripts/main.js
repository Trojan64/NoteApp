console.log("Hej ( ͡° ͜ʖ ͡°)");
console.log("JavaScript: 1.16.3");
console.log("CSS: 1.6");
closeForm();

var isFavorite = false;

var JSONString = {
    "name":"Hur man använder appen",
    "text":" hur man använder appen \nklicka på noteringen du vill läsa\n",
    "id": 0,
    "favorite": true
                    };
var JSONArray = [];
JSONArray.push(JSONString);
function openForm() {
    document.getElementById("newNote").style.display = "block";
    document.getElementById("notes").innerHTML = "";
    document.getElementById("help").style.display = "none";
    document.getElementById("nav").style.display = "none";
    
    isFavorite = false;
}
function closeForm() {
    document.getElementById("newNote").style.display = "none";
}

function loadNotes(){
    //variables
    var all = true;
    var element = document.getElementById("notes"); //note element
    var div = document.createElement("div");
    var header = document.createElement("p");
    var node = document.createTextNode("Add New Note");
    var img = document.createElement("img");
    //hide specifik note
    document.getElementById("readNote").style.display = "none";
    document.getElementById("help").style.display = "inline-block";
    document.getElementById("nav").style.display = "flex";
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
    for (var i = JSONArray.length - 1; i > 0; i--) {
        if (JSONArray[i].favorite || all) {
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
}

function loadSpecificNote(id) {
    //variables
    var element = document.getElementById("readNote");  //Readnote element
    var Title = document.getElementById("Titel");
    var Note = document.getElementById("Notering");
    var Save = document.getElementById("Save");
    var Delete = document.getElementById("Delete");
    var Favorite = document.getElementById("Favorite");
    console.log("Load note: " + id);
    //show readNotes
    element.style.display = "block";
    if (id===0) {
        Save.style.display = "none";
        Delete.style.display = "none";
    }
    //Get Values
    Title.value = JSONArray[id].name;
    Note.value = JSONArray[id].text;
    Save.setAttribute("onclick", "editNote(" + id + "), loadNotes()");
    Delete.setAttribute("onclick", "deleteNote(" + id + ")");
    Favorite.setAttribute("onclick", "addToFavorite(" + id + ")");
    document.getElementById("help").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("nav").style.display = "none";

    if (isFavorite = true){
        document.getElementById("Favorite").style.backgroundImage="url(/images/heartTrue.png)";
    }
    else{
        document.getElementById("Favorite").style.backgroundImage="url(/images/heartFalse.png)";
    }
}

function editNote(id) {
    if (id!=0) {
        console.log("saved nr: " + id);
        JSONArray[id].name = document.getElementById("Titel").value;
        JSONArray[id].text = document.getElementById("Notering").value;
        JSONArray[id].favorite = isFavorite;
        saveSNote();
    }   else {
        console.log("you cant change the tutorial!");
    }

}
function addToFavorite(id){
    if (JSONArray[id].favorite){
        isFavorite = false;
        JSONArray[id].favorite = false;
    }
    else{
        isFavorite = true;
        JSONArray[id].favorite = true;
    }
    console.log(isFavorite);

}