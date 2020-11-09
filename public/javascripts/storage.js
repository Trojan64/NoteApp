//Storage.js by Viktor and Max
function saveSNote() {  //save note to storage
    localStorage['JSON_ARRAY'] = JSON.stringify(JSONArray); // only strings
}

function loadSNote() {  //load storage notes
    var stored = localStorage['JSON_ARRAY'];
    console.log(JSON.parse(stored));
}

function loadSpecificSNote() {  //load Specific storage note
    
}