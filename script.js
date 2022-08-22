
//grab elements in HTML and store them in variables

let history = document.getElementById('history-value');
let output = document.getElementById('output-value');
let funcButton = document.getElementsByClassName('operator__function');
let numButton = document.getElementsByClassName('operator__number');
let clearAllButton = document.getElementById('clearall');
let clearErrorButton = document.getElementById('clearerror');
let dotButton = document.getElementById('dot');
let euqalButton = document.getElementById('equal');


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


