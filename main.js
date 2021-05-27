let btn = document.getElementById('button');
let text = document.getElementById('container-text');

function changeColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    text.innerHTML = `Background Color : #${randomColor}`;
}

btn.addEventListener('click', changeColor);
