document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById('todo-form');
    let input = document.getElementById('todo-input');
    let list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Create new todo item
        let newTodo = document.createElement('li');
        newTodo.innerText = input.value;

        // Add todo item to list
        list.appendChild(newTodo);

        // Clear the input
        input.value = '';

        // Add event listener to the new item
        newTodo.addEventListener('click', function() {
            newTodo.classList.add('completed-task');

            // remove the item after 1 second
            setTimeout(() => {
                list.removeChild(newTodo);
            }, 1000);
        });
    });
});
