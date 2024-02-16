function addTask() { 
    let task = document.getElementById('addTask');
    
    if (task.value === "") {
        alert("You have to write about your task in the input box");
    }
    else { 
        let listSection = document.getElementById('listSection');
        let taskTextDiv = document.createElement('div');
        let taskTextP = document.createElement('p');
        taskTextP.innerText = task.value;
        taskTextDiv.appendChild(taskTextP);
        listSection.appendChild(taskTextDiv);

        taskTextDiv.classList.add('list', 'uncheck');
    }
    task.value = '';
}