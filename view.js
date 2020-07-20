import addTimingToButton from './timingHandler.js'
import Activity from './activity.js';
import Timer from './timer.js'
var timeVar;
const timer = new Timer();
export default class View {

    renderActivites(activitiesList) {
        var list = document.getElementById('activitiesList');
        list.innerHTML = '';
        activitiesList.forEach(element => {
            const item = document.createElement('li');
            item.setAttribute('id', element.name);
            item.setAttribute('class', element.category);
            item.classList.add('activityButton');
            item.innerText = element.name;
            //item.addEventListener('click', startTimer, false);
            list.appendChild(item);
        });
    }
    renderSingleActivity(activity, controller = null) {
        var list = document.getElementById('activitiesList');
        const item = document.createElement('li');
        item.setAttribute('id', activity.name);
        item.setAttribute('class', activity.category);
        item.classList.add('activityButton');
        item.innerText = activity.name;
        //item.addEventListener('click', startTimer, false);
        list.appendChild(item);
        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList += 'smallDelete';
        const activityName = activity.name;
        deleteButton.addEventListener('click', function (event) {
            
            event.cancelBubble = true;
            console.log(activityName);
            //function deleteSingleActivity 
            var list = document.getElementById('activitiesList');
            var activities = Array.from(list.getElementsByClassName('activityButton'));
            var deleteActivity = activities.find(function (element) {
                if (element.id == activityName) {
                    return element;
                }
            })
            list.removeChild(deleteActivity);
            if (controller) {
                controller.model.deleteActivityFromArray(activityName);
            }

        }, false);
        item.appendChild(deleteButton);
        addTimingToButton(timeVar, timer, controller, item);
    }

    renderPieTargetFull(activities, totalTime) {
        var pie = document.getElementById('pieTarget');
        pie.innerHTML = '<h2>Target Allocation (% of activities in a 18 hour day)</h2>';
        activities.forEach(element => {
            console.log(totalTime);

            let div = document.createElement('div');
            let input = document.createElement('input');
            var percentage = parseFloat(element.targetTime).toFixed(2);
            if (percentage) {

                div.style.width = percentage.toString(10) + '%';
                input.value = percentage.toString(10);
            }
            else {
                div.style.width = 0 + '%';
                input.value = 0;

            }
            console.log(percentage);

            div.id = element.name;
            div.classList += 'activityData ';
            div.classList += element.category;
            input.type = 'number';
            input.classList = 'targetInput';
            input.min = 0;
            input.max = 100;
            input.addEventListener('change', function () {
                let num = this.value;
                this.parentElement.style.width = num.toString(10) + '%';
                console.log(this, "change detected");
                console.log('changing', this.parentElement, 'width to', this.value, "width is now", this.parentElement.style.width);
                element.targetTime = this.value;
                console.log(element.targetTime);
            }
                , false);
            div.appendChild(input);
            div.append(element.name);
            pie.appendChild(div);
        });
    }
    renderPieActualFull(activities, totalTime) {
        var pie = document.getElementById('pieActual');
        pie.innerHTML = '<h2 id="title">Actual Allocation (% of todays activities)</h2>';
        activities.forEach(element => {
            console.log(totalTime);
            var percentage = parseFloat((element.timer / totalTime) * 100).toFixed(2);
            console.log(percentage);
            let div = document.createElement('div');
            div.id = element.name;
            div.classList += 'activityData ';
            div.classList += element.category;
            if (percentage == 'NaN') {

                div.style.width = 0 + '%';
                div.innerText += 0 + '% ';
            } else {

                div.style.width = percentage.toString(10) + '%';

                div.innerText += (percentage + '% ');
            }
            div.append(element.name);
            pie.appendChild(div);
        });
    }

    getNewActivity() {
        var form = document.getElementById("addedActivity");
        var formData = new FormData(form);
        let name = formData.get('name');
        let category = formData.get('category');
        var activity = new Activity(name, category);
        return activity;
    }

    deleteSingleActivity(activityName) {
        var list = document.getElementById('activitiesList');
        var activities = Array.from(list.getElementsByClassName('activityButton'));
        var deleteActivity = activities.find(function (element) {
            if (element.id == activityName) {
                return element;
            }
        })
        list.removeChild(deleteActivity);
    }
}