
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


//check if links work
console.log(history);
console.log(output);
console.log(funcButton);
console.log(numButton);
console.log(clearAllButton);
console.log(clearErrorButton);
console.log(dotButton);
console.log(euqalButton);


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
        allowToInputOperator = true;

        console.log("displays", displays);
        console.log("funcOperators", funcOperators);  
    }
}


for (let i = 0; i < funcButton.length; i++) {
    let func = funcButton[i];
    func.onclick = function() {
        if(allowToInputOperator) {
            funcOperators += func.innerHTML;
            displays += funcOperators;
            output.innerHTML = displays;  
            allowToInputOperator = false;
            allowToInputDot = true

            console.log("displays", displays);
            console.log("funcOperators", funcOperators);
        }
             
    }
}



//let equal mark works

euqalButton.onclick = function() {
    output.innerHTML = eval(displays);
    funcOperators = "";
}

clearAllButton.onclick = function() {
    displays = "";
    output.innerHTML = 0;
}

clearErrorButton.onclick = function() {
    displays = "";
    output.innerHTML = 0;
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


