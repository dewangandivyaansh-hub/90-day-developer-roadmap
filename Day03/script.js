function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("display").value;

    expression = expression.replace('%', '/100');

    try {
        document.getElementById("display").value = eval(expression);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("keydown", function (event) {
    let key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});