console.log("Hej ( ͡° ͜ʖ ͡°)");
closeForm();

var JSONString = {
    "name":"Brittas bullar",
    "text":" brittas bullrecept för goda bullar"
                    };
var JSONArray = [];
JSONArray.push(JSONString);

function openForm() {
    document.getElementById("newNote").style.display = "block";
    document.getElementById("addForm").style.display = "none";
  }
  
function closeForm() {
    document.getElementById("newNote").style.display = "none";
    document.getElementById("addForm").style.display = "block";
}

function loadNotes(){
    var div = document.createElement("div");
    var header = document.createElement("h4");
    var node = document.createTextNode("this is a test");
    header.appendChild(node);
    //p tag
    var p = document.createElement("p");
    var pNode = document.createTextNode("This is insider test");
    p.appendChild(pNode);
    //lägg in i diven
    div.appendChild(header);
    div.appendChild(p);
    var element = document.getElementById("notes");
    element.appendChild(div);
}