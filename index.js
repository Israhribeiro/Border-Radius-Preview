inputs = document.getElementsByTagName("input");
connected = false;

function checkChar(e){
    const char = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]'

    if(char.match(pattern)){
        return true;
    }
}

function setConnected(){
    checkBox = document.getElementById("checkBox");
    connected = checkBox.checked;
}

forms = document.querySelectorAll("#form");

forms.forEach(element => {
    element.addEventListener("blur",function(e){
        if(e.target.value == ""){
            e.target.value = "0";
            ChangeBorder(e.target);
        }
    },true)
});

function preventNonInteger(e){
    if(!checkChar(e)){
        e.preventDefault();
    }
}

function checkIfEmpty(){
    if(input != document.activeElement){
        input.value = "0";
    }
}

function ChangeBorder(input){
    box = document.getElementById("box").style;
    if(connected){
        inputs[0].value = input.value;
        inputs[1].value = input.value;
        inputs[2].value = input.value;
        inputs[3].value = input.value;
        document.querySelector("#result").innerHTML = `border-radius: ${input.value}px`;
        box.borderRadius = `${input.value}px`;
    }else{
        box.borderRadius = `${inputs[0].value}px ${inputs[1].value}px ${inputs[3].value}px ${inputs[2].value}px`;
        if(input.value != "" && connected)
            document.querySelector("#result").innerHTML = `border-radius: ${inputs[0].value}px ${inputs[1].value}px ${inputs[3].value}px ${inputs[2].value}px`;
    }
}