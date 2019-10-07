import utilities from '../../helpers/utilities';
import './eat.scss';

let health = 100;

const setEventListeners = (funct) => {
  document.getElementById('healthFood').addEventListener('click', funct);
  document.getElementById('trashFood').addEventListener('click', funct);
};

const eatFood = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'healthFood') {
    health += 10;
    if (health > 100) {
      health = 100;
    }
    let stringToPrint = '<h1>EAT</h1>';
    stringToPrint += `<h2>${health}</h2>`;
    stringToPrint += `<progress id="file" max="100" value="${health}"> ${health}% </progress>`;
    stringToPrint += '<button type="button" id="healthFood">Salad</button> <button type="button" id="trashFood">Hamburger</button>';
    utilities.printToDom(stringToPrint, 'eat');
  } else if (buttonID === 'trashFood') {
    health -= 3;
    let stringToPrint = '<h1>EAT</h1>';
    stringToPrint += `<h2>${health}</h2>`;
    stringToPrint += `<progress id="file" max="100" value="${health}"> ${health}% </progress>`;
    stringToPrint += '<button type="button" id="healthFood">Salad</button> <button type="button" id="trashFood">Hamburger</button>';
    utilities.printToDom(stringToPrint, 'eat');
  }
  setEventListeners(eatFood);
};

const eatQuadPrinter = () => {
  let stringToPrint = '<h1>EAT</h1>';
  stringToPrint += `<h2>${health}</h2>`;
  stringToPrint += `<progress id="file" max="100" value="${health}"> ${health}% </progress>`;
  stringToPrint += '<button type="button" id="healthFood">Salad</button> <button type="button" id="trashFood">Hamburger</button>';
  utilities.printToDom(stringToPrint, 'eat');
  setEventListeners(eatFood);
};

export default { eatQuadPrinter };
