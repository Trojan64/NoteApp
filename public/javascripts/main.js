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
    document.getElementById("notes").innerHTML = "";
    for (var i = 0; i < JSONArray.length; i++) {
        var div = document.createElement("div");
        var header = document.createElement("h3");
        var node = document.createTextNode(JSONArray[i].name);
        header.appendChild(node);
        //p tag
        var p = document.createElement("p");
        var pNode = document.createTextNode(JSONArray[i].text);
        p.appendChild(pNode);
        //lägg in i diven
        div.appendChild(header);
        div.appendChild(p);
        var element = document.getElementById("notes");
        element.appendChild(div);
    }
}