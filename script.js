//Captura dos elementos
const body = document.getElementsByTagName('body')[0];

//Criação dos elementos
let createH1 = document.createElement('h1');
createH1.id = 'title';
createH1.innerText = 'Paleta de Cores';
body.appendChild(createH1);

let createSectionColorPalette = document.createElement('section');
createSectionColorPalette.id = 'color-palette';
body.appendChild(createSectionColorPalette);

for (let index = 0; index < 4; index += 1) {
let createDivColor = document.createElement('div');
createDivColor.className = 'color';
createDivColor.style.border = '1px solid black';
const sectionColorPalette = document.querySelector('#color-palette');
sectionColorPalette.appendChild(createDivColor);
}

// Funções 

