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

let toDoList = ['Hit the gym','Pay Bill','Meet George'];

const renderList = () =>{

   let myTodo =  document.getElementById('TODO');
    
   for(const todo in toDoList){
   
    const p  =   document.createElement('p');

       p.textContent = toDoList[todo];
        
       myTodo.appendChild(p);

    }
}

const addTodo = () => {
    const addTodo = document.getElementById('data').value;
    if(addTodo !=='' && addTodo !== ' ' )
    {
        toDoList.push(addTodo);
        
    }
}

renderList();
addTodo();