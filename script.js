//Captura dos elementos
const body = document.getElementsByTagName('body')[0];

//Criação do h1
let createH1 = document.createElement('h1');
createH1.id = 'title';
createH1.innerText = 'Paleta de Cores';
body.appendChild(createH1);

//Criação da section de id = 'color-palette'
let createSectionColorPalette = document.createElement('section');
createSectionColorPalette.id = 'color-palette';
body.appendChild(createSectionColorPalette);

//Laço for que cria 4 divs de classe e borda definidas, filhas da section color-palette 
for (let index = 0; index < 4; index += 1) {
    let createDivColor = document.createElement('div');
    createDivColor.className = 'color';
    createDivColor.style.border = '1px solid black';
        
    const sectionColorPalette = document.querySelector('#color-palette');
    sectionColorPalette.appendChild(createDivColor);
}

//Define a primeira div de classe color como preta
const divsColor = document.getElementsByClassName('color');
divsColor[0].style.backgroundColor = 'black';

//Laço for que insere cor aleatório nas divs de classe color a partir do 2º item
for (let index = 1; index < divsColor.length; index += 1) {
    divsColor[index].style.backgroundColor = createRandomRGB();
}

// Cria botão
let createButton = document.createElement('button');
createButton.id = 'button-random-color';
createButton.innerText = 'Cores Aleatórias';
body.appendChild(createButton);



// Funções 
function createRandomRGB () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
