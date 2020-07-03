import TimeController from './controller.js';
import Timer from './timer.js';
import addTimingToButton from './timingHandler.js'
var timeVar;
const timer = new Timer();

const controller = new TimeController();
controller.showActivities();
controller.addDayToModel();
//controller.model.clearLocalStorage();
var addButton = document.getElementById('buttonAddActivity');
addButton.addEventListener('click', function addActivity() {
    controller.addActivityToModel();
    controller.showNewActivity();
    controller.showPie();
}, false);
addTimingToButton(timeVar, timer);

