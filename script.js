//Number guess game :
let btn = document.getElementById('btn');
let output = document.getElementById('output-text');

let number = [Math.floor(Math.random() * 100) + 1];

btn.addEventListener('click', () => {
    let input = document.getElementById('user-input').value;

    if (input < number) {
        output.innerHTML = 'Too low !'
    } else if (input > number) {
        output.innerHTML = 'Too high !'
    } else {
        output.innerHTML = 'You guessed right !';
    }
})