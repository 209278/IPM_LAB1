
  
onDragStart = function (ev) {
    
};
  
onDrag = function (ev) {
    
};
  
onDragEnd = function () { 
    
};

function createBlock() {
    var block = document.createElement('div');
    var transformCSSValue = "translateX(150px) translateY(0px)";
    
    block.style.transform = transformCSSValue; 
    block.classList.add('block');
    block.classList.add('bgRed');
    block.addEventListener('mousedown', onDragStart, false);

    document.getElementById("mainWindow").appendChild(block);
    
};

