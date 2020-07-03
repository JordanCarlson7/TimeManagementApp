export default class Day {
    constructor(day) {
        if (day) {
            this.date = {
                year: day.year,
                month: day.month,
                day: day.day
            }
            this.activities = day.activities;
            this.totalTime = day.totalTime; 
        } else {
            this.date = {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate()
            }
            this.activities = [];
            this.totalTime = 0;
        }
    }
    addActivity(activity) {
        this.activities.push(activity);
        this.totalTime += activity.timer;
    }
    removeActivity(activity) {
        //remove the activity
    }
}