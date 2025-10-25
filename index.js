let todos = []; // array to store all todos

const inputEl = document.querySelector('#innerDiv input'); // get input box

function addTodo() {
    const value = inputEl.value.trim(); // get and clean input text
    if (!value) return; // stop if input is empty
    todos.push({ content: value }); // add new todo to array
    inputEl.value = ''; // clear input box
    render(); // refresh the list
}

function deleteTodo(index) {
    todos.splice(index, 1); // remove one todo by index
    render(); // refresh the list
}

function editTodo(index) {
    const newText = prompt("Edit your todo:", todos[index].content); // ask user for new text
    todos[index].content = newText; // update todo text
    render(); // refresh the list
}

function addComponent(todo, index) {
    const todoEl = document.createElement("span"); // create todo text element
    todoEl.textContent = todo.content; // set todo text

    const editBtn = document.createElement("button"); // create edit button
    editBtn.textContent = "edit";
    editBtn.onclick = () => editTodo(index); // call editTodo on click

    const deleteBtn = document.createElement("button"); // create delete button
    deleteBtn.textContent = "delete";
    deleteBtn.onclick = () => deleteTodo(index); // call deleteTodo on click

    const divEl = document.createElement("div"); // create container div
    divEl.setAttribute("id", "div-" + index);

    divEl.appendChild(todoEl); // add todo text
    divEl.appendChild(editBtn); // add edit button
    divEl.appendChild(deleteBtn); // add delete button

    return divEl; // return full todo element
}

function render() {
    document.getElementById("mainDiv").innerHTML = ""; // clear current list
    for (let i = 0; i < todos.length; i++) { // loop through todos
        let element = addComponent(todos[i], i); // create todo element
        document.getElementById("mainDiv").appendChild(element); // add to main div
    }
}
