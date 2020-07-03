import Day from './customDay.js';

export default class Model {
    constructor(){
        this.activityArray = JSON.parse(localStorage.getItem('activities')) || [];
        this.days = JSON.parse(localStorage.getItem('days')) || [];
    }

    storeDay(day) {
        var customDate = new Day(day);
        this.days.push(customDate);
        localStorage.setItem('days',JSON.stringify(this.days));
    }
    storeActivities(activity) {
        this.activityArray.push(activity);
        localStorage.setItem('activities', JSON.stringify(this.activityArray));
    }
    storeTime(activityToAddTime, time) {
        let activityObj = this.activityArray.find(function (activity) {
            return (activity.name == activityToAddTime);
        });
        var activityObjNew = activityObj;
        activityObjNew.timer = time;
        console.log(activityObjNew);

       this.activityArray[this.activityArray.indexOf(activityObj)] = activityObjNew;
       localStorage.setItem('activities', JSON.stringify(this.activityArray));
        
    }

    getDay(date) {
        //organize date object with month, day, and year, no seconds

        console.log(date);
        this.currentDay = this.days.find(function(day) {
            console.log(day);
            return (day.date.year == new Date().getFullYear() && day.date.month == new Date().getMonth() + 1 && day.date.day == new Date().getDate());
        });
        console.log(this.currentDay);
    }

    addActivityToDay(activity) {
        let day = this.getDay();
        day.addActivity(activity);
    }
    clearLocalStorage() {
        localStorage.removeItem('days');
        localStorage.removeItem('activities');
    }
}