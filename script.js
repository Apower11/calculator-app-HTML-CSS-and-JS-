const buttons = document.querySelectorAll(".calculator-number"),
backspace = document.querySelector("#backspace"),
equals = document.querySelector("#equals"),
plus = document.querySelector("#plus"),
clear = document.querySelector('#clear');
let input = document.querySelector(".calculator-input");

clear.addEventListener('click', () => {
    input.textContent = '';
})

backspace.addEventListener("click", () => {
    input.textContent = input.textContent.slice(0, -1);
})

buttons.forEach(button => {
    button.addEventListener("click", async () => {
        let answer = '0';
        let operation = '';
        if(button === backspace || button === clear) {
            input.textContent += '';
        } else if(button === equals) {
            answer = math.evaluate(input.textContent.replace(/x/g, '*').replace(/÷/g, '/'));
            input.textContent = math.format(answer, {precision: 14});
            answer = 0;
        } else if(button.textContent === 'x') {
            input.textContent += 'x';
        } else if(button.textContent === '÷') {
            input.textContent += '÷';
        } else {
            input.textContent += button.textContent;
        }
    })
});