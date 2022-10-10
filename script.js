//Criação do h1
function createH1 () {
    const body = document.getElementsByTagName('body')[0];
    let createH1 = document.createElement('h1');
    createH1.id = 'title';
    createH1.innerText = 'Paleta de Cores';
    body.appendChild(createH1);
}

//Criação da section de id = 'color-palette'
function createSectionColorPalette () {
        const body = document.getElementsByTagName('body')[0];
        let createSectionColorPalette = document.createElement('section');
        createSectionColorPalette.id = 'color-palette';
        body.appendChild(createSectionColorPalette);
}

//Laço for que cria 4 divs de classe e borda definidas, filhas da section color-palette 
function createDivs () {
    const sectionColorPalette = document.querySelector('#color-palette');
    
    for (let index = 0; index < 4; index += 1) {
        let createDivColor = document.createElement('div');
        createDivColor.className = 'color';
        createDivColor.style.border = '1px solid black';
        sectionColorPalette.appendChild(createDivColor);
    }
}

function createDivsColored () {
    //Define a primeira div de classe color como preta
    const divsColor = document.getElementsByClassName('color');
    divsColor[0].style.backgroundColor = 'rgb(0, 0, 0)';
    divsColor[0].className = 'color selected';
    
    //Laço for que insere cor aleatório nas divs de classe color a partir do 2º item
    for (let index = 1; index < divsColor.length; index += 1) {
        divsColor[index].style.backgroundColor = createRandomRGB();
    }
}

// Cria botão
function createButton () {
    const body = document.getElementsByTagName('body')[0];
    let createButton = document.createElement('button');
    createButton.id = 'button-random-color';
    createButton.innerText = 'Cores aleatórias';
    body.appendChild(createButton);
}

//Função que cria quadro de 25pixels

function createFrame () {
    const body = document.getElementsByTagName('body')[0];
    const SectionFrame = document.createElement('section');
    SectionFrame.id = 'pixel-board';
    body.appendChild(SectionFrame);
}

function create25Pixels () {
    for (let index = 0; index < 25; index += 1) {
        const sectionFrame = document.querySelector('#pixel-board');
        const pixels = document.createElement('div');
        pixels.className = 'pixel';
        pixels.style.backgroundColor = 'white';
        pixels.style.display = 'inline-block'
        sectionFrame.appendChild(pixels);
    }
}

//Cria evento para o botão que ao clicar muda as cores a partir da 2ª div
function createButtonRandomColor () {
    const buttonRandomColor = document.querySelector('#button-random-color');
    const divsColor = document.getElementsByClassName('color');
    buttonRandomColor.addEventListener('click', function () {
        for (let index = 1; index < divsColor.length; index += 1) {
            divsColor[index].style.backgroundColor = createRandomRGB();
        }
        colorPaletteLocalStorage();
    })
}

//Função que cria RGB aleatório 
function createRandomRGB () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

//Função que armazena paleta de cores no Local Storage da página 
function colorPaletteLocalStorage() {
    const section = document.querySelector('#color-palette');
    const savedSectionColor = section.innerHTML;
    localStorage.setItem('colorPalette', JSON.stringify(savedSectionColor));
}

//Função que pega a paleta no localStorage 
function getLocalStorage () {   
    const section = document.querySelector('#color-palette');
    const body = document.getElementsByTagName('body')[0];
    const initialColor = JSON.parse(localStorage.getItem('colorPalette'));
    
    //Se não houver nada no local storage encerra função, se houver adiciona na section
    if (!initialColor) {
        return;
    } else {
        section.innerHTML = initialColor;
    }
}

//Função que adiciona classe select a paleta quando é clicada
function addSelectClass() {
    const divsColor = document.querySelectorAll('.color');
    
    for (let index = 0; index < divsColor.length; index += 1) {
      if (divsColor[index].classList.contains('selected')) {
        divsColor[index].classList.remove('selected');
      } else {
        divsColor[index].classList.add('selected');
      }
      console.log(divsColor[index].classList)
    }
}

//Função que cria evento de captura da cor da paleta ao clicar
function clickPalette() {
    addEventListener('click', addSelectClass);
}

window.onload = function () {
    createH1();
    createSectionColorPalette();
    createDivs();
    createRandomRGB();
    createDivsColored();
    createButton();
    createButtonRandomColor();
    createFrame();
    create25Pixels();
    getLocalStorage();
    clickPalette();
}