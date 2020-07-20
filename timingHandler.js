import TimeController from './controller.js';


export default function addTimingToButton(timeVar, timer, controller, singleButton = null) {
    
    if (!singleButton) {
        var activityButtons = Array.from(document.getElementsByClassName('activityButton'));
        activityButtons.forEach(element => {
            element.addEventListener('click', toggleTime, false);
        });
    }
    if (singleButton) {
        singleButton.addEventListener('click', toggleTime, true);
    }

    function startTimer() {
        timeVar = setInterval(run, 1000);
    }
    function run() {
        timer.runTime();
        timer.renderTime();
    }
    function stopTimer() {
        clearInterval(timeVar);
    }
    function toggleTime() {
        if (timer.isRunning()) {
            stopTimer();
            timer.changeRun(false);
            controller.addTimeToActivity(this, timer.getTimeSeconds());
            controller.addDayToModel();
            controller.showData();
        }
        else {
            timer.reset();
            startTimer();
            timer.changeRun(true);
        }
    }
}