window.addEventListener('load', function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; 
    var yyyy = today.getFullYear();

    var day = today.getDay();
    if(day === 0){
        dd = dd - 6;
    }else if(day === 6){
        dd = dd - 5;
    }

    var number_for_min = dd;
    var number_for_max = dd + 4;
    
    if (number_for_min < 10) {
        number_for_min = '0' + number_for_min;
    }

    if (number_for_max < 10) {
        number_for_max = '0' + number_for_max;
    }
    
    if (mm < 10) {
       mm = '0' + mm;
    } 

    
        
    today = yyyy + '-' + mm + '-' + number_for_min;
    document.getElementById("datefield").setAttribute("min", today);
    today = yyyy + '-' + mm + '-' + number_for_max;
    document.getElementById("datefield").setAttribute("max", today);
})

