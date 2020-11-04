console.log("Hej");
closeForm();

var JSONString = {
    "name":"Brittas bullar",
    "text":" brittas bullrecept för goda bullar"
                    };
var JSONArray = [];
JSONArray.push(JSONString);

function openForm() {
    document.getElementById("newNote").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("newNote").style.display = "none";
  }