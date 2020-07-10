import addTimingToButton from './timingHandler.js'
import Activity from './activity.js';
import Timer from './timer.js'
var timeVar;
const timer = new Timer();
export default class View {
    renderActivites(activitiesList) {
        var list = document.getElementById('activitiesList');
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
    renderSingleActivity(activity) {
        var list = document.getElementById('activitiesList');
        const item = document.createElement('li');
        item.setAttribute('id', activity.name);
        item.setAttribute('class', activity.category);
        item.classList.add('activityButton');
        item.innerText = activity.name;
        //item.addEventListener('click', startTimer, false);
        list.appendChild(item);
        addTimingToButton(timeVar, timer, item);
    }
    renderPieTargetFull(activities,totalTime) {
        var pie = document.getElementById('pieTarget');
        pie.innerHTML = '<h2>Target Allocation</h2>';
        activities.forEach(element => {
            console.log(totalTime);
            var percentage = parseFloat((element.timer / totalTime) * 100).toFixed(2);
            console.log(percentage);
            let inner = `${element.name}
                        <div style="width:${percentage}%" id="${element.name}" class="activityData ${element.category}">${percentage}%</div>`;
            pie.innerHTML += inner;
        });
    }

    renderPieActualFull(activities,totalTime) {

        var pie = document.getElementById('pieActual');
        pie.innerHTML = '<h2 id="title">Actual Allocation</h2>';
        activities.forEach(element => {
            console.log(totalTime);
            var percentage = parseFloat((element.timer / totalTime) * 100).toFixed(2);
            console.log(percentage);
            let inner = `${element.name}
                        <div style="width:${percentage}%" id="${element.name}" class="activityData ${element.category}">${percentage}%</div>`;
            pie.innerHTML += inner;
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
    

}