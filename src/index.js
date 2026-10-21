document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-task-form');
    const taskList = document.getElementById('tasks');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Step 3 - gather data
        const task = event.target['new-task-description'].value;

        // Call buildToDo
        buildToDo(task);
        
        // Clear form after submit (good practice)
        form.reset();
    });

    // Step 4 - Within buildToDo
    function buildToDo(todo) {
        // Create a new li element
        const li = document.createElement('li');
        // Add the task as the textContent
        li.textContent = todo;
        // Append the li element to the task list
        taskList.appendChild(li);
    }
});