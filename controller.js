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
        let activity =this.getNewActivity();
        this.model.storeActivities(activity);

    }
    addTimeToActivity(element, time) {
        let activity = element.id;
        console.log("activity", activity, "with time amount", time);
        this.model.storeTime(activity, time)
    }
    addDayToModel() {
        this.model.storeDay();
    }
    showActivities() {
        this.view.renderActivites(this.model.activityArray);
    }
    showNewActivity() {
        let activity =this.getNewActivity();
        this.view.renderSingleActivity(activity);
    }
    getNewActivity() {
        var form = document.getElementById("addedActivity");
        var formData = new FormData(form);
        let name = formData.get('name');
        let category = formData.get('category');
        var activity = new Activity(name, category);
        return activity;
    }
    showPie(){
        this.model.getDay();
    }
}