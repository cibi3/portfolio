const display = document.getElementById("display");
const decimalsDiv = document.querySelector(".decimals");
const operatorsDiv = document.querySelector(".operators");

const decimals = ["1","2","3","4","5","6","7","8","9","0","."];
const operators = ["+","C","-","BS","*","/","="];

addButtons(decimalsDiv,decimals);
addButtons(operatorsDiv,operators);


function addButtons(div,arr){
    arr.forEach(e=>{
        const button = document.createElement("button");
        button.textContent = e;
        button.onclick = modifyDisplay;
        div.appendChild(button);
    })
}

function modifyDisplay(event){
const valuePressed = event.target.textContent;
if(decimals.includes(valuePressed)){
    addDecimalToDisplay()  ;  
}
else{
    addOperatorToDisplay();
}

function addDecimalToDisplay(){    
    if(isNumber()||isDotAbsent()){
    display.value+=valuePressed;
    }   
    function isNumber(){
        return  parseInt(valuePressed) >=0 && parseInt(valuePressed)<=9
    }
    function isDotAbsent(){
        return valuePressed==="."&& display.value.includes(".")==false
    }
    }
 function addOperatorToDisplay(){
    
    switch(valuePressed){
        case '+': 
        case "-":
        case "*":
        case "/":
            deleteLastEntryIfOperator();
            display.value+=valuePressed;
            break;
            case 'BS':
                display.value=display.value.slice(0,-1);
                break;
        case "C":
            display.value="";
            break;
        case "=":
            let output = eval(display.value);
            display.value = formatOutput(output);
            function formatOutput(output){
                const parsedOutput =parseFloat(output);
                if(parsedOutput==NaN){
                    return output;
                }
                else {
                    return parsedOutput.toPrecision(6);
                }

            }
    }
    function deleteLastEntryIfOperator(){
        if(operators.includes(display.value.slice(-1))){
            display.value = display.value.slice(0,-1);
        }

    }
    }
}