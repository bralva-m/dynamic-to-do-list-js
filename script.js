document.addEventListener('DOMContentLoaded', ()=>{
    loadTasks();

const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask(taskText,save = true) {
    const taskText = taskInput.value.trim();
    if (taskText === ''){
        alert('please input a valid task');
        return;
    }else {
        const task = document.createElement('li');
        task.textContent= taskText;
       

        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.classList.add('remove-btn');

        button.addEventListener('click', () =>{
            task.remove();
             })
    task.append(button);
    taskList.appendChild(task)
            }
        if (save) {
            const storedTasks= JSON.parse(localStorage.getItem('tasks') || '[]')
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedztasks));
        }
        
taskInput.value= '';
      
}
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addText(taskText, false));
    //'false' indicates not to save again to local storage
}


addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter')
        addTask();

        } 
    )
}); 