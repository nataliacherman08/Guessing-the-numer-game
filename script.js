let btn = document.getElementById('btn');
let output = document.getElementById('output-text');

let number = [Math.floor(Math.random() * 100) + 1];

btn.addEventListener('click', () => {
    let input = document.getElementById('user-input').value;

    if (input === number) {
        output.innerHTML = `You guessed right, your number was ${number}`;
    } else if (input < number) {
        output.innerHTML = 'You guessed too low !';
    };

    if (input > number) {
        output.innerHTML = 'You guessed too high !';
    }
})