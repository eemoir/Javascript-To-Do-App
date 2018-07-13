const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const items = [];
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
	const todoList = document.getElementsByClassName('flow-right controls')[0];
	const form = document.createElement('form');
	const input = document.createElement('input');
	const submit = document.createElement('button');
	form.id = "form";
	input.id = "newTodo";
	submit.type = "sumbit";
	submit.innerHTML = "Add to list";
	form.appendChild(input);
	form.appendChild(submit); 
	todoList.appendChild(form);
	form.onsubmit = function() {
		const todo = document.getElementById('newTodo').value;
		items.push({todo: todo,
			checked: "false"});
		displayTodos();
		document.getElementById('form').remove();
	}
}

function displayTodos() {
	list.innerHTML = '';
	items.forEach( function(item, index) {
		const newTodo = document.createElement('li');
		const box = document.createElement('input');
		const deleteButton = document.createElement('button');
		deleteButton.innerHTML = "Delete item";
		box.type = "checkbox";
		if (item.checked === "false") {
			box.checked = false;
		} else {
			box.checked = true;
		}
		box.onclick = function() {
			if (item.checked === "false") {
				item.checked = "true";
			} else {
				item.checked = "false";
			}
			checkCount();
		}
		deleteButton.onclick = function() {
			items.splice(index, 1);
			displayTodos();
			checkCount();
		}
		box.class = classNames.TODO_CHECKBOX;
		newTodo.class = classNames.TODO_ITEM;
		newTodo.innerHTML = item.todo;
		newTodo.appendChild(box);
		newTodo.appendChild(deleteButton);
		console.log(newTodo);
		list.appendChild(newTodo);
		checkCount();
	});
}

function checkCount() {
	const num = items.length;
	console.log(num);
	itemCountSpan.innerHTML = num;
	let unchecked = 0;
	items.forEach(function(item) {
		if (item.checked === "false") {
			unchecked = unchecked + 1;
			console.log("an item is not checked");
		}
	})
	uncheckedCountSpan.innerHTML = unchecked;
}
