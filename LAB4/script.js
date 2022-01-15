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