function addTask() { 
    var task = document.getElementById('addTask');
    
    if (task.value === "") {
        alert("You have to write about your task in the input box");
    }
    else { 
        const taskText = document.getElementById('listContainerP');
        taskText.innerText = task.value;
    }
    task.value = " ";
}