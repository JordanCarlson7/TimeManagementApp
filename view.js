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
        
    }


}