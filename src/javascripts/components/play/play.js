import utilities from '../../helpers/utilities';
import './play.scss';

let fun = 50;

const setEventListeners = (funct) => {
  document.getElementById('superFun').addEventListener('click', funct);
  document.getElementById('kindaFun').addEventListener('click', funct);
};

const play = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'superFun') {
    fun += 50;
    if (fun > 100) {
      fun = 100;
    }
    let stringToPrint = '<h1>PLAY</h1>';
    stringToPrint += `<h2>${fun}</h2>`;
    stringToPrint += `<progress id="file" max="100" value="${fun}"> ${fun}% </progress><br>`;
    stringToPrint += '<button type="button" id="superFun">Play video games</button> <button type="button" id="kindaFun">Take a hike</button>';
    utilities.printToDom(stringToPrint, 'play');
  } else if (buttonID === 'kindaFun') {
    fun += 2;
    if (fun > 100) {
      fun = 100;
    }
    let stringToPrint = '<h1>PLAY</h1>';
    stringToPrint += `<h2>${fun}</h2>`;
    stringToPrint += `<progress id="file" max="100" value="${fun}"> ${fun}% </progress><br>`;
    stringToPrint += '<button type="button" id="superFun">Play video games</button> <button type="button" id="kindaFun">Take a hike</button>';
    utilities.printToDom(stringToPrint, 'play');
  }
  setEventListeners(play);
};

const playQuadPrinter = () => {
  let stringToPrint = '<h1>PLAY</h1>';
  stringToPrint += `<h2>${fun}</h2>`;
  stringToPrint += `<progress id="file" max="100" value="${fun}"> ${fun}% </progress><br>`;
  stringToPrint += '<button type="button" id="superFun">Play video games</button> <button type="button" id="kindaFun">Take a hike</button>';
  utilities.printToDom(stringToPrint, 'play');
  setEventListeners(play);
};

export default { playQuadPrinter };
