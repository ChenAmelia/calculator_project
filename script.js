
//grab elements in HTML and store them in variables

let history = document.getElementById('history-value');
let output = document.getElementById('output-value');
let funcButton = document.getElementsByClassName('operator__function');
let numButton = document.getElementsByClassName('operator__number');
let clearAllButton = document.getElementById('clearall');
let clearErrorButton = document.getElementById('clearerror');
let euqalButton = document.getElementById('equal');

//set up dot button and prevent the button from repetitive input
let dotButton = document.getElementById('dot');

//add function to variables
let displays = "";
let funcOperators = "";

let allowToInputOperator = false;
let allowToInputDot = true;

console.log("displays", displays);
console.log("funcOperators", funcOperators);


for(let i = 0; i < numButton.length; i++) {
    let number = numButton[i];
    number.onclick = function () {
        displays += number.innerHTML;
        output.innerHTML = displays;  
        history.innerHTML = displays; 

        allowToInputOperator = true; 
    }
}
for (let i = 0; i < funcButton.length; i++) {
    let func = funcButton[i];
    func.onclick = function() {
        if(allowToInputOperator) {
            funcOperators = func.innerHTML;
            displays += funcOperators;
            output.innerHTML = displays;
            history.innerHTML = displays;   

            allowToInputOperator = false;
            allowToInputDot = true

        }      
    }
}

//Calculation
euqalButton.onclick = function() {

    function calculate(toCalculate) {
        return new Function('return ' + toCalculate)();
      }

    output.innerHTML = calculate(displays);
    history.innerHTML = calculate(displays);
    funcOperators = "";
}


//add function to clear-all button
clearAllButton.onclick = function() {
    displays = "";
    output.innerHTML = 0;
}

//add function to clear error button
clearErrorButton.onclick = function() {
    displays = clearErrorButton.value.substr (0,output.length-1);
    output.innerHTML = displays;
}

//automatically add 0. when there's no number in the input box
//only allow dot to be input once in a number and reactive in the next number
dotButton.onclick = function() {
    if(displays == "") {
        displays += '0.';
        output.innerHTML = displays;
    } else if(allowToInputDot) {
        displays += ".";
        output.innerHTML = displays;
    }
    allowToInputDot = false;
}




