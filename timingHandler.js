import TimeController from './controller.js';
var controller = new TimeController();
export default function addTimingToButton(timeVar, timer) {
    var activityButtons = Array.from(document.getElementsByClassName('activityButton'));
    activityButtons.forEach(element => {
        element.addEventListener('click', toggleTime, false);
    });


    function startTimer() {
        timeVar = setInterval(run, 1000);
    }
    function run() {
        timer.renderTime();
        timer.runTime();


    }
    function stopTimer() {
        clearInterval(timeVar);
    }

    function toggleTime() {
        if (timer.isRunning()) {
            stopTimer();
            timer.changeRun(false);
            controller.addTimeToActivity(this, timer.getTimeSeconds());
        }
        else {
            timer.reset();
            startTimer();
            timer.changeRun(true);
        }
    }
}