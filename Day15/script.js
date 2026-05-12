function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let display = document.getElementById("display");

    try {
        let expression = display.value;
        let result = eval(expression);

        addToHistory(expression, result);

        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function addToHistory(expression, result) {
    let history = document.getElementById("history");

    let li = document.createElement("li");

    li.innerText = `${expression} = ${result}`;

    history.prepend(li);
}

// ⌨️ Keyboard support
document.addEventListener("keydown", function (event) {
    let key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ) {
        appendValue(key);
    }

    else if (key === "Enter") {
        calculate();
    }

    else if (key === "Backspace") {
        let display = document.getElementById("display");

        display.value = display.value.slice(0, -1);
    }

    else if (key.toLowerCase() === "c") {
        clearDisplay();
    }
});