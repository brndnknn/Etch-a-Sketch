/* Brandon Keenan
    theOdinProject/Etch-a-Sketch
    */

const container = document.getElementById('container');
let divNum = 20;

let divSize;

function createColumns(){
    let colNum = '';
    let rowNum = '';
    for(let i = 0; i < divNum; i++){
        colNum = colNum + "auto ";
    }
    for(let i = 0; i < divNum; i++){
        rowNum = rowNum + "auto ";
    }
    container.style.gridTemplateColumns = colNum;
    container.style.gridTemplateRows = rowNum;
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
        //thisDiv.textContent = (numOfDiv);
        //thisDiv.style.backgroundColor = `hsl(${numOfDiv}, 100% ,50%)`;
        //console.log(thisDiv.style.backgroundColor);
        thisDiv.id = numOfDiv;
        thisDiv.className = 'boxes';
        container.append(thisDiv);
        //thisDiv.addEventListener('mouseenter', drawSketch);
        }
    }
    arrowSketch(currPixel);
}

function clearCanvas(){
    while (container.firstElementChild) {
        
    container.removeChild(container.firstElementChild);
    }

}
let currPixel = 350;

function arrowSketch(pixelID){
    document.getElementById(pixelID).style.backgroundColor = '#F0F';
}


function shakeSketch(){
    clearCanvas();
    divNum = parseInt(prompt('how many squares?'));
    createDivBoxes();
}

createDivBoxes();

document.getElementById('shake').addEventListener('click', shakeSketch);

let vertical = false;
let horizontal = false;

document.onkeydown = function(e) {
    console.log(e);

        switch (e.keyCode) {
        case 37:
            console.log('Left Key pressed!');
            if(!boundryCheck(2) && !horizontal){
            currPixel = currPixel - 1;
            horizontal = true;
            }

            break;
        case 38:
            console.log('Up Key pressed!');
            if(!boundryCheck(0) && !vertical){
            currPixel = currPixel - 20;
            vertical = true;
            }
            break;
        case 39:
            console.log('Right Key pressed!');
            if(!boundryCheck(1) && !horizontal){
            currPixel = currPixel + 1;
            horizontal = true;
            }
            break;
        case 40:
            console.log('Down Key pressed!');
            if(!boundryCheck(3) && !vertical){
            currPixel = currPixel + 20;
            vertical = true;}
            break;
    }
   
    
};

let boundryArr = [[],[],[],[]];
function fillBoundryArr(){
    for (let i = 0; i < divNum; i++){
        boundryArr[0].push(i+1);
        boundryArr[1].push((i+1)*divNum);
        boundryArr[2].push(i*divNum + 1);
        boundryArr[3].push(divNum*divNum-i); 
    }
    console.log(boundryArr);
}
fillBoundryArr();

function boundryCheck(side) {
    for(let i = 0; i < divNum; i++){
        console.log(boundryArr[side][i]);
        if (boundryArr[side][i] == currPixel)
        return true;
    }
}

document.onkeyup = function(e){
    console.log(e);
    arrowSketch(currPixel);
    horizontal = false;
    vertical = false;

};