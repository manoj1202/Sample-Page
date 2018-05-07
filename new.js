let toDoList = ['Hit The Gym', 'Pay Bill', 'Meet George'];
let myTodo = document.getElementById('TODO');

const renderList = () => {
    myTodo.innerHTML = '';

    for (const todo in toDoList) {

        myTodo.innerHtml += `<p> ${todo} </p>`

        myTodo.innerHTML += `<div>
            <p>${toDoList[todo]}</p>
            <button name="Delete" onClick="deleteTodo(event,${todo})" >X</button>
            </div>`
    }
}

const addTodo = () =>{
    const addText = document.getElementById('data').value;
    if(addText !== '' && addText !== ' '){
        toDoList.push(addText);
        renderList();
    }
    document.getElementById('data').value = '';
}

const deleteTodo = (e,index) => {
    e.preventDefault();

    toDoList.splice(index,1)
    renderList();
}

document.getElementById('press').addEventListener('click',function(e){
    e.preventDefault();
    addTodo();
})
renderList();