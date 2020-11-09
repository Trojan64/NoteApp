//Storage.js by Viktor and Max
/*
    This Code took 10 years to make (or minutes)
    whichever seems reasonable
*/
window.onload = loadSNote();
loadNotes();
function saveSNote() {  //save note to storage
    localStorage['JSON_ARRAY'] = JSON.stringify(JSONArray); // only strings
}

function loadSNote() {  //load storage notes
    var stored = localStorage['JSON_ARRAY'];
    if (stored == undefined) {
        saveSNote();
        stored = localStorage['JSON_ARRAY'];
    }
    JSONArray = JSON.parse(stored);
    console.log(JSON.parse(stored));
}