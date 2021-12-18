let dragged;
let id;
let index;
let indexDrop;
let list;
var newId = 5;

function drop(ev){
    if(ev.target.className == "dropzone" && ev.target.id !== id) {
        dragged.remove( dragged );
        for(let i = 0; i < list.length; i += 1) {
            if(list[i] === ev.target){
            indexDrop = i;
            }
        }
        console.log(index, indexDrop);
        if(index > indexDrop) {
            ev.target.before( dragged );
        } else {
            ev.target.after( dragged );
        }
    }
}

function drag(ev){
    dragged = ev.target;
    id = ev.target.id;
    list = ev.target.parentNode.children;
    for(let i = 0; i < list.length; i += 1) {
        if(list[i] === dragged){
            index = i;
        }
    }
};

function allowDrop(ev) {
    ev.preventDefault();
}

document.addEventListener("keyup", function(ev) {
    if (ev.keyCode === 13) {
        var li = document.createElement('li'); 
        li.setAttribute("class", "dropzone");
        li.setAttribute("ondrop", "drop(event)");
        li.setAttribute("ondrag", "drag(event)");
        li.setAttribute("id", newId);
        li.setAttribute("draggable", "true");
        
        var input = document.createElement('input'); 
        input.setAttribute('typr', "text");
        input.setAttribute('value', "Item");

        li.appendChild(input);

        document.getElementsByClassName("wrapper")[0].appendChild(li);

        newId++;
    }
});
