export default class Timer {
    constructor(displayElement) {
      this.displayElement = displayElement;
      this.time = 0;
      this.interval = null;
      this.updateDisplay();
    }
  
    updateDisplay() {
      const minutes = String(Math.floor(this.time / 60)).padStart(2, '0');
      const seconds = String(this.time % 60).padStart(2, '0');
      this.displayElement.textContent = `${minutes}:${seconds}`;
    }
  
    start() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.time++;
          this.updateDisplay();
        }, 1000);
      }
    }
  
    stop() {
      clearInterval(this.interval);
      this.interval = null;
    }
  
    reset() {
      this.stop();
      this.time = 0;
      this.updateDisplay();
    }
  }
  