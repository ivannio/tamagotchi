import utilities from '../../helpers/utilities';
import './fight.scss';

let strength = 100;

const setEventListeners = (funct) => {
  document.getElementById('runAway').addEventListener('click', funct);
  document.getElementById('commitViolence').addEventListener('click', funct);
};

const fight = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'runAway') {
    strength += 1;
    if (strength > 100) {
      strength = 100;
    }
    let stringToPrint = '<h1>FIGHT</h1>';
    stringToPrint += `<h2>${strength}</h2>`;
    stringToPrint += `<progress id="file" max="100" value="${strength}"> ${strength}% </progress><br>`;
    stringToPrint += '<button type="button" id="runAway">Run away with grace</button> <button type="button" id="commitViolence">Take part in violence</button>';
    utilities.printToDom(stringToPrint, 'fight');
  } else if (buttonID === 'commitViolence') {
    strength -= 10;
    let stringToPrint = '<h1>FIGHT</h1>';
    stringToPrint += `<h2>${strength}</h2>`;
    stringToPrint += `<progress id="file" max="100" value="${strength}"> ${strength}% </progress><br>`;
    stringToPrint += '<button type="button" id="runAway">Run away with grace</button> <button type="button" id="commitViolence">Take part in violence</button>';
    utilities.printToDom(stringToPrint, 'fight');
  }
  setEventListeners(fight);
};

const fightQuadPrinter = () => {
  let stringToPrint = '<h1>FIGHT</h1>';
  stringToPrint += `<h2>${strength}</h2>`;
  stringToPrint += `<progress id="file" max="100" value="${strength}"> ${strength}% </progress><br>`;
  stringToPrint += '<button type="button" id="runAway">Run away with grace</button> <button type="button" id="commitViolence">Take part in violence</button>';
  utilities.printToDom(stringToPrint, 'fight');
  setEventListeners(fight);
};

export default { fightQuadPrinter };
