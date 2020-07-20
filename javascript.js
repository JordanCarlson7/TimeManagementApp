import TimeController from './controller.js';
import Timer from './timer.js';
import addTimingToButton from './timingHandler.js'

const controller = new TimeController();
var timeVar;
const timer = new Timer();

//initial start
controller.showActivities();
controller.showData();
//Check if day exists//
if (!controller.model.getCurrentDayFromDaysArray()) {
    controller.model.storeDayToLocalStorage();
    controller.model.resetActivityTimers();
    controller.model.saveLocalDayWithCurrentActivities();
    controller.model.storeDayToLocalStorage();
}
//getToday
var today = controller.model.getCurrentDayFromDaysArray();
console.log("Found day", today);
if (today) {
    controller.model.setDay(today);
}
//Button to add new activities
var addButton = document.getElementById('buttonAddActivity');
addButton.addEventListener('click', function addActivity() {
    controller.addActivityToModel();
    controller.showNewActivity(controller);
    controller.showData();
}, false);

//Add timing capabiliites to each button, 4th input stands for single button or not
addTimingToButton(timeVar, timer, controller, null);
var saveButton = document.getElementById('saveDay');
saveButton.addEventListener('click', function() {
   controller.addDayToModel();
   controller.showData();
}, false);

//Create the delete buttons for each activity
var activityButtons = Array.from(document.getElementsByClassName('activityButton'));
activityButtons.forEach(element => {
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList += 'smallDelete';
    const activityName = element.id;
    deleteButton.addEventListener('click', function(event) {
        console.log(activityName);
        controller.deleteActivityFromArray(activityName);
        event.cancelBubble = true;
    }, false);
    element.appendChild(deleteButton);
});


