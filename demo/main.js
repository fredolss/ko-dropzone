var ko = require("knockout");
var dz = require("ko-dropzone");

function AppViewModel() {

    this.handleDrop = function (file){
        alert("You dropped a file named " + file.name);
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());