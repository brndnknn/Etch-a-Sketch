/* Brandon Keenan
    theOdinProject/Etch-a-Sketch
    */

const container = document.getElementById('container');
let divNum = 20;
let colNum = '';
for(let i = 0; i < divNum; i++){
    colNum = colNum + "auto ";
}

container.style.gridTemplateColumns = colNum;


for( let i = 0; i < divNum; i++){
    for( let j = 0; j < divNum; j++){

    let thisDiv = document.createElement('div');
    let numOfDiv = (i * divNum) + (j +1);
    thisDiv.textContent = (i * divNum ) + (j +1);
    //thisDiv.style.backgroundColor = 'hsl(' + numOfDiv + ', 100, 100)';
    thisDiv.id = numOfDiv;
    console.log(i , j);
    container.append(thisDiv);
    }
}