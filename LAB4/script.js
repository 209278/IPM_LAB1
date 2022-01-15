var draggedEl,
      grabPointY,
      grabPointX;

function onDragStart(ev) {
    var boundingClientRect;
    
    draggedEl = this;
    
    boundingClientRect = draggedEl.getBoundingClientRect();
    
    grabPointY = boundingClientRect.top - ev.clientY;
    grabPointX = boundingClientRect.left - ev.clientX;
};
  
function onDrag(ev) {
    if (!draggedEl) {
      return;
    }
    
    var posX = ev.clientX + grabPointX,
        posY = ev.clientY + grabPointY;
    
    if (posX < 0) {
      posX = 0;
    }
    
    if (posY < 0) {
      posY = 0;
    }

    var allBlocks = document.getElementsByClassName('block');
    var allBlocksLength = allBlocks.length;

    for(var i = 0; i < allBlocksLength; i++){
        if(allBlocks[i] != draggedEl){
            var style = window.getComputedStyle(allBlocks[i]);
            var matrix = new WebKitCSSMatrix(style.transform);

            if(posX + 100 > matrix.m41 && posX < matrix.m41 + 100
                && posY + 100 > matrix.m42 && posY < matrix.m42 + 100){
                return;
            }
        }
    }

    draggedEl.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
};
  
function onDragEnd(ev) { 
    if(ev.target.className == "dropZone"){
        draggedEl = null;
        grabPointX = null;
        grabPointY = null;
    }
};

function createBlock() {
    var block = document.createElement('div');
    var transformCSSValue = "translateX(150px) translateY(0px)";
    
    block.style.transform = transformCSSValue; 
    block.classList.add('block');
    block.classList.add('bgRed');
    block.addEventListener('mousedown', onDragStart, false);

    document.getElementById("field1").appendChild(block);
    
};

document.addEventListener('mousemove', onDrag, false);
document.addEventListener('mouseup', onDragEnd, false);