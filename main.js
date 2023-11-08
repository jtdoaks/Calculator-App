const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";

for (let key of keys) {
    const value = key.dataset.key;

    key.addEventListener('click', () => {

        if (value == "clear") {
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
            console.log("AC")

        } else if (value == "backspace") {
            input = input.slice(0, -1);
            display_input.innerHTML = input;
            console.log("backspace")

        } else if (value == "=") {
            let result = eval(input);
            display_output.innerHTML = result;
            console.log("equals")

        } else if (value === "brackets") {
            if (input.indexOf("(") === -1 ||
                input.indexOf("(") !== -1 && input.indexOf(")") !== -1 &&
                input.lastIndexOf("(") < input.lastIndexOf(")")) {
                input += "(";
            } else if (input.indexOf("(") != -1 &&
                input.indexOf(")") == -1 ||
                input.indexOf("(") != -1 &&
                input.indexOf(")") == -1 &&
                input.lastIndexOf(")") > input.lastIndexOf(")")
            ) {
                input += ")";
            }

            display_input.innerHTML = input;

        } else {
            input += value;
            display_input.innerHTML = input;
        }

    })
}

// cleaning input

function cleanInput(input) {
    let inputArray = input.split("");

    for (let i = 0; i < inputArray.length; i++) {

        if (inputArray[i] == "*") {
            inputArray[i] = `<span class="operator">x</span>`
        } else if  (inputArray[i] == "/") {
            inputArray[i] = `<span class="operator">÷</span>`
        } else if  (inputArray[i] == "+") {
            inputArray[i] = `<span class="operator">+</span>`
        } else if  (inputArray[i] == "-") {
            inputArray[i] = `<span class="operator">-</span>`
        } else if  (inputArray[i] == "(") {
            inputArray[i] = `<span class="brackets">(</span>`
        } else if  (inputArray[i] == ")") {
            inputArray[i] = `<span class="brackets">)</span>`
        } else if  (inputArray[i] == "%") {
            inputArray[i] = `<span class="percent">%</span>`
        }
    }
    return inputArray.join("");
}