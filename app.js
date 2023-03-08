import {colors, board} from './photoArray.js';
const SQUARES_NUMBER = 900
const activeFun = 600;

const displayWidth0 = window.innerWidth;
const displayHeight0 = window.innerHeight;


autoMargin()


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.id = 'square';


    square.addEventListener('mouseover', () => setColor(square, i), {once: true})
    board.append(square)

    
}


////////////////////////////////////////////////////////////////////////////


function setColor (element, i) {
    element.classList.add('active') 
    //console.log('activeOK')
    conditionCounts()

    
    element.style.backgroundColor = colors[i] // color[i]
    element.style.boxShadow = `0 0 2px ${colors[i]}, 0 0 10px ${colors[i]}` // color[i]
}

function autoMargin() {
    var displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    const marginWidth = (displayWidth - activeFun) / 2
    const marginHeight = (displayHeight - activeFun) / 2

    board.style.margin = `${marginHeight}px ${marginWidth}px`;
}

function conditionCounts() {
    if ((document.querySelectorAll('.square').length >= activeFun && 
        document.querySelectorAll('.active').length == 10)) {
        //console.log('Transition! :)'); alert("Transition...");
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
}
