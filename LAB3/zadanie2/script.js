let itemId;
let canGenerateNew = false;
let newId = 2;

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    itemId = ev.target.id;
}

function drop(ev) {
    if(itemId && ev.target.className != "item field notADropZone"){
        ev.preventDefault();
        ev.target.appendChild(document.getElementById(itemId));
        document.getElementById(itemId).toggleAttribute("draggable");
        document.getElementById(itemId).toggleAttribute("ondrag");
        itemId = undefined;
        canGenerateNew = true;
    }
}

function myClick(ev){
    if(canGenerateNew){
        var newElement = document.createElement("canvas");
        newElement.setAttribute("id", newId);
        newId++;
        newElement.setAttribute("class", "item field notADropZone");
        newElement.setAttribute("ondrag", "drag(event)");
        newElement.setAttribute("draggable", "true");

        document.getElementsByClassName("footer")[0].appendChild(newElement);
        canGenerateNew = false;
    }
}