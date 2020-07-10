import Model from './model.js';
import View from './view.js';
import Activity from './activity.js'
//import Day from './allocators.js';

export default class TimeController {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }
    addActivityToModel() {
        let activity = this.view.getNewActivity();
        this.model.storeActivitiesToLocalStorage(activity);

    }
    addTimeToActivity(element, time) {
        this.model.saveLocalDayWithCurrentActivities();
        this.model.storeDayToLocalStorage();
        let activity = element.id;
        console.log("activity", activity, "with time amount", time);
        this.model.addActvityToTime(activity, time);
        this.model.saveLocalDayWithCurrentActivities();
        this.model.storeDayToLocalStorage();
    }
    addDayToModel() {
        this.model.saveLocalDayWithCurrentActivities();
        this.model.storeDayToLocalStorage();
    }
    showActivities() {
        this.view.renderActivites(this.model.activityArray);
    }
    showNewActivity() {
        let activity =this.view.getNewActivity();
        this.view.renderSingleActivity(activity);
    }
    showData() {
        var activities = this.model.getActivities();
        var totalTime = this.model.getTotalTime();
        this.view.renderPieActualFull(activities,totalTime);
        var targetActivities = this.model.getActivities();
        var targetTotalTime = 57600
        this.view.renderPieTargetFull(targetActivities,targetTotalTime);
    }
    
}