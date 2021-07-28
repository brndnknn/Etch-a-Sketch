/* Brandon Keenan
    theOdinProject/Etch-a-Sketch
    */

const container = document.getElementById('container');

for( let i = 0; i < 16; i++){
    let thisDiv = document.createElement('div');
    thisDiv.textContent = i;
    thisDiv.id = i;
    console.log(i);
    container.append(thisDiv);
}