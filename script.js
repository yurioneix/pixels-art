//Captura dos elementos
const body = document.getElementsByTagName('body')[0];
console.log(body);

//Criação dos elementos
let createH1 = document.createElement('h1');
createH1.id = 'title';
createH1.innerText = 'Paleta de Cores';
body.appendChild(createH1);

let createSectionColorPalette = document.createElement('section');
createSectionColorPalette.id = 'color-palette';
body.appendChild(createSectionColorPalette);


