document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = document.getElementById('new-task-description').value;
    buildToDo(task);
    form.reset();
  });
});


function buildToDo(todo) {
  const li = document.createElement('li');
  li.textContent = todo;
  document.getElementById('tasks').appendChild(li);
}