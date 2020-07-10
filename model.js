import Day from './customDay.js';
import Activity from './activity.js';
export default class Model {
    constructor() {
        this.activityArray = JSON.parse(localStorage.getItem('activities')) || [];
        this.activitiy = {};
        this.days = JSON.parse(localStorage.getItem('days')) || [];
        this.day = this.getCurrentDayFromDaysArray() || new Day();
    }
    getDay() { 
        return this.day;
    }
    setDay(day) {
        this.day = day;
    }
    getActivities() {
        return this.activityArray;
    }
    getTotalTime() {
        return this.day.totalTime;
    }
    /*add day to array of days in localstorage*/
    storeDayToLocalStorage() {
        if (!this.getCurrentDayFromDaysArray()) {
            console.log("no days in array")
            var customDate = new Day();
            if(this.day == {}) {
                
            this.day = customDate;
            }
            this.days.push(this.day);
            localStorage.setItem('days', JSON.stringify(this.days));
        }
        else {
            console.log("replacing day from array")
        //replace current day in array using something like this
        this.days[this.days.indexOf(this.getCurrentDayFromDaysArray())] = this.day;
        localStorage.setItem('days', JSON.stringify(this.days));
        }
    }

    /*add activity to array of activities in localStorage*/
    storeActivitiesToLocalStorage(activity) {
        this.activityArray.push(activity);
        localStorage.setItem('activities', JSON.stringify(this.activityArray));
    }

    /*update activity with time from timer*/
    addActvityToTime(activityToAddTime, time) {
        let activityObj = this.activityArray.find(function (activity) {
            return (activity.name == activityToAddTime);
        });
        var activityObjNew = activityObj;
        console.log("the time of this activity is", time);
        activityObjNew.timer = time;
        console.log(activityObjNew);
        console.log("did it work?", this.activityArray[this.activityArray.indexOf(activityObj)]);
        this.activityArray[this.activityArray.indexOf(activityObj)] = activityObjNew;
        console.log("did it work?", this.activityArray[this.activityArray.indexOf(activityObjNew)]);
        localStorage.setItem('activities', JSON.stringify(this.activityArray));
        this.day.totalTime += time;

    }


    /*Must call storeDayToLocal afterwards */
    saveLocalDayWithCurrentActivities() {
        let day = new Day();
        console.log(day);
        day.activities = this.activityArray;
        // get totaltime
        let totalTime = 0;
        this.activityArray.forEach(element => {
            totalTime += element.timer;
            console.log(totalTime);
        });
        day.totalTime = totalTime;
        this.day = day;
        console.log("this.day now = ", this.day);
    }


    /*Get todays day from array*/
    getCurrentDayFromDaysArray() {
        //organize date object with month, day, and year, no seconds
        let date = new Date();
        console.log(date);

        this.currentDay = this.days.find(function (day) {
            return (day.date.year == new Date().getFullYear() && day.date.month == new Date().getMonth() + 1 && day.date.day == new Date().getDate());
        });

        console.log("we found this day matching current day",this.currentDay);
        return this.currentDay;

    }

    clearLocalStorage() {
        localStorage.removeItem('days');
        localStorage.removeItem('activities');
    }
}