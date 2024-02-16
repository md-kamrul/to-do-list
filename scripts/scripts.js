function addTask() { 
    let task = document.getElementById('addTask');
    
    if (task.value === "") {
        alert("You have to write about your task in the input box");
    }
    else { 
        // showing text
        let listSection = document.getElementById('listSection');
        let taskTextDiv = document.createElement('div');
        let taskTextP = document.createElement('p');
        taskTextP.innerText = task.value;
        taskTextDiv.appendChild(taskTextP);
        listSection.appendChild(taskTextDiv);

        taskTextDiv.classList.add('list', 'uncheck');
        task.value = '';

        // showing close icon
        let closeIcon = document.createElement('div');
        closeIcon.innerText = "notheing";
        closeIcon.classList.add('close');
        taskTextDiv.classList.add('flex', "flex-row", 'justify-between');
        taskTextDiv.appendChild(closeIcon);
    }
}