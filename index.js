console.log("Hi12345");

const container = document.querySelector(".container");

let todoData = [];

const setTodoData=(data)=>{
    data.forEach(element => {
        todoData.push(element);
    });
    todoData.forEach(element => {
        const todoList = document.createElement('ul');
        todoList.classList.add('todoList');

        const todoListItem = document.createElement('li');
        todoListItem.classList.add('todoListItem');

        todoListItem.innerHTML= `<p>${element.todo}</p>`;//to add text dynamically in <li> tag

        todoList.append(todoListItem);

        container.append(todoList);//add our "todoList"(.js file) element to "conatiner"(.html file)
    });
}

fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((apiData) => setTodoData(apiData.todos))
    .catch((error) => console.log(error));//to handle errors

// console.log(todoData);




//This can also done as below:- (when there are more tags)
// const cardHTML = `
//     <ol class='todoList1'>
//         <li class='todoListItem1'></li>
//         <li class='todoListItem1'></li>
//         <li class='todoListItem1'></li>
//         <li class='todoListItem1'></li>
//     </ol>
// `
// todoList.innerHTML = cardHTML;

// console.log(todoList);
// console.log(todoListItem);
// console.dir(todoList);