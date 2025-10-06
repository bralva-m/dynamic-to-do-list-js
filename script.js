document.addEventListener('DOMContentLoaded', ()=>{

const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addtask() {
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
        
taskInput.value= '';
      
}

addButton.addEventListener('click', addtask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter')
        addtask();

        } 
    )
}); 