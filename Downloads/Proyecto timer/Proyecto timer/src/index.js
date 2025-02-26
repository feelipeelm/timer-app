import Timer from './timer.js';
import './styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');
  const resetButton = document.getElementById('reset');
  const display = document.getElementById('display');

  const timer = new Timer(display);

  startButton.addEventListener('click', () => timer.start());
  stopButton.addEventListener('click', () => timer.stop());
  resetButton.addEventListener('click', () => timer.reset());
});
