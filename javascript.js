import TimeController from './controller.js';
import Timer from './timer.js';
import addTimingToButton from './timingHandler.js'

const controller = new TimeController();
var timeVar;
const timer = new Timer();
//controller.model.clearLocalStorage();
controller.showActivities();
controller.showData();
//Update, do not do this every time app starts, check if day exists//
//

var today = controller.model.getCurrentDayFromDaysArray();
console.log("Found day", today);
if (today) {
    controller.model.setDay(today);
}

var addButton = document.getElementById('buttonAddActivity');
addButton.addEventListener('click', function addActivity() {
    controller.addActivityToModel();
    controller.showNewActivity();
    controller.showData();
}, false);
addTimingToButton(timeVar, timer, null);
var saveButton = document.getElementById('saveDay');
saveButton.addEventListener('click', function() {
   controller.addDayToModel();
   controller.showData();
}, false);

