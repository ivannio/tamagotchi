import utilities from '../../helpers/utilities';
import './eat.scss';

let health = 100;

const eatFood = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'healthFood') {
    health += 10;
    let stringToPrint = '<h1>EAT</h1>';
    stringToPrint += `<h2>${health}</h2>`;
    stringToPrint += '<button type="button" id="healthFood">Salad</button> <button type="button" id="trashFood">Hamburger</button>';
    utilities.printToDom(stringToPrint, 'eat');
  } else if (buttonID === 'trashFood') {
    health -= 3;
    let stringToPrint = '<h1>EAT</h1>';
    stringToPrint += `<h2>${health}</h2>`;
    stringToPrint += '<button type="button" id="healthFood">Salad</button> <button type="button" id="trashFood">Hamburger</button>';
    utilities.printToDom(stringToPrint, 'eat');
  }
};

const eatQuadPrinter = () => {
  let stringToPrint = '<h1>EAT</h1>';
  stringToPrint += `<h2>${health}</h2>`;
  stringToPrint += '<button type="button" id="healthFood">Salad</button> <button type="button" id="trashFood">Hamburger</button>';
  utilities.printToDom(stringToPrint, 'eat');
  document.getElementById('healthFood').addEventListener('click', eatFood);
  document.getElementById('trashFood').addEventListener('click', eatFood);
};

export default { eatQuadPrinter };
