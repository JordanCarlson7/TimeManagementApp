export default class Timer {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.running = false;
    }
    
    runTime() {
        console.log(this.hours,this.minutes,this.seconds);
        this.seconds += 1;
        if (this.seconds == 60) {
            this.minutes += 1;
            this.seconds = 0;
        }
        if (this.minutes == 60) {
            this.hours = 1;
            this.minutes = 0;
            this.seconds = 0;
        }
    
    }
    changeRun(bool) {
        this.running = bool;
    }
    isRunning() {
        return this.running;
    }
    getTimeSeconds() {
        var hourss = this.hours * 60 * 60;
        var minutess = this.minutes * 60;
        var secondss = this.seconds;
        return hourss + minutess + secondss;
    }
    reset() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.running = false;
    }
    setTime(time) {
        
    }
    renderTime() {
        var timer = document.getElementById('timer');
        console.log(timer);
        timer.innerText = `${this.hours}:${this.minutes}:${this.seconds}`;
    }

}