import '../styles/main.scss';
import './components/eat/eat.scss';
import './components/sleep/sleep.scss';
import './components/play/play.scss';
import './components/fight/fight.scss';
import eat from './components/eat/eat';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';

const init = () => {
  eat.eatQuadPrinter();
  fight.fightQuadPrinter();
  sleep.sleepQuadPrinter();
};

init();

console.error('hi');
