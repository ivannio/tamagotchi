import '../styles/main.scss';
import './components/eat/eat.scss';
import './components/sleep/sleep.scss';
import './components/play/play.scss';
import './components/fight/fight.scss';
import eat from './components/eat/eat';

const init = () => {
  eat.eatQuadPrinter();
};

init();

console.error('hi');
