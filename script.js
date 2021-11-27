function validateEmail(event){
    console.log(event.target.valid);
    if(event.target.value.toLowerCase()
                            .match(
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            )
    ){
        console.log(true);
        event.target.classList = "good";
    }else{
        console.log(false);
        event.target.classList = "bad";
    }
}

function validatePostalCode(event){
    if(event.target.value.toLowerCase()
                            .match(
                                /^[0-9]{2}-[0-9]{3}$/
                            )
    ){
        console.log(true);
        event.target.classList = "good";
    }else{
        console.log(false);
        event.target.classList = "bad";
    }
}

function validateNip(event){
    if(event.target.value.toLowerCase()
        .match(
            /^[0-9]{10}$/
        )
    ){
        console.log(true);
        event.target.classList = "good";
    }else{
        console.log(false);
        event.target.classList = "bad";
    }
}

function validateId(event){
    if(event.target.value.toLowerCase()
        .match(
            /^[a-z]{3}[0-9]{3,6}$/
        )
    ){
        console.log(true);
        event.target.classList = "good";
    }else{
        console.log(false);
        event.target.classList = "bad";
    }
}