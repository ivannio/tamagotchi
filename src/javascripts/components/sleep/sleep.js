import utilities from '../../helpers/utilities';
import './sleep.scss';

let energy = 50;

const setEventListeners = (funct) => {
  document.getElementById('takeNap').addEventListener('click', funct);
  document.getElementById('deepSlumber').addEventListener('click', funct);
};

const sleep = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'takeNap') {
    energy += 50;
    if (energy > 100) {
      energy = 100;
    }
    let stringToPrint = '<h1>SLEEP</h1>';
    stringToPrint += `<h2>${energy}</h2>`;
    stringToPrint += `<progress id="file" max="100" value="${energy}"> ${energy}% </progress><br>`;
    stringToPrint += '<button type="button" id="takeNap">Take a lil nap</button> <button type="button" id="deepSlumber">Deep slumber</button>';
    utilities.printToDom(stringToPrint, 'sleep');
  } else if (buttonID === 'deepSlumber') {
    energy += 60;
    if (energy > 100) {
      energy = 100;
    }
    let stringToPrint = '<h1>SLEEP</h1>';
    stringToPrint += `<h2>${energy}</h2>`;
    stringToPrint += `<progress id="file" max="100" value="${energy}"> ${energy}% </progress><br>`;
    stringToPrint += '<button type="button" id="takeNap">Take a lil nap</button> <button type="button" id="deepSlumber">Deep slumber</button>';
    utilities.printToDom(stringToPrint, 'sleep');
  }
  setEventListeners(sleep);
};

const sleepQuadPrinter = () => {
  let stringToPrint = '<h1>SLEEP</h1>';
  stringToPrint += `<h2>${energy}</h2>`;
  stringToPrint += `<progress id="file" max="100" value="${energy}"> ${energy}% </progress><br>`;
  stringToPrint += '<button type="button" id="takeNap">Take a lil nap</button> <button type="button" id="deepSlumber">Deep slumber</button>';
  utilities.printToDom(stringToPrint, 'sleep');
  setEventListeners(sleep);
};

export default { sleepQuadPrinter };
