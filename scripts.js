/* Brandon Keenan
    theOdinProject/Etch-a-Sketch
    */

const container = document.getElementById('container');
let divNum = 20;

let divSize;

function createColumns(){
    let colNum = '';
    for(let i = 0; i < divNum; i++){
        colNum = colNum + "auto ";}
    container.style.gridTemplateColumns = colNum;
    container.style.gridTemplateRows = colNum;
    }


function defineSizes(){
    let canvasHeight, canvasWidth, marginSize;
    if (window.innerWidth > window.innerHeight){
        canvasHeight = window.innerHeight * 0.8;
        divSize = canvasHeight/divNum;
        marginSize = (window.innerWidth - canvasHeight) / 2; 
    }
    else{
        canvasWidth = (window.innerWidth * 0.8)
        divSize= canvasWidth/divNum;
        marginSize = (window.innerWidth - canvasWidth) / 2;
    }
    container.style.marginLeft = `${marginSize}px`;
    container.style.marginRight = `${marginSize}px`;
}


function createDivBoxes(){
    createColumns();
    defineSizes();
    for( let i = 0; i < divNum; i++){
        for( let j = 0; j < divNum; j++){
        let thisDiv = document.createElement('div');
        thisDiv.style.height = `${divSize}px`;
        thisDiv.style.width = `${divSize}px`;
        let numOfDiv = (i * divNum) + (j +1);
        //thisDiv.textContent = (i * divNum ) + (j +1);
        //thisDiv.style.backgroundColor = `hsl(${numOfDiv}, 100% ,50%)`;
        //console.log(thisDiv.style.backgroundColor);
        thisDiv.id = numOfDiv;
        thisDiv.className = 'boxes';
        container.append(thisDiv);
        thisDiv.addEventListener('mouseenter', drawSketch);
        }
    }
}

function clearCanvas(){
    while (container.firstElementChild) {
        
    container.removeChild(container.firstElementChild);
    }
}

function drawSketch(e){
    console.log(e);
    e.target.style.backgroundColor = '#000';
}

function shakeSketch(){
    clearCanvas();
    divNum = parseInt(prompt('how many squares?'));
    createDivBoxes();
}

createDivBoxes();

document.getElementById('shake').addEventListener('click', shakeSketch);