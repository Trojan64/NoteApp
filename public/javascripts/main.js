console.log("Hej ( ͡° ͜ʖ ͡°)");
console.log("JavaScript: 1.19");
console.log("CSS: 1.7");
closeForm();
var isFavorite = false;
var all = true;     //show all notes or just favorite
var JSONString = {
    "name":"Hur man använder appen",
    "text":" hur man använder appen \nklicka på noteringen du vill läsa\n",
    "id": 0,
    "secret_code": "1605109233479",
    "created": "1970-01-01",
    "edited": "2030-13-32",
    "favorite": true
                    };
var JSONArray = [];
JSONArray.push(JSONString);
function openForm() {
    document.getElementById("newNote").style.display = "block";
    document.getElementById("notes").innerHTML = "";
    document.getElementById("help").style.display = "none";
    document.getElementById("nav").style.display = "none";
    document.getElementById("navTools").style.display = "flex";
    document.getElementById("Save").style.display = "none";
    document.getElementById("Checkmark").style.display = "block";
    document.getElementById("Crossmark").style.display = "block";
    document.getElementById("Delete").style.display = "none";
    
    isFavorite = false;
}
function closeForm() {
    document.getElementById("newNote").style.display = "none";
}

function loadNotes(){
    //variables
    var element = document.getElementById("notes"); //note element
    var div = document.createElement("div");
    var header = document.createElement("p");
    var created = document.createElement("p");
    var edited = document.createElement("p");
    var node = document.createTextNode("Add New Note");
    var createdNode;
    var editedNode;
    var img = document.createElement("img");
    //hide specifik note
    document.getElementById("readNote").style.display = "none";
    document.getElementById("help").style.display = "inline-block";
    document.getElementById("nav").style.display = "flex";
    document.getElementById("navTools").style.display = "none";
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
        created = document.createElement("p");
        edited = document.createElement("p");
        createdNode = document.createTextNode(JSONArray[i].created);
        editedNode = document.createTextNode(JSONArray[i].edited)
        if (JSONArray[i].favorite) {
            node = document.createTextNode("❤️ " + JSONArray[i].name);
        } else {
            node = document.createTextNode(JSONArray[i].name);
        }
        header.appendChild(node);
        header.setAttribute("class", "NoteHead");
        //
        created.appendChild(createdNode);
        created.setAttribute("class", "DateTime created");
        edited.appendChild(editedNode);
        edited.setAttribute("class", "DateTime edited");
        //lägg in i diven
        div.appendChild(header);
        div.appendChild(created);
        div.appendChild(edited);
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
    } else {
        Save.style.display = "grid";
        Delete.style.display = "grid";
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
    document.getElementById("navTools").style.display = "flex";
    document.getElementById("Save").style.display = "block";
    document.getElementById("Checkmark").style.display = "none";
    document.getElementById("Crossmark").style.display = "none";


    if (JSONArray[id].Favorite){
        document.getElementById("Favorite").style.backgroundImage="url(/images/heartTrue.png)";
    }
    else {
         document.getElementById("Favorite").style.backgroundImage="url(/images/heartFalse.png)";
    }
    //do not question the MACHINE
    addToFavorite(id);
    addToFavorite(id);
}

function editNote(id) {
    if (id!=0) {
        console.log("saved nr: " + id);
        JSONArray[id].name = document.getElementById("Titel").value;
        JSONArray[id].text = document.getElementById("Notering").value;
        var month = new Date().getMonth() + 1;
        JSONArray[id].edited = new Date().getFullYear() + "-" + month + "-" + new Date().getDate();
        saveSNote();
    }   else {
        console.log("you cant change the tutorial!");
    }

}
function addToFavorite(id){
    if (JSONArray[id].favorite){
        isFavorite = false;
        JSONArray[id].favorite = false;
        document.getElementById("Favorite").style.backgroundImage="url(/images/heartFalse.png)";
    }
    else{
        isFavorite = true;
        JSONArray[id].favorite = true;
        document.getElementById("Favorite").style.backgroundImage="url(/images/heartTrue.png)";
    }
}

function filterByFavorite(){
    if(all){
        all = false
        document.getElementById("Switch").style.backgroundImage="url(/images/heartTrue.png)";
    } else{
        all = true
        document.getElementById("Switch").style.backgroundImage="url(/images/heartFalse.png)";
    }

}