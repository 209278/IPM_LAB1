let dragged;
let id;
let index;
let indexDrop;
let list;

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
