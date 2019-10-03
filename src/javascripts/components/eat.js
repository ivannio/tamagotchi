import utilities from '../helpers/utilities';

let health = 100;

// Merge the following two functions!

const eatSalad = (e) => {
  const buttonID = e.target.id;
  health += 10;
  let stringToPrint = '<h1>EAT</h1>';
  stringToPrint += `<h2>${health}</h2>`;
  stringToPrint += '<button type="button" id="healthFood">Salad</button> <button type="button" id="trashFood">Hamburger</button>';
  utilities.printToDom(stringToPrint, 'eat');
};

const eatBurger = () => {
  health -= 3;
  let stringToPrint = '<h1>EAT</h1>';
  stringToPrint += `<h2>${health}</h2>`;
  stringToPrint += '<button type="button" id="healthFood">Salad</button> <button type="button" id="trashFood">Hamburger</button>';
  utilities.printToDom(stringToPrint, 'eat');
};

const eatQuadPrinter = () => {
  let stringToPrint = '<h1>EAT</h1>';
  stringToPrint += `<h2>${health}</h2>`;
  stringToPrint += '<button type="button" id="healthFood">Salad</button> <button type="button" id="trashFood">Hamburger</button>';
  utilities.printToDom(stringToPrint, 'eat');
  document.getElementById('healthFood').addEventListener('click', eatSalad);
  document.getElementById('trashFood').addEventListener('click', eatBurger);
};

export default { eatQuadPrinter };
