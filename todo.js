// document.querySelector('#input').addEventListener('input',function(e){
//     console.log(e.target.value)
// })

// document.querySelector('#form1').addEventListener('submit', function(e){
//     e.preventDefault();
//     let a = [];
//     const p = document.createElement('p');
//     p.textContent = e.target.elements.todoValue.value ;
//     document.querySelector('#head1').appendChild(p);

//     a.push(e.target.elements.todoValue.value);


//     console.log(a);
//     e.target.elements.todoValue.value = '';
// })

let toDoList = ['Hit the gym', 'Pay Bill', 'Meet George'];
let myTodo = document.getElementById('TODO');

const renderList = () => {
    myTodo.innerHTML = '';

    for (const todo of toDoList) {

        const p = document.createElement('p');
        p.textContent = todo;
        myTodo.appendChild(p);

        const Delete = document.createElement('button');

        myTodo.appendChild(Delete);
    }
}

// Delete.addEventListener('click', function () {
//     let text = toDoList;
//     let index = text.length;
//     console.log(text);
//     console.log(index);
// })

const addTodo = () => {
    const addTodo = document.getElementById('data').value;
    if (addTodo !== '' && addTodo !== ' ') {
        toDoList.push(addTodo);
        renderList();
        // const p  =   document.createElement('p');

        // p.textContent = addTodo;

        // myTodo.appendChild(p);
        
    }
    document.getElementById('data').value = '';
}


document.getElementById('press').addEventListener('click', function (e) {
    e.preventDefault();
    addTodo();
})
renderList();
console.log(toDoList);